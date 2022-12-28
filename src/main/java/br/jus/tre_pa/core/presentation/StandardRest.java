package br.jus.tre_pa.core.presentation;

import br.jus.tre_pa.core.persistence.StandardRepository;
import br.jus.tre_pa.core.persistence.datafilter.RSQLParam;

import br.jus.tre_pa.core.persistence.datafilter.model.PageEx;
import br.jus.tre_pa.core.persistence.datafilter.model.SummaryOptions;
import br.jus.tre_pa.core.persistence.datafilter.model.SummaryResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.core.ResolvableType;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.support.Repositories;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import javax.persistence.EntityNotFoundException;
import java.io.Serializable;
import java.util.List;
import java.util.Map;
import javax.validation.Valid;

import br.jus.tre_pa.core.persistence.report.ExportOptions;
import br.jus.tre_pa.core.persistence.report.ExportResult;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import java.util.Objects;

public abstract class StandardRest<T, ID extends Serializable> {

    private Class<T> entityClass;

    protected StandardRepository<T, ID> repository;

    @Autowired
    private ApplicationContext applicationContext;

    @SuppressWarnings("unchecked")
    @PostConstruct
    public void init() {
        this.entityClass = (Class<T>) ResolvableType.forClass(this.getClass()).getSuperType().getGeneric(0).getRawClass();
        Repositories repositories = new Repositories(applicationContext);
        this.repository = (StandardRepository<T, ID>) repositories.getRepositoryFor(entityClass).orElseThrow(() -> new IllegalArgumentException("Repositório não encontrado."));
    }

    @GetMapping
    public ResponseEntity<PageEx<?>> findAll(RSQLParam q, Pageable pageable, SummaryOptions summaryOptions) {
        return ResponseEntity.ok(
            repository.findAll(q.getSpecification(), pageable, summaryOptions)
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable ID id) {
        return ResponseEntity.ok(
            repository.findById(id).orElseThrow(() -> new EntityNotFoundException("Entidade não encontrada. Id=" + id))
        );
    }

    @GetMapping("/_summarize")
    public ResponseEntity<List<SummaryResult>> summarize(RSQLParam q, SummaryOptions summaryOptions) {
        return ResponseEntity.ok(
            repository.summarize(q.getSpecification(), summaryOptions)
        );
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<?> insert(@Valid @RequestBody T resource) {
        return ResponseEntity.ok(repository.save(resource));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable ID id, @Valid @RequestBody T resource) {
        if (!repository.existsById(id)) throw new EntityNotFoundException("Entidade não encontrada. Id=" + id);
        return ResponseEntity.ok(repository.save(resource));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable ID id) {
        repository.deleteById(id);
    }

    @PatchMapping(path = "/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public ResponseEntity<T> patch(@PathVariable ID id,
                                   @RequestBody Map<String, Object> entityAttributes) {
        if (!repository.existsById(id)) throw new EntityNotFoundException("Entidade não encontrada. Id=" + id);
        return ResponseEntity.ok(repository.patch(id, entityAttributes));
    }

    @PostMapping("/export")
    public ResponseEntity<Resource> export(RSQLParam q, @RequestBody(required = false) ExportOptions exportOptions) {
        exportOptions = Objects.isNull(exportOptions) ? new ExportOptions() : exportOptions;
        ExportResult exportResult = repository.export(q.getSpecification(), exportOptions);
        return doExport(exportResult);
    }

    protected ResponseEntity<Resource> doExport(ExportResult exportResult) {
        return ResponseEntity
            .ok()
            .contentType(MediaType.APPLICATION_OCTET_STREAM)
            .headers(exportResult.getHttpHeaders())
            .contentLength(exportResult.getContent().contentLength())
            .body(exportResult.getContent());
    }
}

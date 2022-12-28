package br.jus.tre_pa.app.rest;

import br.jus.tre_pa.app.domain.TipoPontoTransmissao;
import br.jus.tre_pa.core.presentation.StandardRest;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import br.jus.tre_pa.app.repository.vw.TipoPontoTransmissaoListViewRepository;
import br.jus.tre_pa.core.persistence.datafilter.RSQLParam;
import br.jus.tre_pa.core.persistence.datafilter.model.PageEx;
import br.jus.tre_pa.core.persistence.datafilter.model.SummaryOptions;
import br.jus.tre_pa.core.persistence.report.ExportOptions;
import br.jus.tre_pa.core.persistence.report.ExportResult;
import org.springframework.core.io.Resource;

@RestController
@AllArgsConstructor
@RequestMapping("/api/tipo-ponto-transmissao")
public class TipoPontoTransmissaoRest extends StandardRest<TipoPontoTransmissao,Long> {

    private final TipoPontoTransmissaoListViewRepository tipoPontoTransmissaoListViewRepository;

    @Override
    public ResponseEntity<PageEx<?>> findAll(RSQLParam q, Pageable pageable, SummaryOptions summaryOptions) {
        return ResponseEntity.ok(
            tipoPontoTransmissaoListViewRepository.findAll(
                q.getSpecification(),
                pageable,
                summaryOptions
            )
        );
    }

    @Override
    public ResponseEntity<Resource> export(RSQLParam q, ExportOptions exportOptions) {
        ExportResult exportResult = tipoPontoTransmissaoListViewRepository.export(q.getSpecification(), exportOptions);
        return doExport(exportResult);
    }

}


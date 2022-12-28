package br.jus.tre_pa.app.rest;

import br.jus.tre_pa.app.domain.SituacaoPontoTransmissao;
import br.jus.tre_pa.core.presentation.StandardRest;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import br.jus.tre_pa.app.repository.vw.SituacaoPontoTransmissaoListViewRepository;
import br.jus.tre_pa.core.persistence.datafilter.RSQLParam;
import br.jus.tre_pa.core.persistence.datafilter.model.PageEx;
import br.jus.tre_pa.core.persistence.datafilter.model.SummaryOptions;
import br.jus.tre_pa.core.persistence.report.ExportOptions;
import br.jus.tre_pa.core.persistence.report.ExportResult;
import org.springframework.core.io.Resource;

@RestController
@AllArgsConstructor
@RequestMapping("/api/situacao-ponto-transmissao")
public class SituacaoPontoTransmissaoRest extends StandardRest<SituacaoPontoTransmissao,Long> {

    private final SituacaoPontoTransmissaoListViewRepository situacaoPontoTransmissaoListViewRepository;

    @Override
    public ResponseEntity<PageEx<?>> findAll(RSQLParam q, Pageable pageable, SummaryOptions summaryOptions) {
        return ResponseEntity.ok(
            situacaoPontoTransmissaoListViewRepository.findAll(
                q.getSpecification(),
                pageable,
                summaryOptions
            )
        );
    }

    @Override
    public ResponseEntity<Resource> export(RSQLParam q, ExportOptions exportOptions) {
        ExportResult exportResult = situacaoPontoTransmissaoListViewRepository.export(q.getSpecification(), exportOptions);
        return doExport(exportResult);
    }

}


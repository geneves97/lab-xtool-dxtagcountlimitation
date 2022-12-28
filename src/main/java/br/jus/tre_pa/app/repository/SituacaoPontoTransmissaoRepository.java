package br.jus.tre_pa.app.repository;

import br.jus.tre_pa.app.domain.SituacaoPontoTransmissao;

import br.jus.tre_pa.core.persistence.StandardRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SituacaoPontoTransmissaoRepository extends StandardRepository<SituacaoPontoTransmissao,Long> {
}

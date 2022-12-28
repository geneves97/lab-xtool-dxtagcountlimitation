package br.jus.tre_pa.app.repository;

import br.jus.tre_pa.app.domain.Secao;

import br.jus.tre_pa.core.persistence.StandardRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SecaoRepository extends StandardRepository<Secao,Long> {
}

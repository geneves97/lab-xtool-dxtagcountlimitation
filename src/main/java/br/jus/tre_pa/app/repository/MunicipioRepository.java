package br.jus.tre_pa.app.repository;

import br.jus.tre_pa.app.domain.Municipio;

import br.jus.tre_pa.core.persistence.StandardRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MunicipioRepository extends StandardRepository<Municipio,Long> {
}

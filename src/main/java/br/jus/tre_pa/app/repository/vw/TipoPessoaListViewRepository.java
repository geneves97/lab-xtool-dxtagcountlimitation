package br.jus.tre_pa.app.repository.vw;

import br.jus.tre_pa.app.domain.vw.TipoPessoaListView;

import br.jus.tre_pa.core.persistence.StandardRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TipoPessoaListViewRepository extends StandardRepository<TipoPessoaListView,Long> {
}

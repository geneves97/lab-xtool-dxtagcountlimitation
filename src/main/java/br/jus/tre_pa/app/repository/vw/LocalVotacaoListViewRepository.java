package br.jus.tre_pa.app.repository.vw;

import br.jus.tre_pa.app.domain.vw.LocalVotacaoListView;

import br.jus.tre_pa.core.persistence.StandardRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocalVotacaoListViewRepository extends StandardRepository<LocalVotacaoListView,Long> {
}

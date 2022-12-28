package br.jus.tre_pa.app.domain.vw;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Subselect;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDateTime;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@EqualsAndHashCode(of = "id")
@Subselect("" +
    " SELECT " +
    "     t0.ID as ID ," +
    "     t0.NOME as NOME ," +
    "     t0.DESCRICAO as DESCRICAO " +
    " FROM" +
    "     TIPO_PESSOA t0"
)
public class TipoPessoaListView {
    @Id
    private Long id;
    private String nome;
    private String descricao;
}


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
    "     t0.LOCALVOTACAO_ID as LOCALVOTACAO_ID, " +
    "     t0.SECAOPRINCIPAL_ID as SECAOPRINCIPAL_ID, " +
    "     t0.ID as ID ," +
    "     t0.NUMERO as NUMERO " +
    " FROM" +
    "     SECAO t0"
)
public class SecaoListView {
    @Id
    private Long id;
    private Integer numero;
    @Column(name="LOCALVOTACAO_ID")
    private Long localVotacaoId;
    @Column(name="SECAOPRINCIPAL_ID")
    private Long secaoPrincipalId;
}


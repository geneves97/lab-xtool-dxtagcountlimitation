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
    "     t0.PONTOTRANSMISSAO_ID as PONTOTRANSMISSAO_ID, " +
    "     t0.ZONA_ID as ZONA_ID, " +
    "     t0.ID as ID ," +
    "     t0.NOME as NOME ," +
    "     t0.NUMERO as NUMERO ," +
    "     t0.CEP as CEP " +
    " FROM" +
    "     LOCAL_VOTACAO t0"
)
public class LocalVotacaoListView {
    @Id
    private Long id;
    private String nome;
    private Integer numero;
    private String cep;
    @Column(name="PONTOTRANSMISSAO_ID")
    private Long pontoTransmissaoId;
    @Column(name="ZONA_ID")
    private Long zonaId;
}


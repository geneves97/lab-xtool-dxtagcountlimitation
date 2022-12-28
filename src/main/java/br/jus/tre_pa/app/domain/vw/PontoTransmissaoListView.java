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
    "     t0.TIPOPONTOTRANSMISSAO_ID as TIPOPONTOTRANSMISSAO_ID, " +
    "     t0.SITUACAOPONTOTRANSMISSAO_ID as SITUACAOPONTOTRANSMISSAO_ID, " +
    "     t0.ID as ID ," +
    "     t0.NOME as NOME ," +
    "     t0.NUMERO as NUMERO ," +
    "     t0.ENDERECO as ENDERECO ," +
    "     t0.HABILITADO as HABILITADO ," +
    "     t0.DT_CRIACAO as DT_CRIACAO " +
    " FROM" +
    "     PONTO_TRANSMISSAO t0"
)
public class PontoTransmissaoListView {
    @Id
    private Long id;
    private String nome;
    private Integer numero;
    private String endereco;
    private Boolean habilitado;
    private LocalDateTime dtCriacao;
    @Column(name="TIPOPONTOTRANSMISSAO_ID")
    private Long tipoPontoTransmissaoId;
    @Column(name="SITUACAOPONTOTRANSMISSAO_ID")
    private Long situacaoPontoTransmissaoId;
}


package br.jus.tre_pa.app.domain;

import javax.persistence.Entity;
import lombok.Getter;
import lombok.Setter;
import lombok.EqualsAndHashCode;
import javax.persistence.Table;
import org.hibernate.annotations.Immutable;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.SequenceGenerator;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import javax.persistence.OneToMany;
import javax.persistence.ManyToOne;
import javax.persistence.JoinColumn;
import java.util.List;
import java.util.ArrayList;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import br.jus.tre_pa.app.domain.databind.LocalVotacaoDatabind;
import br.jus.tre_pa.app.domain.LocalVotacao;
import org.hibernate.annotations.BatchSize;
import br.jus.tre_pa.app.domain.databind.TipoPontoTransmissaoDatabind;
import br.jus.tre_pa.app.domain.TipoPontoTransmissao;
import br.jus.tre_pa.app.domain.databind.SituacaoPontoTransmissaoDatabind;
import br.jus.tre_pa.app.domain.SituacaoPontoTransmissao;

/**
 * @api-path /api/ponto-transmissao
 * @caption Ponto de Transmissão
 */
@Entity
@Getter
@Setter
@EqualsAndHashCode(of = "id")
@Table(name = "PONTO_TRANSMISSAO")
public class PontoTransmissao {

	/**
	 * @caption id
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_PONTOTRANSMISSAO")
	@SequenceGenerator(initialValue = 1, allocationSize = 1, name = "SEQ_PONTOTRANSMISSAO")
	private Long id;
	/**
	 * @caption Nome
	 */
	@Column(nullable = false, unique = true, name = "NOME")
	@Size(max = 255)
	private String nome;
	/**
	 * @caption Número
	 */
	@Column(name = "NUMERO", columnDefinition = "NUMBER(10) DEFAULT 0")
	private Integer numero;
	/**
	 * @caption Endereço
	 */
	@Column(name = "ENDERECO")
	@Size(max = 255)
	private String endereco;
	/**
	 * @caption Habilitado
	 */
	@Column(name = "HABILITADO", columnDefinition = "NUMBER(1,0) DEFAULT 0")
	private Boolean habilitado;
	/**
	 * @caption Data de Criação
	 */
	@Column(name = "DT_CRIACAO")
	private LocalDateTime dtCriacao;
	/**
	 * @caption Locais de Votação
	 */
	@OneToMany
	@Size(min = 1)
	@BatchSize(size = 10)
	@JoinColumn(name = "PONTOTRANSMISSAO_ID")
	@JsonDeserialize(contentUsing = LocalVotacaoDatabind.IdDeserializer.class)
	@JsonSerialize(contentUsing = LocalVotacaoDatabind.IdSerializer.class)
	private List<LocalVotacao> locaisVotacao = new ArrayList<>();
	/**
	 * @caption Tipos de Pontos de Transmissão
	 */
	@ManyToOne(optional = false)
	@JoinColumn(name = "TIPOPONTOTRANSMISSAO_ID")
	@JsonDeserialize(using = TipoPontoTransmissaoDatabind.IdDeserializer.class)
	@JsonSerialize(using = TipoPontoTransmissaoDatabind.IdSerializer.class)
	private TipoPontoTransmissao tipoPontoTransmissao;
	/**
	 * @caption SituacaoPontoTransmissao
	 */
	@ManyToOne(optional = false)
	@JoinColumn(name = "SITUACAOPONTOTRANSMISSAO_ID")
	@JsonDeserialize(using = SituacaoPontoTransmissaoDatabind.IdDeserializer.class)
	@JsonSerialize(using = SituacaoPontoTransmissaoDatabind.IdSerializer.class)
	private SituacaoPontoTransmissao situacaoPontoTransmissao;
}
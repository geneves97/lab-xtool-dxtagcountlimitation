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

/**
 * @setting true
 * @api-path /api/situacao-ponto-transmissao
 * @caption Status da Situação do Ponto de Transmissão
 */
@Entity
@Getter
@Setter
@EqualsAndHashCode(of = "id")
@Table(name = "SITUACAO_PONTO_TRANSMISSAO")
@Immutable
public class SituacaoPontoTransmissao {

	/**
	 * @caption id
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_SITUACAOPONTOTRANSMISSAO")
	@SequenceGenerator(initialValue = 1, allocationSize = 1, name = "SEQ_SITUACAOPONTOTRANSMISSAO")
	private Long id;
	/**
	 * @caption Nome
	 */
	@Column(name = "NOME")
	@Size(max = 255)
	private String nome;
	/**
	 * @caption codigo
	 */
	@Column(name = "CODIGO")
	@Size(max = 255)
	private String codigo;
}
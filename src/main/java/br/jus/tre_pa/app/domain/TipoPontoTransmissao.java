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
 * @api-path /api/tipo-ponto-transmissao
 * @caption Tipo de Ponto de Transmissão
 */
@Entity
@Getter
@Setter
@EqualsAndHashCode(of = "id")
@Table(name = "TIPO_PONTO_TRANSMISSAO")
public class TipoPontoTransmissao {

	/**
	 * @caption id
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_TIPOPONTOTRANSMISSAO")
	@SequenceGenerator(initialValue = 1, allocationSize = 1, name = "SEQ_TIPOPONTOTRANSMISSAO")
	private Long id;
	/**
	 * @caption Nome
	 */
	@Column(name = "NOME")
	@Size(max = 255)
	private String nome;
	/**
	 * @caption Código
	 */
	@Column(name = "CODIGO")
	@Size(max = 255)
	private String codigo;
}
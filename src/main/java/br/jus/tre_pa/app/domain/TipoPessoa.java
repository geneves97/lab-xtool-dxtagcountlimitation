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
 * @api-path /api/tipo-pessoa
 * @caption Tipo de Pessoa
 */
@Entity
@Getter
@Setter
@EqualsAndHashCode(of = "id")
@Table(name = "TIPO_PESSOA")
public class TipoPessoa {

	/**
	 * @caption id
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_TIPOPESSOA")
	@SequenceGenerator(initialValue = 1, allocationSize = 1, name = "SEQ_TIPOPESSOA")
	private Long id;
	/**
	 * @caption Nome
	 */
	@Column(name = "NOME")
	@Size(max = 255)
	private String nome;
	/**
	 * @caption Descrição
	 */
	@Column(name = "DESCRICAO")
	@Size(max = 255)
	private String descricao;
}
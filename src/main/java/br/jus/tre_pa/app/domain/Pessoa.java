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
import java.time.LocalDate;
import javax.persistence.ManyToOne;
import javax.persistence.JoinColumn;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import br.jus.tre_pa.app.domain.databind.TipoPessoaDatabind;
import br.jus.tre_pa.app.domain.TipoPessoa;

/**
 * @api-path /api/pessoa
 * @caption Pessoa
 */
@Entity
@Getter
@Setter
@EqualsAndHashCode(of = "id")
@Table(name = "PESSOA")
public class Pessoa {

	/**
	 * @caption id
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_PESSOA")
	@SequenceGenerator(initialValue = 1, allocationSize = 1, name = "SEQ_PESSOA")
	private Long id;
	/**
	 * @caption Nome
	 */
	@Column(name = "NOME")
	@Size(max = 255)
	private String nome;
	/**
	 * @caption Data de Nascimento
	 */
	@Column(name = "DT_NASCIMENTO")
	private LocalDate dtNascimento;
	/**
	 * @caption Tipos de Pessoas
	 */
	@ManyToOne(optional = false)
	@JoinColumn(name = "TIPOPESSOA_ID")
	@JsonDeserialize(using = TipoPessoaDatabind.IdDeserializer.class)
	@JsonSerialize(using = TipoPessoaDatabind.IdSerializer.class)
	private TipoPessoa tipoPessoa;
}
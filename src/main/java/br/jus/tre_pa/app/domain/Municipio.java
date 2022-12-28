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
 * @api-path /api/municipio
 * @caption Municipio
 */
@Entity
@Getter
@Setter
@EqualsAndHashCode(of = "id")
@Table(name = "MUNICIPIO")
@Immutable
public class Municipio {

	/**
	 * @caption id
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_MUNICIPIO")
	@SequenceGenerator(initialValue = 1, allocationSize = 1, name = "SEQ_MUNICIPIO")
	private Long id;
	/**
	 * @caption Nome
	 */
	@Column(name = "NOME")
	@Size(max = 255)
	private String nome;
	/**
	 * @caption Sede
	 */
	@Column(name = "SEDE", columnDefinition = "NUMBER(1,0) DEFAULT 0")
	private Boolean sede;
}
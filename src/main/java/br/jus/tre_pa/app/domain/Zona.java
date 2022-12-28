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
import javax.persistence.ManyToMany;
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;
import java.util.Set;
import java.util.HashSet;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import br.jus.tre_pa.app.domain.databind.MunicipioDatabind;
import br.jus.tre_pa.app.domain.Municipio;
import org.hibernate.annotations.BatchSize;

/**
 * @api-path /api/zona
 * @caption Zona
 */
@Entity
@Getter
@Setter
@EqualsAndHashCode(of = "id")
@Table(name = "ZONA")
@Immutable
public class Zona {

	/**
	 * @caption id
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_ZONA")
	@SequenceGenerator(initialValue = 1, allocationSize = 1, name = "SEQ_ZONA")
	private Long id;
	/**
	 * @caption Sigla
	 */
	@Column(name = "SIGLA")
	@Size(max = 255)
	private String sigla;
	/**
	 * @caption Número
	 */
	@Column(name = "NUMERO", columnDefinition = "NUMBER(10) DEFAULT 0")
	private Integer numero;
	/**
	 * @caption Municipio
	 */
	@ManyToMany
	@BatchSize(size = 10)
	@JoinTable(name = "MUNICIPIO_ZONA", joinColumns = @JoinColumn(name = "ZONA_ID"), inverseJoinColumns = @JoinColumn(name = "MUNICIPIO_ID"))
	@JsonDeserialize(contentUsing = MunicipioDatabind.IdDeserializer.class)
	@JsonSerialize(contentUsing = MunicipioDatabind.IdSerializer.class)
	private Set<Municipio> municipio = new HashSet<>();
}
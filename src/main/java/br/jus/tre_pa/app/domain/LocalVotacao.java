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
import javax.persistence.OneToMany;
import javax.persistence.JoinColumn;
import javax.persistence.CascadeType;
import java.util.List;
import java.util.ArrayList;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import br.jus.tre_pa.app.domain.databind.SecaoDatabind;
import br.jus.tre_pa.app.domain.Secao;
import org.hibernate.annotations.BatchSize;
import javax.persistence.ManyToOne;
import br.jus.tre_pa.app.domain.databind.ZonaDatabind;
import br.jus.tre_pa.app.domain.Zona;

/**
 * @api-path /api/local-votacao
 * @caption Local de Votação
 */
@Entity
@Getter
@Setter
@EqualsAndHashCode(of = "id")
@Table(name = "LOCAL_VOTACAO")
@Immutable
public class LocalVotacao {

	/**
	 * @caption id
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_LOCALVOTACAO")
	@SequenceGenerator(initialValue = 1, allocationSize = 1, name = "SEQ_LOCALVOTACAO")
	private Long id;
	/**
	 * @caption Nome
	 */
	@Column(name = "NOME")
	@Size(max = 255)
	private String nome;
	/**
	 * @caption Número
	 */
	@Column(name = "NUMERO", columnDefinition = "NUMBER(10) DEFAULT 0")
	private Integer numero;
	/**
	 * @caption Cep
	 */
	@Column(name = "CEP")
	@Size(max = 255)
	private String cep;
	/**
	 * @caption Seções
	 */
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@BatchSize(size = 10)
	@JoinColumn(name = "LOCALVOTACAO_ID")
	@JsonDeserialize(contentUsing = SecaoDatabind.IdDeserializer.class)
	@JsonSerialize(contentUsing = SecaoDatabind.IdSerializer.class)
	private List<Secao> secoes = new ArrayList<>();
	/**
	 * @caption Zona
	 */
	@ManyToOne(optional = false)
	@JoinColumn(name = "ZONA_ID")
	@JsonDeserialize(using = ZonaDatabind.IdDeserializer.class)
	@JsonSerialize(using = ZonaDatabind.IdSerializer.class)
	private Zona zona;
}
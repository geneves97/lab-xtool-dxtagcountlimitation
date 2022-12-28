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
import javax.persistence.ManyToOne;
import javax.persistence.JoinColumn;
import java.util.List;
import java.util.ArrayList;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import br.jus.tre_pa.app.domain.databind.SecaoDatabind;
import org.hibernate.annotations.BatchSize;

/**
 * @api-path /api/secao
 * @caption Seção
 */
@Entity
@Getter
@Setter
@EqualsAndHashCode(of = "id")
@Table(name = "SECAO")
@Immutable
public class Secao {

	/**
	 * @caption id
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_SECAO")
	@SequenceGenerator(initialValue = 1, allocationSize = 1, name = "SEQ_SECAO")
	private Long id;
	/**
	 * @caption Número
	 */
	@Column(name = "NUMERO", columnDefinition = "NUMBER(10) DEFAULT 0")
	private Integer numero;
	/**
	 * @caption Seções Agregadas
	 */
	@OneToMany(mappedBy = "secaoPrincipal")
	@Size
	@BatchSize(size = 10)
	@JsonDeserialize(contentUsing = SecaoDatabind.IdDeserializer.class)
	@JsonSerialize(contentUsing = SecaoDatabind.IdSerializer.class)
	private List<Secao> secoesAgregadas = new ArrayList<>();
	@ManyToOne
	@JoinColumn(name = "SECAOPRINCIPAL_ID")
	private Secao secaoPrincipal;
}
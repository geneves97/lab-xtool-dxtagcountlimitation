package br.jus.tre_pa.core.persistence.config;


import br.jus.tre_pa.SpringBootApp;
import br.jus.tre_pa.core.persistence.impl.StandardRepositoryImpl;
import br.jus.tre_pa.core.persistence.StandardRepository;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * Habilita a {@link StandardRepository} para uso.
 */
@Configuration
@EnableJpaRepositories(repositoryBaseClass = StandardRepositoryImpl.class, basePackageClasses = SpringBootApp.class)
public class StandardJpaRepositoryConfig {
}

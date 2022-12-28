package br.jus.tre_pa.core.persistence.flyway;


import lombok.extern.slf4j.Slf4j;
import org.flywaydb.core.Flyway;
import org.springframework.boot.autoconfigure.flyway.FlywayMigrationInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.DependsOn;

import javax.sql.DataSource;

@Configuration
@Slf4j
public class FlywayConfig {

	@Bean
	FlywayMigrationInitializer flywayInitializer(Flyway flyway) {
		return new FlywayMigrationInitializer(flyway, (f) -> {
			f.setBaselineOnMigrate(true);
			f.setBaselineVersionAsString("0");
		});
	}

	@Bean
	@DependsOn("entityManagerFactory")
	FlywayMigrationInitializer delayedFlywayInitializer(Flyway flyway) {
		log.info("Inicializando flyway");
		return new FlywayMigrationInitializer(flyway, null);
	}

    @Bean
    public Flyway flyway(DataSource dataSource) {
        Flyway flyway = new Flyway();
        flyway.setDataSource(dataSource);
        return flyway;
    }

}

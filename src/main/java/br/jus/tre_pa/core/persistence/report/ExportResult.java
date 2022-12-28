package br.jus.tre_pa.core.persistence.report;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;

/**
 * Classe com os dados do resultado da exportação.
 */
@Getter
@Setter
@ToString
public class ExportResult {

    private ByteArrayResource content;

    private HttpHeaders httpHeaders;

}

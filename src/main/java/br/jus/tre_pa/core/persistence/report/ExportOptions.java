package br.jus.tre_pa.core.persistence.report;

import lombok.Getter;
import lombok.Setter;

/**
 * Classe com as opções de exportação.
 */
@Getter
@Setter
public class ExportOptions {

    public enum ExportType {
        CSV,
        PDF,
        XLSX,
        JSON,
        XML
    }

    private ExportType exportType = ExportType.CSV;
}

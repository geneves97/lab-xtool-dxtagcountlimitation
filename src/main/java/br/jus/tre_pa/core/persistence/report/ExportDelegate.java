package br.jus.tre_pa.core.persistence.report;

import com.fasterxml.jackson.databind.ObjectWriter;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;
import lombok.SneakyThrows;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;

import java.io.BufferedOutputStream;
import java.io.ByteArrayOutputStream;
import java.io.OutputStreamWriter;
import java.util.List;

/**
 * Classe
 */
public class ExportDelegate {

    @SneakyThrows
    public static <X> ExportResult exportCsv(Class<X> entityClass, List<X> content, ExportOptions exportOptions) {
        CsvMapper mapper = new CsvMapper();
        CsvSchema schema = mapper.schemaFor(entityClass);
        schema = schema.withHeader().withColumnSeparator('\t');
        ObjectWriter objectWriter = mapper.writer(schema);
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        BufferedOutputStream bos = new BufferedOutputStream(baos);
        OutputStreamWriter writerOutputStream = new OutputStreamWriter(bos, "UTF-8");
        objectWriter.writeValue(writerOutputStream, content);
        ExportResult exportResult = new ExportResult();
        exportResult.setContent(new ByteArrayResource(baos.toByteArray()));
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.set(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + entityClass.getName().concat(".csv") + "\"");
        exportResult.setHttpHeaders(httpHeaders);
        return exportResult;
    }

    public static <X> ExportResult exportPdf(Class<X> entityClass, List<X> content, ExportOptions exportOptions) {
        throw new UnsupportedOperationException("Exportação de PDF ainda não implementada.");
    }

    public static <X> ExportResult exportXlsx(Class<X> entityClass, List<X> content, ExportOptions exportOptions) {
        throw new UnsupportedOperationException("Exportação de XLSX ainda não implementada.");
    }

    public static <X> ExportResult exportJson(Class<X> entityClass, List<X> content, ExportOptions exportOptions) {
        throw new UnsupportedOperationException("Exportação de JSON ainda não implementada.");
    }

    public static <X> ExportResult exportXml(Class<X> entityClass, List<X> content, ExportOptions exportOptions) {
        throw new UnsupportedOperationException("Exportação de XML ainda não implementada.");
    }
}

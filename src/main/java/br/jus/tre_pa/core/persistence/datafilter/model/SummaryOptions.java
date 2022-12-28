package br.jus.tre_pa.core.persistence.datafilter.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

/**
 * Classe que contém
 */
@Getter
@Setter
@ToString
@EqualsAndHashCode
public class SummaryOptions {

    private List<SummaryRequest> summaryRequests = new ArrayList<>();
}

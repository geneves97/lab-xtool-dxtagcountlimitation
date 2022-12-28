package br.jus.tre_pa.core.persistence.datafilter.config;

import br.jus.tre_pa.core.persistence.datafilter.model.SummaryOperation;
import br.jus.tre_pa.core.persistence.datafilter.model.SummaryOptions;
import br.jus.tre_pa.core.persistence.datafilter.model.SummaryRequest;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.MethodParameter;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.annotation.RequestParamMethodArgumentResolver;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;
import java.util.Objects;

@Configuration
public class SummaryOptionsConfig implements WebMvcConfigurer {

    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        resolvers.add(new ExtraOptionsResolver(false));
    }

    public class ExtraOptionsResolver extends RequestParamMethodArgumentResolver {

        public ExtraOptionsResolver(boolean useDefaultResolution) {
            super(useDefaultResolution);
        }

        @Override
        public boolean supportsParameter(MethodParameter parameter) {
            return parameter.getParameterType() == SummaryOptions.class;
        }

        @Override
        protected Object resolveName(String name, MethodParameter parameter, NativeWebRequest request) throws Exception {
            SummaryOptions summaryOptions = new SummaryOptions();
            if (Objects.nonNull(request.getParameter("s"))) {
                String summaryQueryParam = request.getParameter("s");
                //String[] summaryItens = StringUtils.split(summaryQueryParam, ";");
                String[] summaryItens = summaryQueryParam.split(";");
                for (String summaryItem : summaryItens) {
                    //String[] summaryData = StringUtils.split(summaryItem, ",");
                    String[] summaryData = summaryItem.split(";");
                    if (summaryData.length == 1) {
                        SummaryRequest summaryRequest = new SummaryRequest();
                        summaryRequest.setDataField(summaryData[0]);
                        summaryRequest.setOperation(SummaryOperation.SUM);
                        summaryOptions.getSummaryRequests().add(summaryRequest);
                    } else if (summaryData.length == 2) {
                        SummaryRequest summaryRequest = new SummaryRequest();
                        summaryRequest.setDataField(summaryData[0]);
                        summaryRequest.setOperation(SummaryOperation.valueOf(summaryData[1].toUpperCase()));
                        summaryOptions.getSummaryRequests().add(summaryRequest);
                    }
                }
            }
            return summaryOptions;
        }
    }
}

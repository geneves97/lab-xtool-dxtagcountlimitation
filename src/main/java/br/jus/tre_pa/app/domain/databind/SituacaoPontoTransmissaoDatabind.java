package br.jus.tre_pa.app.domain.databind;

import br.jus.tre_pa.app.domain.SituacaoPontoTransmissao;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.*;

import java.io.IOException;

public class SituacaoPontoTransmissaoDatabind {
    public static class IdDeserializer extends JsonDeserializer<SituacaoPontoTransmissao> {
        @Override
        public SituacaoPontoTransmissao deserialize(JsonParser jp, DeserializationContext deserializationContext) throws IOException {
            JsonNode node = jp.getCodec().readTree(jp);
            if (node.isNumber()) {
                SituacaoPontoTransmissao c = new SituacaoPontoTransmissao();
                c.setId(node.asLong());
                return c;
            } else if (node.isObject()) {
                JsonNode id = node.get("id");
                SituacaoPontoTransmissao c = new SituacaoPontoTransmissao();
                c.setId(id.asLong());
                return c;
            }
            return null;
        }
    }

    public static class IdSerializer extends JsonSerializer<SituacaoPontoTransmissao> {
        @Override
        public void serialize(SituacaoPontoTransmissao entity, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws
                IOException {
            jsonGenerator.writeNumber(entity.getId());
        }
    }
}



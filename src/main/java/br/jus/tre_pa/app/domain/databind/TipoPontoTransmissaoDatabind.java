package br.jus.tre_pa.app.domain.databind;

import br.jus.tre_pa.app.domain.TipoPontoTransmissao;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.*;

import java.io.IOException;

public class TipoPontoTransmissaoDatabind {
    public static class IdDeserializer extends JsonDeserializer<TipoPontoTransmissao> {
        @Override
        public TipoPontoTransmissao deserialize(JsonParser jp, DeserializationContext deserializationContext) throws IOException {
            JsonNode node = jp.getCodec().readTree(jp);
            if (node.isNumber()) {
                TipoPontoTransmissao c = new TipoPontoTransmissao();
                c.setId(node.asLong());
                return c;
            } else if (node.isObject()) {
                JsonNode id = node.get("id");
                TipoPontoTransmissao c = new TipoPontoTransmissao();
                c.setId(id.asLong());
                return c;
            }
            return null;
        }
    }

    public static class IdSerializer extends JsonSerializer<TipoPontoTransmissao> {
        @Override
        public void serialize(TipoPontoTransmissao entity, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws
                IOException {
            jsonGenerator.writeNumber(entity.getId());
        }
    }
}



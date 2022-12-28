package br.jus.tre_pa.app.domain.databind;

import br.jus.tre_pa.app.domain.Municipio;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.*;

import java.io.IOException;

public class MunicipioDatabind {
    public static class IdDeserializer extends JsonDeserializer<Municipio> {
        @Override
        public Municipio deserialize(JsonParser jp, DeserializationContext deserializationContext) throws IOException {
            JsonNode node = jp.getCodec().readTree(jp);
            if (node.isNumber()) {
                Municipio c = new Municipio();
                c.setId(node.asLong());
                return c;
            } else if (node.isObject()) {
                JsonNode id = node.get("id");
                Municipio c = new Municipio();
                c.setId(id.asLong());
                return c;
            }
            return null;
        }
    }

    public static class IdSerializer extends JsonSerializer<Municipio> {
        @Override
        public void serialize(Municipio entity, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws
                IOException {
            jsonGenerator.writeNumber(entity.getId());
        }
    }
}



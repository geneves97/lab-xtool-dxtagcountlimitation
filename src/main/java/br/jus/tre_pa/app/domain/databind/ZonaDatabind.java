package br.jus.tre_pa.app.domain.databind;

import br.jus.tre_pa.app.domain.Zona;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.*;

import java.io.IOException;

public class ZonaDatabind {
    public static class IdDeserializer extends JsonDeserializer<Zona> {
        @Override
        public Zona deserialize(JsonParser jp, DeserializationContext deserializationContext) throws IOException {
            JsonNode node = jp.getCodec().readTree(jp);
            if (node.isNumber()) {
                Zona c = new Zona();
                c.setId(node.asLong());
                return c;
            } else if (node.isObject()) {
                JsonNode id = node.get("id");
                Zona c = new Zona();
                c.setId(id.asLong());
                return c;
            }
            return null;
        }
    }

    public static class IdSerializer extends JsonSerializer<Zona> {
        @Override
        public void serialize(Zona entity, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws
                IOException {
            jsonGenerator.writeNumber(entity.getId());
        }
    }
}



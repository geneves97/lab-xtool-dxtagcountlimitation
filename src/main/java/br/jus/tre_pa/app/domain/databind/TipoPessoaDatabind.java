package br.jus.tre_pa.app.domain.databind;

import br.jus.tre_pa.app.domain.TipoPessoa;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.*;

import java.io.IOException;

public class TipoPessoaDatabind {
    public static class IdDeserializer extends JsonDeserializer<TipoPessoa> {
        @Override
        public TipoPessoa deserialize(JsonParser jp, DeserializationContext deserializationContext) throws IOException {
            JsonNode node = jp.getCodec().readTree(jp);
            if (node.isNumber()) {
                TipoPessoa c = new TipoPessoa();
                c.setId(node.asLong());
                return c;
            } else if (node.isObject()) {
                JsonNode id = node.get("id");
                TipoPessoa c = new TipoPessoa();
                c.setId(id.asLong());
                return c;
            }
            return null;
        }
    }

    public static class IdSerializer extends JsonSerializer<TipoPessoa> {
        @Override
        public void serialize(TipoPessoa entity, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws
                IOException {
            jsonGenerator.writeNumber(entity.getId());
        }
    }
}



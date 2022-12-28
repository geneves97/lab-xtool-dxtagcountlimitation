package br.jus.tre_pa.app.domain.databind;

import br.jus.tre_pa.app.domain.LocalVotacao;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.*;

import java.io.IOException;

public class LocalVotacaoDatabind {
    public static class IdDeserializer extends JsonDeserializer<LocalVotacao> {
        @Override
        public LocalVotacao deserialize(JsonParser jp, DeserializationContext deserializationContext) throws IOException {
            JsonNode node = jp.getCodec().readTree(jp);
            if (node.isNumber()) {
                LocalVotacao c = new LocalVotacao();
                c.setId(node.asLong());
                return c;
            } else if (node.isObject()) {
                JsonNode id = node.get("id");
                LocalVotacao c = new LocalVotacao();
                c.setId(id.asLong());
                return c;
            }
            return null;
        }
    }

    public static class IdSerializer extends JsonSerializer<LocalVotacao> {
        @Override
        public void serialize(LocalVotacao entity, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws
                IOException {
            jsonGenerator.writeNumber(entity.getId());
        }
    }
}



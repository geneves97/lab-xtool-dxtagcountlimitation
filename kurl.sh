#!/usr/bin/env bash

if ! command -v jq > /dev/null; then
echo "Command jq não encontrado."
echo ""
echo "======================================================================================================"
echo " Por favor, instale o comando jq com seu gerenciador de pacotes e repita a operação."
echo ""
echo "======================================================================================================"
echo ""
exit 1
fi

KEYCLOAK_URL="http://localhost:8085/auth"
KEYCLOAK_CLIENT_ID="lab-xtool-dxtagcoutlimitation-frontend"
#KEYCLOAK_CLIENT_SECRET="f541e548-ff50-4c97-928d-f296fcd7be9c"
KEYCLOAK_USERNAME="root"
KEYCLOAK_PASSWORD="root"
KEYCLOAK_GRANT_TYPE="password"
KEYCLOAK_REALM="TRE-PA"

TOKEN=$(curl -s -X POST "$KEYCLOAK_URL/realms/$KEYCLOAK_REALM/protocol/openid-connect/token" \
             -H 'Content-Type: application/x-www-form-urlencoded' \
             -d "client_id=$KEYCLOAK_CLIENT_ID" \
             -d "username=$KEYCLOAK_USERNAME" \
             -d "password=$KEYCLOAK_PASSWORD" \
             -d "grant_type=$KEYCLOAK_GRANT_TYPE" \ | jq -r '.access_token')

if [ "x$TOKEN" = "x" ] || [ "$TOKEN" = "null" ]; then
    echo "Erro ao retornar TOKEN de $KEYCLOAK_URL"
    echo "Verifique se o client $KEYCLOAK_CLIENT_ID está com a opção 'Direct Access Grants Enabled' habilitada."
    exit 1
fi

curl "$@" \
     -H "Authorization: Bearer $TOKEN" | jq

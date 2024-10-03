# Desafio docker-compose FullCycle

Versão das imagens
```
Nginx -> latest
Node -> latest
MySQL -> 5.7
```
Dependencias Node:
```
Express
Mysql2
```

**Observações:** `Tempo do dockerize definido para 1 minuto para caso seja a primeira inicialização do MYSQL, seja feita a criação sem problemas. Até que o container do mysql não esteja online, ele irá exibir 502 no Nginx`

## Execução

```sh
docker-compose up -d
# Ou
docker compose up -d
```

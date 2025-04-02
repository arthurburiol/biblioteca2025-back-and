//importa a biblioteca do express
import express from "express";

//cria a api com express
const app = express();
app.use(express.json());

//exemplo de requisição
app.get("/versao", (requisicao, resposta) => {
    resposta.send("Versão 2025.1");
} );

//exemplo de requisição com queryParams
app.get("/quadrado", (requisicao, resposta) => {
    var n = parseInt(requisicao.query.numero);
    var q = n * n;
    resposta.send(q.toString());
} );

//exemplo de requisição com routeParams
app.get("/quadrado/:numero", (requisicao, resposta) => {
    var n = parseInt(requisicao.query.numero);
    var q = n * n;
    resposta.send(q.toString());
} );

//exemplo de requisição com headersParams
app.get("/cubo", (requisicao, resposta) => {
    var n = parseInt(requisicao.headers.numero);
    var q = n * n * n;
    resposta.send(q.toString());
} );

//exemplo de requisição com bodyParams
app.post("/verificaridade", (requisicao, resposta) => {
    var n = requisicao.body.nome;
    var i = parseInt(requisicao.body.idade);
    if (i >= 18) {
        resposta.send(`${n} é maior de idade`);
    }
    else {
        resposta.send(`${n} é menor de idade`);
    }
});

//exemplo de requisição com bodyParams
app.post("/verificaridade2", (requisicao, resposta) => {
    var n = requisicao.body.nome;
    var i = parseInt(requisicao.body.idade);
    var m;
    if (i >= 18) {
        m = (`Maior de idade`);
    }
    else {
        m = (`Menor de idade`);
    }

    resposta.json({
        "nome": n,
        "idade": i,
        "mensagem": m
    })  
});

//disponibiliza a api na porta 3000
app.listen(3000);
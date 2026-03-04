# Tópicos Importantes

- Qual a linguagem de programação utilizada para o nosso Backend?
  JavaScript
- O que é o Node.js?
  <<<<<<< HEAD
  Ambiente/Runtime que roda o JavaScript no servidor. Há alternativas como bun e deno.
- O que é o NPM?
  Gerenciador de pacotes node, Node Package Manager. Ele permite adicionar remover pacotes e tambem fazer outras configurações no projeto node.
  Há alternativas como pnpm, Yarn, Bun e Turb
- O que é o Express.js?
  Framework web para Node.js (Backend JavaScript) e construir APIS'S.
- O que é uma API?
  Application Programming Interface. Interface de Programação de Aplicações.
  Interface é todo meio de comunicação entre humano e computador.
  Também pode ser um meio de comunicação entre dois computadores ou entidades. Há interfaces de saída e entrada, sites são de entrada e saída, interface é interativa onde quando há uma ação há uma reação. Por exemplo requisição e resposta.
- O que é um Framework?
  Conjunto de recursos e ferramentas para resolver um problema baseada em uma estrutura, orienta também como resolver. Há diferenças na flexibilidade de como resolver. Express é mais flexível.
  =======
  Ambiente/Runtime que roda o JavaScript no servidor local. Há alternativas como bun e deno.
- O que é o NPM?
  Gerenciador de pacotes node, Node Package Manager. Há alternativas como pnpm, Yarn, Bun e Turb
- O que é o Express.js?
  Framework web para Node.js (Backend JavaScript)
  O que é um Framework?
  - Conjunto de recursos e ferramentas para resolver um problema baseada em uma estrutura, orienta também como resolver. Há diferenças na flexibilidade de como resolver. Express é mais flexível.
    > > > > > > > 3ea60d828a9c3f149bc8c15cead61726a661ec31
- Como mudar o formato de importação de importação de "require" (padrão commonjs)?
  Na hora de criar o package.json coloca o type module. E utiliza a sintaxe "import".
  //const express = require("express") - commonjs
  import express from "express" - module
- O que é HTTP?
  Hypertext Transfer Protocol. Protocolo de comunicação cliente-servidor web.
  HTTPS - Secure - Utiliza protocolos SSL/TLS para criptografar a comunicação entre o navegador e o servidor.
- Quais os métodos de requisição HTTP e para que serve cada um deles?
  Tipos de requisição?
  GET: pegar, obter, buscar, resgatar, consultar dados- select
  POST: postar, cadastro, inserir dados - insert
  PUT: editar, alterar, atualizar dados - update - (Atualização completa)
  PATCH: Similar ao PUT (Atualização parcial)  
  DELETE: deletar, excluir, apagar
- Para que serve o --watch ao rodar o servidor?
  Observar os arquivos que compõe o projeto e quando houver um arquivo salvo com alguma alteração e atualiza o servidor; Sobe novamente.
- Para que serve o Router do Express?
  Para separar um conjunto de rotas/endpoints similares em um arquivo. Facilidade de manutenção e escalabilidade.

---

Notas:
Cada rotas/endpoints pode ter até 5 métodos(um de cada)

Model -> Regras de negócio/Validação de dados - Acesso aos dados do BD;
Controller -> Controle do fluxo de entrada, processamento e saída dos dados.

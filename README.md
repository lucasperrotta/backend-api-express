# Tópicos Importantes

- Qual a linguagem de programação utilizada para o nosso Backend?
  JavaScript
- O que é o Node.js?
  Ambiente/Runtime que roda o JavaScript no servidor local. Há alternativas como bun e deno.
- O que é o NPM?
  Gerenciador de pacotes node, Node Package Manager. Há alternativas como pnpm, Yarn, Bun e Turb
- O que é o Express.js?
  Framework web para Node.js (Backend JavaScript)
  O que é um Framework?
  - Conjunto de recursos e ferramentas para resolver um problema baseada em uma estrutura, orienta também como resolver. Há diferenças na flexibilidade de como resolver. Express é mais flexível.
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
  POST: postar, cadastro,enviar/inserir dados - insert
  PUT: editar, alterar, atualizar dados - update - (Atualização completa)
  PATCH: Similar ao PUT (Atualização parcial)  
  DELETE: deletar, excluir, apagar

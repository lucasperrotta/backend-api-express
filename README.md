# Tópicos Importantes

- Qual a linguagem de programação utilizada para o nosso Backend?
  JavaScript

- O que é o Node.js?
  Ambiente/Runtime que roda o JavaScript no servidor. Há alternativas como bun e deno.

- O que é o NPM?
  Gerenciador de pacotes node, Node Package Manager. Ele permite adicionar remover pacotes e tambem fazer outras configurações no projeto node.
  Há alternativas como pnpm, Yarn, Bun e Turb

  npm init - inicia projeto cria package.json
  npm i express - instalala pacote express adiciona express no package e dependendencias do express no package-lock

- O que é o Express.js?
  Framework web para Node.js, cria e sobe servidor web (Backend JavaScript) e construir APIS'S.

- O que é um Framework?
  Conjunto de recursos e ferramentas para resolver um problema baseada em uma estrutura, diferente de bibliotecas também orienta também como resolver. Há diferenças na flexibilidade de como resolver. Express é mais flexível.

- O que é uma API?
  Application Programming Interface. Interface de Programação de Aplicações.
  Interface é todo meio de comunicação entre humano e computador.
  Também pode ser um meio de comunicação entre dois computadores ou entidades. Há interfaces de saída e entrada, sites são de entrada e saída, interface é interativa onde quando há uma ação há uma reação. Por exemplo requisição e resposta.
  API Web: Conjunto de rotas e endpoints com métodos e parâmetros de URL

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

- O que é o padrão de projeto MVC?
  Padrão de projeto que estrutura o projeto em 3 camadas. Para organização do código e facilidade de manutenção.
  Model -> Regras de negócio/Validação de dados - Acesso a Base de dados;
  Controller -> Controle do fluxo de entrada, processamento e saída dos dados.
  View -> Apresentação

- O que é ORM?
  ORM (do inglês Object-Relational Mapping ou Mapeamento Objeto-Relacional) é uma técnica de desenvolvimento que permite integrar bancos de dados relacionais com linguagens de programação.
  Faz a ponte entre a aplicação e o banco de dados, cria o modelao que faz uma referência as tabelas do banco de dados. Cria uma série de funções mapeadas com as tabelas.
  Alternativas: sequeliac, drizzle.

- Quais as vantagens de utilizar um ORM?

  Conseguir trocar de banco de dados com facilidade.
  Não precisar usar linguagem específica de banco de dados.

- Como utilizar parâmetros de Url?
  - Parâmetros de rota (route params): partes variáveis da rota definidas com `:` no path. Exemplo: `/users/:id`.
    - No controlador acessa-se com `req.params`, por exemplo `const { id } = req.params;`.
    - Usado para identificar recursos específicos (usuário, publicação, etc.).
  - Parâmetros de query (query string): enviados após `?` na URL (ex: `?page=2&sort=desc`) e acessados via `req.query`.
  - Corpo da requisição (body): para dados em POST/PUT/PATCH, acessa-se `req.body` (necessário usar `express.json()` ou outro parser).

  Exemplo em Express:

  ```js
  // rota: GET /users/:id
  app.get("/users/:id", (req, res) => {
    const { id } = req.params
    // lógica para buscar usuário por id
    res.json({ id })
  })

  // rota: GET /search?term=abc
  app.get("/search", (req, res) => {
    const { term } = req.query
    res.json({ term })
  })
  ```

- O que é Middleware? (Exemplo Logger)
  Padrão de projeto utilizado pelo express que cria um fluxo de execução de funções onde cada uma tem uma responsabilidade no fluxo e é chamada de Middleware.
  - Middleware é uma função que recebe `req`, `res` e `next` e pode executar código, modificar objetos da requisição/resposta, encerrar o fluxo ou chamar `next()` para passar adiante.
  - Usos comuns: logging, autenticação, validação, parsing de body, CORS, tratamento de erros.

  Exemplo de Logger middleware:

  ```js
  function logger(req, res, next) {
    console.log(
      `${new Date().toISOString()} - ${req.method} ${req.originalUrl}`,
    )
    next()
  }

  app.use(logger)
  ```

--------- Próximos Tópicos

- Validação de Dados com Zod
  - Para que serve a biblioteca do Zod?
    Ajuda a fazer a validação dos dados antes de serem persistidos no banco de dados e definir as regras de negócio do modelo.
  - Para que serve a função Partial?
    É uma forma de flexibilizar pontualmente uma validação obrigatória.
  - Qual a diferença do parse para o safeParse?
    O parse lança uma exceção. O safeParse devolve um objeto.
- Tratamento de Erros
  - Qual o papel do ErrorHandler?
    - Quais erros devem ser tratados pelo ErrorHandler e quais devem ser tratados no try catch do controller?
    - Quais os parametros de entrada de um middlaweare de ErrorHandler?
  - Query Params (/user/?name=renan)
    - Como capturar um parametro query da url no Controller?
    - Para que são utilizados em geral os query params?
- Autenticação com JWT

---

Notas:
Cada rotas/endpoints pode ter até 5 métodos(um de cada)

### Comandos Prisma

Instalação

- npm i prisma -D
- npm i dotenv

Mysql e Mariadb

- npm install @prisma/client @prisma/adapter-mariadb mariadb
  Inicia o Prisma
- npx prisma init --datasource-provider mysql --output ../generated/prisma

Gera o schema do Prisma a partir do banco de dados

- npx prisma db pull

Gera o banco de dados a partir do schema do Prisma

- npx prisma db push

Exibe roda uma GUI do banco de dados

- npx prisma studio

Gera as funções para interagir com os modelos mapeados no schema:

- npx prisma generate

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
    Valida tipos, formatos, strings, números, datas, etc. Garante que os dados estejam corretos conforme as regras definidas.
  - Para que serve a função Partial?
    É uma forma de flexibilizar pontualmente uma validação obrigatória. Permite que todos os campos sejam opcionais (útil para operações PATCH).
    Exemplo: `userSchema.partial()` permite atualizar apenas alguns campos sem precisar passar todos obrigatoriamente.
  - Qual a diferença do parse para o safeParse?
    O parse lança uma exceção (throw error) se os dados não forem válidos, interrompendo a execução.
    O safeParse devolve um objeto com `{ success: boolean, data: T, error: ZodError }`, permitindo tratamento mais controlado do erro.
    Recomenda-se usar safeParse em controllers para ter melhor controle do fluxo.

- Tratamento de Erros
  - Qual o papel do ErrorHandler?
    Middleware que captura todos os erros não tratados e padroniza a resposta de erro enviada ao cliente (status HTTP apropriado e mensagem).
    Deve ser sempre o último middleware da aplicação.
  - Quais erros devem ser tratados pelo ErrorHandler e quais devem ser tratados no try catch do controller?
    No controller (try/catch): erros esperados da lógica de negócio (validação, recurso não encontrado, etc).
    No ErrorHandler: erros inesperados (erros de servidor, bugs, conexão com BD) que não foram tratados no controller.
    Exemplo: usar try/catch para `const user = await db.user.findUnique(...)` e throw error customizado se não encontrar.
  - Quais os parametros de entrada de um middleware de ErrorHandler?
    `(err, req, res, next)` - recebe 4 parâmetros (importante ter 4, senão Express não reconhece como ErrorHandler).
    `err`: objeto do erro; `req`: requisição; `res`: resposta; `next`: próximo middleware.
    
    Exemplo:
    ```js
    function errorHandler(err, req, res, next) {
      const statusCode = err.statusCode || 500
      const message = err.message || "Erro interno do servidor"
      res.status(statusCode).json({ error: message })
    }
    
    app.use(errorHandler)
    ```

- Query Params (/user/?name=renan)
  - Como capturar um parametro query da url no Controller?
    Usar `req.query` para acessar os parâmetros. Cada parâmetro após `?` separado por `&`.
    
    Exemplo:
    ```js
    // URL: /users?name=renan&age=25
    function getUsers(req, res) {
      const { name, age } = req.query
      // name = "renan", age = "25" (sempre strings)
      res.json({ name, age })
    }
    ```
    
  - Para que são utilizados em geral os query params?
    Filtros: `/products?category=eletrônicos&price=100`
    Paginação: `/users?page=2&limit=10`
    Busca: `/search?term=javascript`
    Ordenação: `/posts?sort=date&order=desc`
    São opcionais e afetam como os dados são retornados, não identificam um recurso específico (diferente de route params).

- Autenticação com JWT
  - Quais as diferenças dos métodos de Autenticação? E como funciona?
    
    1. **Basic Auth (Base 64)**: 
       - Cliente envia `Authorization: Basic base64(email:senha)` a cada requisição.
       - Servidor decodifica e valida as credenciais.
       - Simples, mas expõe credenciais em cada requisição (usar apenas com HTTPS).
    
    2. **Bearer Token (Opaque)**:
       - Cliente recebe um token opaco do servidor (string aleatória) e envia `Authorization: Bearer token`.
       - Servidor valida o token em um banco de dados ou cache.
       - Mais seguro que Basic Auth, mas exige consulta ao BD/cache a cada requisição.
    
    3. **Bearer Token JWT**:
       - Cliente recebe um JWT (token auto-verificável) contendo dados codificados.
       - JWT é enviado como `Authorization: Bearer token`.
       - Servidor valida apenas assinatura do token (sem consultar BD).
       - Mais eficiente, mas token exposto na URL/localStorage é risco XSS.
    
    4. **Bearer Token JWT + Refresh Token**:
       - JWT tem curta duração (ex: 15 min). Refresh Token tem longa duração (ex: 7 dias).
       - Quando JWT expira, cliente usa Refresh Token para obter um novo JWT.
       - Servidor valida Refresh Token no BD e emite novo JWT.
       - Melhor segurança: se JWT for roubado, é válido por pouco tempo.
  
  - Quais as características dos JWT?
    - **Estrutura**: `header.payload.signature` (3 partes separadas por ponto).
    - **Header**: tipo de token e algoritmo de assinatura (usualmente HS256 ou RS256).
    - **Payload**: dados do usuário (claims): `{ sub: "123", email: "user@example.com", iat: 1234567890, exp: 1234571490 }`.
    - **Signature**: hash HMAC do header+payload usando uma chave secreta. Garante que token não foi alterado.
    - **Auto-verificável**: servidor pode validar sem consultar BD, apenas verificando a assinatura.
    - **Stateless**: não requer sessão no servidor, reduz carga.
    - **Expiração**: campo `exp` define quando token deixa de ser válido.
    - **Transportável**: pode ser enviado em header, cookie ou query string (menos seguro).
    - **Desvantagem**: token não pode ser revogado imediatamente (válido até expiração, a menos que haja blacklist).

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

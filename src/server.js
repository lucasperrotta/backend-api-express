//const express = require("express")
import express from "express"
import userRouter from "./routers/userRouter.js"
import postRouter from "./routers/postRouter.js"

const app = express()
const port = 3000

app.use(express.json())
//req.body -> Acessar os dados enviados pelo cliente em uma requisição POST, PUT ou PATCH

app.get("/", (req, res) => {
  res.send("Olá Mundo Express API!")
})

app.use("/user", userRouter)
app.use("/post", postRouter)

app.listen(port, () => {
  console.log(`Servidor rodando em  http://localhost:${port}`)
})

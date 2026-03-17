import { createUser } from "../../models/userModel.js"

export async function createUsersController(req, res) {
  const user = req.body
  console.log("Dados recebidos para criar usuário:", user)
  const result = await createUser(user)

  res.json({
    message: "Usuário criado com sucesso!",
    user: result,
  })
}

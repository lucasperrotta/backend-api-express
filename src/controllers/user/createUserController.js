import { createUser } from "../../models/userModel.js"

export async function createUsersController(req, res) {
  const user = {
    avatar: "https://github.com/renancavichi.png",
    name: "Lucas Perrotta Barbosa",
    email: "perrotta.lucas@gmail.com",
    pass: "12345678",
  }

  const result = await createUser(user)

  res.json({
    message: "Usuário criado com sucesso!",
    user: result,
  })
}

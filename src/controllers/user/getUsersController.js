import { getUser } from "../../models/userModel.js"
export async function getUsersController(req, res) {
  const result = await getUser()
  res.json({
    message: "Usuários listados com sucesso!",
    users: result,
  })
}

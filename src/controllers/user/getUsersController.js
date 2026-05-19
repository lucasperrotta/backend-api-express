import { getUser } from "../../models/userModel.js"
export async function getUsersController(req, res) {
  const { name } = req.query

  const result = await getUser(name)
  res.json({
    message: "Usuários listados com sucesso!",
    users: result,
  })
}

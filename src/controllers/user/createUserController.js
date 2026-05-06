import { createUser, validateUser } from "../../models/userModel.js"
import { flattenError, treeifyError } from "zod"

export async function createUsersController(req, res) {
  const user = req.body

  const { success, error, data } = validateUser(user, { id: true })

  console.log(flattenError(error)) //funciona pra um nivel de erro, ou seja, quando o erro é apenas em um campo
  console.log(treeifyError(error)) //funciona para mais de um nivel, ex: endereço.rua, endereço.numero, etc

  if (!success) {
    return res.status(400).json({
      message: "Erro de validação",
      fieldErrors: error,
      //fieldErrors: error.flatten().fieldErrors,
    })
  }

  const result = await createUser(data)

  res.json({
    message: "Usuário criado com sucesso!",
    user: result,
  })
}

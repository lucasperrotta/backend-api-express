import { prisma } from "../helpers/dbConnection.js"

// user = {
//   name: "Lucas Perrotta Barbosa",
//   email: "perrotta.lucas@gmail.com",
//   pass: "12345678",
//   avatar: "https://github.com/lucasperrotta.png",
// }

export const createUser = async (user) => {
  return await prisma.user.create({
    data: user,
  })
}

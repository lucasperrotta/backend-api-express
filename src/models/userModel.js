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

export const getUser = async () => {
  return await prisma.user.findMany()
}

export const deleteUser = async (id) => {
  return await prisma.user.delete({
    where: {
      id,
    },
  })
}

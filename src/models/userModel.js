import { prisma } from "../helpers/dbConnection.js"
import * as z from "zod"
// user = {
//   name: "Lucas Perrotta Barbosa",
//   email: "perrotta.lucas@gmail.com",
//   pass: "12345678",
//   avatar: "https://github.com/lucasperrotta.png",
// }

const userSchema = z.object({
  id: z.int().positive(),
  avatar: z.string().url().max(500),
  name: z.string().min(3).max(255),
  email: z.string().email(),
  pass: z.string().min(6).max(255),
})

export const validateUser = (user, partial = false) => {
  if (partial) {
    return userSchema.partial(partial).safeParse(user)
  }
  return userSchema.safeParse(user)
}

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

export const updateUser = async (user, id) => {
  return await prisma.user.update({
    data: user,
    where: {
      id,
    },
  })
}

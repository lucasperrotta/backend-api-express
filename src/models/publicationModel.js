import * as z from "zod"
import { prisma } from "../helpers/dbConnection.js"
import { createValidator } from "../helpers/createValidator.js"
// publication = {
//   title: "Lucas Perrotta Barbosa",
//   description: "Esta é uma publicação de exemplo",
//   author: "Lucas Perrotta Barbosa"
// }
/*

*/

const publicationSchema = z.object({
  id: z
    .int("Id é obrigatório e deve ser um valor numérico")
    .positive("Id deve ser um valor numérico positivo"),
  author: z
    .string("Autor deve ser uma string")
    .min(3, "Autor deve ter no mínimo 3 caracteres")
    .max(255, "Autor deve ter no máximo 255 caracteres"),
  title: z
    .string("Título deve ser uma string")
    .min(10, "Título deve ter no mínimo 10 caracteres")
    .max(255, "Título deve ter no máximo 255 caracteres"),
  description: z
    .string("Descrição deve ser uma string")
    .min(10, "Descrição deve ter no mínimo 10 caracteres")
    .max(255, "Descrição deve ter no máximo 255 caracteres"),
})

export const validatePublication = createValidator(publicationSchema)

export const createPublication = async (publication) => {
  return await prisma.publication.create({
    data: publication,
  })
}

export const getPublication = async () => {
  return await prisma.publication.findMany()
}

export const deletePublication = async (id) => {
  return await prisma.publication.delete({
    where: {
      id,
    },
  })
}

export const updatePublication = async (publication, id) => {
  return await prisma.publication.update({
    data: publication,
    where: {
      id,
    },
  })
}

import { prisma } from "../helpers/dbConnection.js"

// publication = {
//   title: "Lucas Perrotta Barbosa",
//   description: "Esta é uma publicação de exemplo",
//   author: "Lucas Perrotta Barbosa"
// }
/*

*/
export const createPublication = async (publication) => {
  return await prisma.publication.create({
    data: publication,
  })
}

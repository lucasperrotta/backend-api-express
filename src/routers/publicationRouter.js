import express from "express"
import { getPubliController } from "../controllers/publication/getPubliController.js"
import { createPubliController } from "../controllers/publication/createPubliController.js"
import { updatePubliController } from "../controllers/publication/updatePubliController.js"
import { updateTitlePubliController } from "../controllers/publication/updateTitlePubliController.js"
import { deletePubliController } from "../controllers/publication/deletePubliController.js"

const router = express.Router()

router.get("/", getPubliController)
router.post("/", createPubliController)
router.put("/", updatePubliController)
router.patch("/", updateTitlePubliController)
router.delete("/:id", deletePubliController)

export default router

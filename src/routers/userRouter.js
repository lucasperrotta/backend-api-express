import express from "express"
import { getUsersController } from "../controllers/user/getUsersController.js"
import { createUsersController } from "../controllers/user/createUserController.js"
import { updateUserController } from "../controllers/user/updateUserController.js"
import { updateAvatarUserController } from "../controllers/user/updateAvatarUserController.js"
import { deleteUsersController } from "../controllers/user/deleteUserController.js"

const router = express.Router()

router.get("/", getUsersController)

router.post("/", createUsersController)

router.put("/", updateUserController)

router.patch("/", updateAvatarUserController)

router.delete("/:id", deleteUsersController)

export default router

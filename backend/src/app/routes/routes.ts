import { Router } from "express";
import getUser from "../controllers/GetUserController";
import postUser from "../controllers/PostUserController";
import deleteUser from "../controllers/DeleteUserController";
import updateUser from "../controllers/UpdateController"

const router = Router();

router.use('/users/get', getUser);
router.use('/users/post', postUser);
router.use('/users/delete', deleteUser);
router.use('/users/put', updateUser)

export default router;

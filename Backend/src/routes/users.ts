import express from 'express';
const router = express.Router();
import usersController from "../controllers/usersController"


router.route('/')
    .get(usersController.getAllUsers)
    .post(usersController.createNewUser)
    .put(usersController.updateUser)
    .delete(usersController.deleteUser);

router.route('/:id')
    .get(usersController.getUser);

export default router;
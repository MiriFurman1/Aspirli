import express from 'express';
const router = express.Router();
import usersController from "../controllers/usersController"
import verifyJWT from 'middleware/verifyJWT';

router.route('/')
    .get(usersController.getAllUsers)
    .post(usersController.createNewUser)
    .put(usersController.updateUser)
    .delete(usersController.deleteUser);

router.route('/:id')
    .get(usersController.getUser);

export default router;

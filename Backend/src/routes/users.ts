import express from 'express';
const router = express.Router();
import usersController from "../controllers/usersController"
import ROLES_LIST from '../config/roles_list';
import verifyRoles from '../middleware/verifyRoles';


router.route('/')
    .get(usersController.getAllUsers)
    .post(usersController.createNewUser)
    .put(usersController.updateUser)
    .delete(verifyRoles(ROLES_LIST.Admin),usersController.deleteUser);

router.route('/:id')
    .get(usersController.getUser);

export default router;

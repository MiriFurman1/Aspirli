import { Request, Response } from 'express';
import User from "../models/user";
import { log } from 'console';

const usersController = {
    getAllUsers: async (req: Request, res: Response) => {
        try {
            const users = await User.find();
            res.json(users);
            
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    createNewUser: async (req: Request, res: Response) => {
        try {
            const { name, email, password } = req.body;
            const newUser = new User({ name, email, password });
            await newUser.save();
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    updateUser: async (req: Request, res: Response) => {
        try {
            const userId = req.params.id;
            const { name, email, password } = req.body;

            const updatedUser = await User.findByIdAndUpdate(
                userId,
                { name, email, password },
                { new: true }
            );

            if (!updatedUser) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.json(updatedUser);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    deleteUser: async (req: Request, res: Response) => {
        try {
            const userId = req.params.id;

            const deletedUser = await User.findByIdAndDelete(userId);

            if (!deletedUser) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.json(deletedUser);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    getUser: async (req: Request, res: Response) => {
        try {
            const userId = req.params.id;

            const user = await User.findById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.json(user);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};

export default usersController;

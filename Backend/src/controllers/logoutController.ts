import { Request, Response } from 'express';
import User, { UserDocument } from '../models/User'; // Assuming your User model is in a 'models' directory
import fsPromises from 'fs/promises';
import path from 'path';

const handleLogout = async (req: Request, res: Response): Promise<void> => {
    // On the client, also delete the accessToken

    const cookies = req.cookies;
    if (!cookies?.jwt) {
        res.sendStatus(204); // No content
        return;
    }

    const refreshToken: string = cookies.jwt;

    try {
        // Is refreshToken in the database?
        const foundUser: UserDocument | null = await User.findOne({ refreshToken });

        if (!foundUser) {
            res.clearCookie('jwt', { httpOnly: true, sameSite: 'None' as 'none', secure: true });
            res.sendStatus(204);
            return;
        }

        // Update refreshToken in the database
        foundUser.refreshToken = '';
        await foundUser.save();

        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None' as 'none', secure: true });
        res.sendStatus(204);
    } catch (error) {
        console.error(error);
        res.sendStatus(500); // Internal Server Error
    }
};

export { handleLogout };

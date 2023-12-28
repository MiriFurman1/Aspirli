import { Request, Response } from 'express';
import User  from '../models/user'; 


const handleLogout = async (req: Request, res: Response): Promise<void> => {
    //!TODO On the client, also delete the accessToken

    const cookies = req.cookies;
    if (!cookies?.jwt) {
        res.sendStatus(204); // No content
        return;
    }
    const refreshToken: string = cookies.jwt;

    try {
        const foundUser = await User.findOne({ refreshToken });
        if (!foundUser) {
            res.clearCookie('jwt', { httpOnly: true, sameSite: 'None' as 'none', secure: true });
            res.sendStatus(204);
            return;
        }

        // delete refreshToken in the database
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

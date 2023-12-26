import { Request, Response } from 'express';
import User from '../models/user'; 
import jwt, { VerifyErrors, VerifyOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

interface DecodedToken {
    username: string;
}

const handleRefreshToken = async (req: Request, res: Response): Promise<void> => {
    const cookies = req.cookies;
    if (!cookies?.jwt) {
        res.sendStatus(401);
        return;
    }

    const refreshToken: string = cookies.jwt;

    try {
        const foundUser = await User.findOne({ refreshToken }); 

        if (!foundUser) {
            res.sendStatus(403); // Forbidden
            return;
        }

        const verifyCallback = (err: VerifyErrors | null, decoded: DecodedToken | undefined) => {
            if (err || !decoded || foundUser.username !== decoded.username) {
                res.sendStatus(403);
                return;
            }

            const accessToken: string = jwt.sign(
                { username: decoded.username },
                process.env.ACCESS_TOKEN_SECRET as string,
                { expiresIn: '30s' }
            );

            res.json({ accessToken });
        };


        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET as string,
            verifyCallback as VerifyOptions
        );
    } catch (error) {
        console.error(error);
        res.sendStatus(500); // Internal Server Error
    }
};

export { handleRefreshToken };

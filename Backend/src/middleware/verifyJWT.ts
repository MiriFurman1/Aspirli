import { Request, Response, NextFunction } from 'express';
import jwt, { VerifyErrors, VerifyOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const verifyJWT = (req:any, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization||req.headers.Authorization;
    if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);
    console.log(authHeader); // Bearer token
    const token = authHeader.split(' ')[1] as string;

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET as string,
        (err: VerifyErrors | null, decoded: any) => {
            if (err) return res.sendStatus(403); // invalid token
            req.user = decoded?.userInfo.username;
            req.roles=decoded?.userInfo.roles;
            next();
        }
    );
    
};

export default verifyJWT;



import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/user";
import path from "path";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

const handleLogin = async (req: Request, res: Response): Promise<void> => {
  const { user: username, pwd: password } = req.body;

  if (!username || !password) {
    res.status(400).json({ message: "Username and password are required." });
    return;
  }

  try {
    const foundUser = await User.findOne({ username });

    if (!foundUser) {
      res.sendStatus(401); // Unauthorized
      return;
    }

    const match = await bcrypt.compare(password, foundUser.password);

    if (match) {
      const roles=Object.values(foundUser.roles)
      const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
      if (!accessTokenSecret) {
        throw new Error(
          "ACCESS_TOKEN_SECRET is not defined in the environment variables"
        );
      }

      const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;
      if (!refreshTokenSecret) {
        throw new Error(
          "ACCESS_TOKEN_SECRET is not defined in the environment variables"
        );
      }
      const accessToken = jwt.sign(
      {
        "userInfo":{
          "username": foundUser.username,
          "roles":roles
        } 
      },
        accessTokenSecret,
        { expiresIn: "30s" }
      );

      const refreshToken = jwt.sign(
        { username: foundUser.username },
        refreshTokenSecret,
        { expiresIn: "1d" }
      );

      const updatedUser = await User.findOneAndUpdate(
        { username: foundUser.username },
        { refreshToken },
        { new: true }
      );

      //   console.log(updatedUser)
      res.cookie("jwt", refreshToken, {
        httpOnly: true,
        sameSite: 'None' as 'none',
        secure:true,
        maxAge: 24 * 60 * 60 * 1000,
      });
      res.json({ accessToken });
    } else {
      res.sendStatus(401); // Unauthorized
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default handleLogin;

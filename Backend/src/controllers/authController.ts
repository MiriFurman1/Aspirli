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
        { username: foundUser.username },
        accessTokenSecret,
        { expiresIn: "30s" }
      );

      const refreshToken = jwt.sign(
        { username: foundUser.username },
        refreshTokenSecret,
        { expiresIn: "1d" }
      );

      const otherUsers = await User.find({ username: { $ne: foundUser.username } });
      const currentUser = { ...foundUser, refreshToken };

      await User.updateOne(
        { username: foundUser.username },
        { $set: { ...foundUser, refreshToken } }
      );

      res.json({ success: `User ${username} is logged in!` });
    } else {
      res.sendStatus(401); // Unauthorized
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default handleLogin;

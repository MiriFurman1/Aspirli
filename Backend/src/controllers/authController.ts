import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from "../models/user";




const handleLogin = async (req: Request, res: Response): Promise<void> => {
  const { user: username, pwd: password } = req.body;

  if (!username || !password) {
    res.status(400).json({ message: 'Username and password are required.' });
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
      res.json({ success: `User ${username} is logged in!` });
    } else {
      res.sendStatus(401); // Unauthorized
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default handleLogin ;

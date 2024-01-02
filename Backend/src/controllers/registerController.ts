import mongoose from "mongoose";
import path from "path";
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import User from "../models/user";


const handleNewUser = async (req: Request, res: Response): Promise<void> => {
  const { user, pwd,roles } = req.body;
  console.log(roles);
  
    if (!user || !pwd) {
      res.status(400).json({ 'message': 'Username and password are required.' });
      return; 
    }

    const duplicate = await User.findOne({ user});
    if (duplicate) {
      res.sendStatus(409); //conflict
      return;
    }
    try {
        const hashedPwd = await bcrypt.hash(pwd, 10); //salt=10
        const newUser = new User({ username: user, password: hashedPwd, roles});
        await newUser.save();

        const allUsers= await User.find();
        console.log('All users:', allUsers);
        console.log(newUser.roles.User)
        
        res.status(201).json({ 'success': `New user ${user} created!` });
    } catch (err:any) {
        res.status(500).json({ 'message': err.message });
    }
  };

  export default handleNewUser;
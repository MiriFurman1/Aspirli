import mongoose from "mongoose";
import path from "path";
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import User from "../models/user";

const handleNewUser = async (req: Request, res: Response): Promise<void> => {
  const { user, pwd,roles } = req.body;

  
    if (!user || !pwd) {
      res.status(400).json({ 'message': 'Username and password are required.' });
      return; 
    }

    const duplicate = await User.findOne({username: user});
    
    if (duplicate) {
      res.sendStatus(409); //conflict
      return;
    }
    

    try {
        const hashedPwd = await bcrypt.hash(pwd, 10); //salt=10
        const newUser = new User({ username: user, password: hashedPwd});
        await newUser.save();

        
        res.status(201).json({ 'success': `New user ${user} created!` });
    } catch (err:any) {
        res.status(500).json({ 'message': err.message });
    }
  };

  export default handleNewUser;
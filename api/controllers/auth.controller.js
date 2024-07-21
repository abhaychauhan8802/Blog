import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

import { errorHandle } from "../utils/error.js";

export const singup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return next(errorHandle(400, "All fileds are required"));
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(200).json("Singup successful");
  } catch (err) {
    next(err);
  }
};

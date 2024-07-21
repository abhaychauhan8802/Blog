import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const singup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return res.status(200).json({ message: "Singup successful" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

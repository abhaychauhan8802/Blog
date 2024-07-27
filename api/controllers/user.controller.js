import bcrypt from "bcryptjs";

import { errorHandle } from "../utils/error.js";
import User from "../models/user.model.js";

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return next(errorHandle(403, "You are not allowed to update this account"));
  }

  if (req.body.password) {
    if (req.body.password.length < 6) {
      return next(errorHandle(400, "Password must be at least 6 characters"));
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10);
  }

  if (req.body.username) {
    if (req.body.username.length < 3 || req.body.username.length > 10) {
      return next(errorHandle(400, "Username must between 3 to 10 characters"));
    }
    if (req.body.username.includes(" ")) {
      return next(errorHandle(400, "Username cannot contain spaces"));
    }
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          profilePicture: req.body.profilePicture,
          password: req.body.password,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;

    res.status(200).json(rest);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return next(errorHandle(403, "You are not allowed to delete this account"));
  }

  try {
    await User.findByIdAndDelete(req.params.userId);
    res.status(200).json("Userhas been deleted");
  } catch (err) {
    next(err);
  }
};

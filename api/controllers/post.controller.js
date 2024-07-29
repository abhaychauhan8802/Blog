import { errorHandle } from "../utils/error.js";
import Post from "../models/post.model.js";

export const create = async (req, res, next) => {
  try {
    if (!req.user.isAdmin) {
      return next(errorHandle(403, "You are not allowed to create a post"));
    }

    if (!req.body.title || !req.body.content) {
      return next(errorHandle(400, "Please filled all the required fields"));
    }

    const slug = req.body.title
      .split(" ")
      .join("-")
      .toLowerCase()
      .replace(/[^a-zA-Z0-9-]/g, "-");

    const newPost = new Post({
      ...req.body,
      slug,
      userId: req.user.id,
    });

    const savePost = await newPost.save();

    res.status(201).json(savePost);
  } catch (err) {
    next(err);
  }
};

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";

dotenv.config();

const app = express();

// connect mongodb
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected...");
  })
  .catch((err) => {
    console.log(err);
  });

// middlewares
app.use(express.json());

// api routes
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

app.listen(3000, () => {
  console.log("Server is running at post 3000");
});

import User from "../models/User.models.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/errors.js";
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All Fields are required"));
  }

  try {
    const hashedpassword = bcrypt.hashSync(password, 10);
    const newUser = new User({
      username: username,
      email: email,
      password: hashedpassword,
    });
    await newUser.save();

    res.json({ message: "Signup Successful" });
  } catch (error) {
    next(error);
  }
};

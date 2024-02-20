import User from "../models/User.models.js";
import bcrypt from "bcryptjs";
export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({
      message: "All fields required.",
    });
  }

  const hashedpassword = bcrypt.hashSync(password, 10);
  const newUser = new User({
    username: username,
    email: email,
    password: hashedpassword,
  });
  try {
    await newUser.save();

    res.json({ message: "Signup Successful" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error  " + error });
  }
};

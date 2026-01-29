import { prisma } from "../server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ message: "All fields required" });
    }

    const user = await prisma.user.findUnique({ where: { email: email } });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const check = await bcrypt.compare(password, user.password);

    if (!check) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const access_token = jwt.sign(
      JSON.stringify({
        id: user.id,
        email: user.email,
        name: user.name,
      }),
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" },
    );

    const refresh_token = jwt.sign(
      JSON.stringify({
        id: user.id,
      }),
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "7d" },
    );

    res
      .status(200)
      .json({ message: "Successful Login", access_token, refresh_token });
  } catch (error) {
    res.status(400).json({ message: "Internal Server error" });
  }
};

export const signup = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res.json({ message: "All fields required" });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashed,
      },
    });

    const access_token = jwt.sign(
      JSON.stringify({
        id: user.id,
        email: user.email,
        name: user.name,
      }),
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" },
    );

    const refresh_token = jwt.sign(
      JSON.stringify({
        id: user.id,
      }),
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "7d" },
    );

    res
      .status(200)
      .json({ message: "Successful Signup", access_token, refresh_token });
  } catch (error) {
    res.status(400).json({ message: "Internal Server error" });
  }
};

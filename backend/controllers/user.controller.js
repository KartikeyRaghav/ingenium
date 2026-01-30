import pool from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { signAccessToken, signRefreshToken } from "../utils/token.js";
import { refreshCookieOptions } from "../utils/cookies.js";

export const refreshToken = async (req, res) => {
  const refreshToken = req.cookies.refresh_token;

  if (!refreshToken) {
    return res.status(401).json({ message: "Logout" });
  }

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    async (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Logout" });
      }

      const { rows } = await pool.query(
        "SELECT * FROM refresh_tokens WHERE token = $1",
        [refreshToken],
      );

      if (rows.length === 0) {
        return res.status(401).json({ message: "Token reuse detected" });
      }

      const userId = decoded.id;

      await pool.query("DELETE FROM refresh_tokens WHERE token = $1", [
        refreshToken,
      ]);

      const userRes = await pool.query(
        "SELECT id, name, email FROM users WHERE id = $1",
        [userId],
      );

      if (userRes.rows.length === 0) {
        return res.status(401).json({ message: "User not found" });
      }

      const user = userRes.rows[0];

      const newAccessToken = signAccessToken(user);
      const newRefreshToken = signRefreshToken(user.id);

      await pool.query(
        `INSERT INTO refresh_tokens (user_id, token, expires_at)
         VALUES ($1, $2, NOW() + INTERVAL '7 days')`,
        [user.id, newRefreshToken],
      );

      res.cookie("refresh_token", newRefreshToken, refreshCookieOptions);

      return res.status(200).json({
        access_token: newAccessToken,
      });
    },
  );
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ message: "All fields required" });
    }

    const { rows } = await pool.query(
      "SELECT id, name, email, password_hash FROM users WHERE email = $1",
      [email],
    );

    if (rows.length === 0) {
      return res.status(400).json({ message: "User not found" });
    }

    const user = rows[0];

    const check = await bcrypt.compare(password, user.password_hash);
    if (!check) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const accessToken = signAccessToken(user);
    const refreshToken = signRefreshToken(user.id);

    await pool.query(
      `INSERT INTO refresh_tokens (user_id, token, expires_at)
     VALUES ($1, $2, NOW() + INTERVAL '7 days')`,
      [user.id, refreshToken],
    );

    res.cookie("refresh_token", refreshToken, refreshCookieOptions);

    res.status(200).json({
      access_token: accessToken,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server error" });
  }
};

export const signup = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res.json({ message: "All fields required" });
    }

    const existing = await pool.query("SELECT id FROM users WHERE email = $1", [
      email,
    ]);

    if (existing.rows.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const { rows } = await pool.query(
      `INSERT INTO users (name, email, password_hash)
       VALUES ($1, $2, $3)
       RETURNING id, name, email`,
      [name, email, hashed],
    );

    const user = rows[0];

    const access_token = signAccessToken(user);
    const refresh_token = signRefreshToken(user.id);

    res.status(200).json({
      message: "Successful Signup",
      access_token,
      refresh_token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server error" });
  }
};

export const profile = async (req, res) => {
  try {
    const { rows } = await pool.query(
      "SELECT id, name, email, created_at FROM users WHERE id = $1",
      [req.user.id],
    );

    if (rows.length === 0) {
      return res.status(400).json({ message: "User not found" });
    }

    res.status(200).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server error" });
  }
};

export const checkAuth = async (req, res) => {
  const { access_token, refresh_token } = req.body;

  jwt.verify(
    access_token,
    process.env.ACCESS_TOKEN_SECRET,
    async function (err) {
      if (!err) {
        return res.status(200).json({ message: "Valid Access Token" });
      } else {
        jwt.verify(
          refresh_token,
          process.env.REFRESH_TOKEN_SECRET,
          async function (error, decoded2) {
            if (!error) {
              const id = decoded2.id;
              const { rows } = await pool.query(
                "SELECT id, name, email, created_at FROM users WHERE id = $1",
                [id],
              );
              if (rows.length === 0) {
                return res.status(400).json({ message: "User not found" });
              }
              const user = rows[0];

              const new_access_token = jwt.sign(
                {
                  id: user.id,
                  email: user.email,
                  name: user.name,
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: "5h" },
              );

              const new_refresh_token = jwt.sign(
                { id: user.id },
                process.env.REFRESH_TOKEN_SECRET,
                { expiresIn: "7d" },
              );

              res.status(200).json({
                message:
                  "Access token and refresh token generated successfully",
                new_access_token,
                new_refresh_token,
              });
            } else {
              res.status(400).json({
                message: "Logout",
              });
            }
          },
        );
      }
    },
  );
};

export const logout = async (req, res) => {
  const refreshToken = req.cookies.refresh_token;

  if (refreshToken) {
    await pool.query("DELETE FROM refresh_tokens WHERE token = $1", [
      refreshToken,
    ]);
  }

  res.clearCookie("refresh_token", refreshCookieOptions);

  res.status(200).json({ message: "Logged out" });
};

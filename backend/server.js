import express from "express";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import pool from "./db.js"

const app = express();

app.use(cors({ origin: "*", credentials: true }));
app.use(express.json())          // ✅ REQUIRED
app.use(express.urlencoded({ extended: true }))


app.use("/api/user", userRouter);

app.listen(process.env.port || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});

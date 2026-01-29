import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
export const prisma = new PrismaClient();

app.use(cors({ origin: "*", credentials: true }));

app.listen(process.env.port || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});

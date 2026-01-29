import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ origin: "*", credentials: true }));

app.listen(process.env.port || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});

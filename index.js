import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectToMongoDB } from "./connection.js";
import AuthRouter from "./routes/AuthRoutes.js";
import BlogRouter from "./routes/BlogRouter.js";
import CommentRouter from "./routes/CommentRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

connectToMongoDB();

app.use("/auth", AuthRouter);
app.use("/blog", BlogRouter);
app.use("/comment", CommentRouter);

app.listen(PORT, () => {
  console.log(`app is listening at port ${PORT}`);
});

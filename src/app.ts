import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middleware/errorHandler";

//routes import
import authRouter from "./routes/authRoute";
import commonRoute from "./routes/commonRoute";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes declaration
app.use("/api/v1", commonRoute);
app.use("/api/v1/auth", authRouter);
app.use(errorHandler);

export { app };

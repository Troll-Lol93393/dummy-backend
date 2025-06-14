import dotenv from "dotenv";
import { app } from "./app";

// https://www.youtube.com/watch?v=QoLqMDSBZAs

const port = process.env.APP_PORT || 4000;
dotenv.config({
  path: "./.env",
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});

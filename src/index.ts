import dotenv from "dotenv";
import { app } from "./app";
import sequelize from "./config/databse";

// https://www.youtube.com/watch?v=QoLqMDSBZAs

const port = process.env.APP_PORT || 4000;
dotenv.config({
  path: "./.env",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected successfully.");

    app.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  }
})();
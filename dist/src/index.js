"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = require("./app");
const databse_1 = __importDefault(require("./config/databse"));
// https://www.youtube.com/watch?v=QoLqMDSBZAs
const port = process.env.APP_PORT || 4000;
dotenv_1.default.config({
    path: "./.env",
});
(async () => {
    try {
        await databse_1.default.authenticate();
        console.log("✅ Database connected successfully.");
        app_1.app.listen(port, () => {
            console.log(`🚀 Server is running on http://localhost:${port}`);
        });
    }
    catch (error) {
        console.error("❌ Unable to connect to the database:", error);
    }
})();

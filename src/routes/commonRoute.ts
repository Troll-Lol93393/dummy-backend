import { Router } from "express";
import { ping } from "../controllers/testController";

const router = Router();

router.get("/ping", ping);

export default router;
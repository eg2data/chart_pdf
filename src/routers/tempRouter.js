import express from "express";
import { overall } from "../controllers/tempController";

// 1. create router
const tempRouter = express.Router();

// 2. configure router
tempRouter.get("/", overall);

// 3. export router
export default tempRouter;



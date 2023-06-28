import { getPerson } from "controllers/controller";
import { Router } from "express";

const indexRouter = Router();

indexRouter.get("/person", getPerson)

export default indexRouter;
import personControllers from "../controllers/controller";
import { Router } from "express";

const indexRouter = Router();

indexRouter.get("/person", personControllers.getPerson)

export default indexRouter;
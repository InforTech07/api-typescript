import { Router } from "express";
import {getAllTask,newTask,getTask} from "../controllers/task.ctl";

const router = Router();

router.get("/",getAllTask)
router.post("/",newTask)
router.get("/:id",getTask)

export default router;
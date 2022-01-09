import { Router } from "express";
const router = new Router();
import TypeController from "../controllers/typeController.js";
import { checkRoleMiddleware } from "../middleware/checkRoleMiddleware.js";

router.post("/", checkRoleMiddleware("ADMIN"), TypeController.create);
router.get("/", TypeController.getAll);
router.delete("/:id", checkRoleMiddleware("ADMIN"), TypeController.destroy);

export const typeRouter = router;

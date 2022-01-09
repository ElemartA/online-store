import { Router } from "express";
import BrandController from "../controllers/brandController.js";
import { checkRoleMiddleware } from "../middleware/checkRoleMiddleware.js";
const router = new Router();

router.post("/", checkRoleMiddleware("ADMIN"), BrandController.create);
router.get("/", BrandController.getAll);
router.delete("/:id", checkRoleMiddleware("ADMIN"), BrandController.destroy);

export const brandRouter = router;

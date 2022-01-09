import { Router } from "express";
import ProductController from "../controllers/productController.js";
import { checkRoleMiddleware } from "../middleware/checkRoleMiddleware.js";
const router = new Router();

router.post("/", checkRoleMiddleware("ADMIN"), ProductController.create);
router.get("/", ProductController.getAll);
router.get("/:id", ProductController.getOne);
router.delete("/:id", checkRoleMiddleware("ADMIN"), ProductController.destroy);
router.put("/:id", ProductController.update);

export const productRouter = router;

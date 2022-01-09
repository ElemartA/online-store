import { Router } from "express";
import BasketController from "../controllers/basketController.js";
import { checkRoleMiddleware } from "../middleware/checkRoleMiddleware.js";
const router = new Router();

router.post("/", checkRoleMiddleware("USER"), BasketController.create);
router.get("/", BasketController.getAll);
router.get("/:userId", BasketController.getOne);
// router.get("/:userId", BasketController.getAllOfOne);

export const basketRouter = router;

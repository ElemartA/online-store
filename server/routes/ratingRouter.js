import { Router } from "express";
import RatingController from "../controllers/ratingController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
const router = new Router();

router.post("/", RatingController.create);
router.get("/", RatingController.getAll);
router.get("/:productId", RatingController.getAllOfOne);

export const ratingRouter = router;

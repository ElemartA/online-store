import { Router } from "express";
import basketProductController from "../controllers/basketProductController.js";
import { checkRoleMiddleware } from "../middleware/checkRoleMiddleware.js";
const router = new Router();

router.post("/", checkRoleMiddleware("USER"), basketProductController.create);
router.get("/", checkRoleMiddleware("USER"), basketProductController.getAll);
router.get(
  "/:basketId",
  // checkRoleMiddleware("USER"),
  basketProductController.getAllOfOne
);
// router.get(
//   "/:id",
//   // checkRoleMiddleware("USER"),
//   basketProductController.getOne
// );
router.delete(
  "/:id",
  // checkRoleMiddleware("USER"),
  basketProductController.destroy
);

export const basketProductRouter = router;

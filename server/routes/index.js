import { Router } from "express";
const router = new Router();
import { productRouter } from "./productRouter.js";
import { typeRouter } from "./typeRouter.js";
import { brandRouter } from "./brandRouter.js";
import { userRouter } from "./userRouter.js";
import { ratingRouter } from "./ratingRouter.js";
import { basketRouter } from "./basketRouter.js";
import { basketProductRouter } from "./basketProductRouter.js";

router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/brand", brandRouter);
router.use("/product", productRouter);
router.use("/rating", ratingRouter);
router.use("/basket", basketRouter);
router.use("/basket_product", basketProductRouter);

export default router;

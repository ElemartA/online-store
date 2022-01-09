import { models } from "../modules/modules.js";

const Basket = models.Basket;

class BasketController {
  async create(req, res) {
    const { userId } = req.body;
    const basket = await Basket.create({ userId });
    return res.json(basket);
  }

  async getAll(req, res) {
    const baskets = await Basket.findAll();
    return res.json(baskets);
  }

  async getOne(req, res) {
    const { userId } = req.params;
    const basket = await Basket.findOne({ where: { userId } });
    // if (!basket) {
    //   return next(ApiError.internal("Корзина такого пользователя не найдена"));
    // }
    return res.json(basket);
  }

  // async getAllOfOne(req, res) {
  //   const { userId } = req.body;
  //   const baskets = await Basket.findAndCountAll({
  //     where: { userId },
  //   });
  //   return res.json(baskets);
  // }
}

export default new BasketController();

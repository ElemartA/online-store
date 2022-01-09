// добавляем в базу данных объекты
import { models } from "../modules/modules.js";
import ApiError from "../error/ApiError.js";

// Создадим для каждого роутера свой контроллер. Т.к. прописывать функции в роутере плохая практика, выносим их отдельно.
const Rating = models.Rating;

class RatingController {
  async create(req, res) {
    const { rate, productId } = req.body;
    const rating = await Rating.create({
      rate,
      productId,
    });
    return res.json({ rating });
  }
  async getAll(req, res) {
    const ratings = await Rating.findAll();
    return res.json(ratings);
  }

  async getAllOfOne(req, res) {
    const { productId } = req.params;
    const ratings = await Rating.findAndCountAll({
      where: { productId },
    });
    return res.json(ratings);
  }
}

export default new RatingController();

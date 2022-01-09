// Создадим для каждого роутера свой контроллер. Т.к. прописывать функции к роутере плохая практика, выносим их отдельно.
import { models } from "../modules/modules.js";
import ApiError from "../error/ApiError.js";

const Brand = models.Brand;

class BrandController {
  async create(req, res) {
    const { name } = req.body;
    const brand = await Brand.create({ name });
    return res.json({ brand });
  }

  async getAll(req, res) {
    const brands = await Brand.findAll();
    return res.json(brands);
  }

  async destroy(req, res) {
    const { id } = req.params;
    const brand = await Brand.destroy({
      where: { id },
    });
    return res.json(brand);
  }
}

export default new BrandController();

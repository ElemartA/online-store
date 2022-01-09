// добавляем в базу данных объекты
import { models } from "../modules/modules.js";
import ApiError from "../error/ApiError.js";

// Создадим для каждого роутера свой контроллер. Т.к. прописывать функции в роутере плохая практика, выносим их отдельно.
const Type = models.Type;

class TypeController {
  async create(req, res) {
    const { name } = req.body;
    const type = await Type.create({ name });
    return res.json({ type });
  }
  async getAll(req, res) {
    const types = await Type.findAll();
    return res.json(types);
  }

  async destroy(req, res) {
    const { id } = req.params;
    const type = await Type.destroy({
      where: { id },
    });
    return res.json(type);
  }
}

export default new TypeController();

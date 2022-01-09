// Создадим для каждого роутера свой контроллер. Т.к. прописывать функции к роутере плохая практика, выносим их отдельно.
import { models } from "../modules/modules.js";
import ApiError from "../error/ApiError.js";
import { v4 as uuidv4 } from "uuid";
import path from "path";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const Product = models.Product;
const ProductInfo = models.ProductInfo;

class ProductController {
  async create(req, res, next) {
    try {
      let { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
      // генерируем уникальное имя c помощью uuid
      let fileName = uuidv4() + ".jpg";
      // resolve адаптирует указанный путь к ОС
      // __dirname - это путь до текущей папки с контроллерами
      // mv - для перемещения файла загруженного с клиента в папку static
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const product = await Product.create({
        name,
        price,
        brandId,
        typeId,
        info,
        img: fileName,
      });

      if (info) {
        // когда передаем данные ч/з формдату, они приходят строкой
        // поэтому на фронте будем парсить этот массив в json строку
        // а на бэке обратно перегонять в js объект
        info = JSON.parse(info);
        info.forEach((i) => {
          ProductInfo.create({
            title: i.title,
            description: i.description,
            productId: product.id,
          });
        });
      }

      return res.json(product);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    let { brandId, typeId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 9;
    // отступ
    let offset = page * limit - limit;
    let product;
    if (!brandId && !typeId) {
      product = await Product.findAndCountAll({ limit, offset });
    }
    if (!brandId && typeId) {
      product = await Product.findAndCountAll({
        where: { typeId },
        limit,
        offset,
      });
    }
    if (brandId && !typeId) {
      product = await Product.findAndCountAll({
        where: { brandId },
        limit,
        offset,
      });
    }
    if (brandId && typeId) {
      product = await Product.findAndCountAll({
        where: { brandId, typeId },
        limit,
        offset,
      });
    }
    return res.json(product);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const product = await Product.findOne({
      where: { id },
      include: [{ model: ProductInfo, as: "info" }],
    });
    return res.json(product);
  }

  async destroy(req, res) {
    const { id } = req.params;
    const product = await Product.destroy({
      where: { id },
    });
    return res.json(product);
  }

  async update(req, res) {
    const { id, rating } = req.body;
    const product = await Product.update(
      {
        rating: rating,
      },
      {
        where: { id: id },
      }
    );
    return res.json({ product });
  }
}

export default new ProductController();

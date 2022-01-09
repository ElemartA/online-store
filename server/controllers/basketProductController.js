import { models } from "../modules/modules.js";

const BrasketProduct = models.BasketProduct;

class BasketProductController {
  async create(req, res) {
    const { productId, basketId } = req.body;
    const basketProduct = await BrasketProduct.create({
      productId,
      basketId,
    });
    return res.json(basketProduct);
  }

  async getAll(req, res) {
    const basketProduts = await BrasketProduct.findAll();
    return res.json(basketProduts);
  }

  // получаем все товары одной корзины
  async getAllOfOne(req, res) {
    const { basketId } = req.params;
    const basketProducts = await BrasketProduct.findAndCountAll({
      where: { basketId },
    });
    return res.json(basketProducts);
  }

  // async getOne(req, res) {
  //   const { id } = req.params;
  //   const oneProduct = await BrasketProduct.findOne({
  //     where: { id },
  //   });
  //   return res.json(oneProduct);
  // }

  async destroy(req, res) {
    const { id } = req.params;
    const basketProduct = await BrasketProduct.destroy({
      where: { id },
    });
    return res.json(basketProduct);
  }
}

export default new BasketProductController();

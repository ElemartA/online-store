import { makeAutoObservable } from "mobx";

export default class ProductStore {
  constructor() {
    this._isAuth = false; // эта переменная изменяться не будет
    this._types = [];
    this._brands = [];
    this._products = [];
    this._selectedType = {};
    this._selectedBrand = {};
    this._page = 1;
    this._totalCount = 0;
    this._limit = 5;
    this._numberRating = 0;
    this._cartProducts = [];
    this._cartProductCount = 0;
    this._cartId = 0;
    this._namesInCart = [];
    this._priceInCart = [];
    this._mapProductCart = [];
    makeAutoObservable(this); // теперь mobx будет следить за изменениями этих переменных: this._isAuth и this._user и т.д.
  }

  // создадим экшены, которые изменяют состояние
  setType(types) {
    this._types = types;
  }

  setBrand(brands) {
    this._brands = brands;
  }

  setProducts(products) {
    this._products = products;
  }

  setSelectedType(type) {
    this.setPage(1);
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this.setPage(1);
    this._selectedBrand = brand;
  }

  setPage(page) {
    this._page = page;
  }

  setTotalCount(count) {
    this._totalCount = count;
  }

  setNumberRating(rating) {
    this._numberRating = rating;
  }

  setCartProducts(cartProducts) {
    this._cartProducts = cartProducts;
  }
  setCartProductCount(cartProductCount) {
    this._cartProductCount = cartProductCount;
  }

  setCartId(cartId) {
    this._cartId = cartId;
  }

  setNamesInCart(namesInCart) {
    this._namesInCart = namesInCart;
  }

  setPriceInCart(priceInCart) {
    this._priceInCart = priceInCart;
  }

  setMapProductCart(mapProductCart) {
    this._mapProductCart = mapProductCart;
  }
  // создадим геттеры, они нужны, чтобы получать переменные из состояния
  // вызываются только тогда, когда была изменена переменная внутри
  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get products() {
    return this._products;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }

  get page() {
    return this._page;
  }

  get totalCount() {
    return this._totalCount;
  }

  get limit() {
    return this._limit;
  }

  get numberRating() {
    return this._numberRating;
  }

  get cartProducts() {
    return this._cartProducts;
  }

  get cartProductCount() {
    return this._cartProductCount;
  }

  get cartId() {
    return this._cartId;
  }

  get namesInCart() {
    return this._namesInCart;
  }

  get priceInCart() {
    return this._priceInCart;
  }

  get mapProductCart() {
    return this._mapProductCart;
  }
}

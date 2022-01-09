import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this._isAuth = false; // эта переменная изменяться не будет
    this._user = {};
    makeAutoObservable(this); // теперь mobx будет следить за изменениями этих переменных: this._isAuth и this._user
  }

  // создадим экшены, которые изменяют состояние
  setIsAuth(bool) {
    this._isAuth = bool;
  }

  setUser(user) {
    this._isUser = user;
  }

  // создадим геттеры, они нужны, чтобы получать переменные из состояния
  // вызываются только тогда, когда была изменена переменная внутри
  get isAuth() {
    return this._isAuth;
  }

  get user() {
    return this._user;
  }
}

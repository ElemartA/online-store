class ApiError extends Error {
  constructor(status, message) {
    super();
    // присваиваем то, что получаем параметрами
    this.status = status;
    this.message = message;
  }

  // Статические функции можно вызывать без создания объекта
  // т.е. можем напрямую обращаться к классу и вызывать эти функции
  static badRequest(message) {
    return new ApiError(404, message);
  }
  static internal(message) {
    return new ApiError(500, message);
  }
  static forbiden(message) {
    return new ApiError(403, message);
  }
}

export default ApiError;

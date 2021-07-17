export default class Utils {
  static getQuery(q) {
    return document.querySelector(q);
  }

  static getAllQueries(q) {
    return document.querySelectorAll(q);
  }
}

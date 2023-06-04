export default class Options {
  /**
   * @param {*} value
   */
  static findKey(value) {
    return Object.keys(this).find((key) => this[key] === value);
  }
}

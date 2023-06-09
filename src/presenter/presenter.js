/**
 * @template Model
 * @template View
 */
export default class Presenter {
  /**
   * @param  {Model} model
   * @param  {View} view
   */
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
}

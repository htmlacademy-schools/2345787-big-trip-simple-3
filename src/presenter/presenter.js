/**
 * @template Model
 * @template View
 */
export default class Presenter {
  /**
   * @param  {Model} model
   * @param  {View} view
   */
<<<<<<< HEAD
  constructor(model, view) {
=======
  constructor(...args) {
    const [model, view] = args;
>>>>>>> 5d73b91888a8a704c5c1096b0435fdaf4ad6674a
    this.model = model;
    this.view = view;
  }
}

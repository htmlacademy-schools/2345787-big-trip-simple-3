import Mode from '../options/mode.js';
import Presenter from './presenter.js';

/**
 * @template {AppModel} Model
 * @template {HTMLButtonElement} View
 * @extends {Presenter<Model,View>}
 */
export default class CreateButtonPresenter extends Presenter {
  /**
   * @param {[model: Model, view: View]} args
   */
  constructor(...args) {
    super(...args);

    this.view.addEventListener('click', this.onViewClick.bind(this));
<<<<<<< HEAD
    this.model.addEventListener('mode', this.onModelModeChange.bind(this));
=======
    this.model.addEventListener('mode', this.onModelMode.bind(this));
>>>>>>> 5d73b91888a8a704c5c1096b0435fdaf4ad6674a
  }

  onViewClick() {
    this.model.setMode(Mode.CREATE);
  }

<<<<<<< HEAD
  onModelModeChange() {
=======
  onModelMode() {
>>>>>>> 5d73b91888a8a704c5c1096b0435fdaf4ad6674a
    this.view.disabled = (this.model.getMode() === Mode.CREATE);
  }
}

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
    this.model.addEventListener('mode', this.onModelModeChange.bind(this));
  }

  onViewClick() {
    this.model.setMode(Mode.CREATE);
  }

  onModelModeChange() {
    this.view.disabled = (this.model.getMode() === Mode.CREATE);
  }
}

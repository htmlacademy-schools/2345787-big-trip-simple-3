import Mode from '../options/mode.js';
import FormHandlerPresenter from './form-handler-presenter.js';
import PointView from '../view/point-view.js';

/**
 * @template {AppModel} Model
 * @template {EditorView} View
 * @extends {FormHandlerPresenter<Model,View>}
 */
export default class PointEditorPresenter extends FormHandlerPresenter {
  /**
   * @override
   */
  saveActivePoint() {
    const {activePoint} = this.model;
    return this.model.pointsModel.update(activePoint.id, activePoint);
  }

  deleteActivePoint() {
    return this.model.pointsModel.remove(this.model.activePoint.id);
  }

  /**
   * @override
   */
  onModelModeChange() {
    this.point = this.model.activePoint;
    this.view.close(false);
    if (this.model.getMode() === Mode.EDIT) {
      const pointView = PointView.findById(this.model.activePoint.id);
      this.updateView();
      this.view.target(pointView).open();
    }
  }

  /**
   * @override
   * @param {Event} event
   */
  async onViewReset(event) {
    event.preventDefault();
    this.view.setDeleting(true);
    try {
      await this.deleteActivePoint();
      this.view.close();
    } catch (exception) {
      this.view.shake();
    }
    this.view.setDeleting(false);
  }
}

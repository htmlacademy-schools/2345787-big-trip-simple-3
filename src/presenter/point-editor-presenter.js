import Mode from '../options/mode.js';
import FormHandlerPresenter from './form-handler-presenter.js';
import PointView from '../view/point-view.js';

/**
 * @template {AppModel} Model
<<<<<<< HEAD
 * @template {EditorView} View
=======
 * @template {PointEditor} View
>>>>>>> 5d73b91888a8a704c5c1096b0435fdaf4ad6674a
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

<<<<<<< HEAD
  deleteActivePoint() {
    return this.model.pointsModel.remove(this.model.activePoint.id);
  }

  /**
   * @override
   */
  onModelModeChange() {
=======
  /**
   * @override
   */
  onModelMode() {
>>>>>>> 5d73b91888a8a704c5c1096b0435fdaf4ad6674a
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
<<<<<<< HEAD
=======

  deleteActivePoint() {
    return this.model.pointsModel.remove(this.model.activePoint.id);
  }
>>>>>>> 5d73b91888a8a704c5c1096b0435fdaf4ad6674a
}

import SortType from '../options/sort-type.js';
import SortLabel from '../options/sort-label.js';
import SortControl from '../options/sort-control.js';
import Presenter from './presenter.js';
import EventSortComparator from '../options/event-sort-comparator.js';
import Mode from '../options/mode.js';

/**
 * @template {AppModel} Model
 * @template {SortView} View
 * @extends {Presenter<Model,View>}
 */
export default class SortPresenter extends Presenter {
  /**
   * @param {[model: Model, view: View]} args
   */
  constructor(...args) {
    super(...args);

    this.buildView();
    this.view.addEventListener('change', this.onViewChange.bind(this));
    this.model.pointsModel.addEventListener(
      ['add', 'remove', 'filter'],
      this.onPointsModelChange.bind(this)
    );
  }

  buildView() {
    /** @type {SortOptionState[]} */
    const options = Object.keys(SortType).map(
      (key) => [SortLabel[key], SortType[key]]
    );
    this.view
      .setOptions(options)
      .setOptionsDisabled(Object.values(SortControl));
    this.updateViewValue();
    this.updateViewDisplay();
  }

  updateViewValue() {
    const compare = this.model.pointsModel.getSort();
    const type = SortType[EventSortComparator.findKey(compare)];
    this.view.setValue(type);
  }

  updateViewDisplay() {
    const {length} = this.model.pointsModel.list();
    this.view.display(Boolean(length));
  }

  onViewChange() {
    const value = this.view.getValue();
    const compare = EventSortComparator[SortType.findKey(value)];
    this.model.setMode(Mode.VIEW);
    this.model.pointsModel.setSort(compare);
  }

  /**
   * @param {CustomEvent} event
   */
  onPointsModelChange(event) {
    if (event.type === 'filter') {
      this.model.pointsModel.setSort(EventSortComparator.DAY, false);

      this.updateViewValue();
    }
    this.updateViewDisplay();
  }
}

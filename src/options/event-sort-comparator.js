import Options from './options.js';

export default class EventSortComparator extends Options {
  /**
   * @type {Compare<PointAdapter>}
   */
  static DAY = (point, nextPoint) =>
    Date.parse(point.startDate) - Date.parse(nextPoint.startDate);

  /**
   * @type {Compare<PointAdapter>}
   */
  static PRICE = (point, nextPoint) => nextPoint.basePrice - point.basePrice;
}

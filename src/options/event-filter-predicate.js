import Options from './options.js';

export default class EventFilterPredicate extends Options {
  /**
   * @type {Predicate<PointAdapter>}
   */
  static EVERYTHING = () => true;

  /**
   * @type {Predicate<PointAdapter>}
   */
  static FUTURE = (point) => Date.parse(point.endDate) > Date.now();
}

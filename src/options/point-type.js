import Options from './options.js';

export default class PointType extends Options {
  static TAXI = 'taxi';
  static BUS = 'bus';
  static TRAIN = 'train';
  static SHIP = 'ship';
  static DRIVE = 'drive';
  static FLIGHT = 'flight';
  static CHECK_IN = 'check-in';
  static SIGHTSEEING = 'sightseeing';
  static RESTAURANT = 'restaurant';
}

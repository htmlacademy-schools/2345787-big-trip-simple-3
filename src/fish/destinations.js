import { createCounter } from '../utils.js';
import { generateDestination } from './destination';

const cities = [
  'Rome',
  'San Francisco',
  'Tokyo',
  'Moscow',
  'Sydney',
];

const getDestinationId = createCounter();

const generateDestinations = () => {
  const destinations = [];

  for (let i = 0; i < cities.length; i++) {
    const id = getDestinationId();
    const destination = generateDestination(id);

    destination.name = cities[i];
    destinations.push(destination);
  }

  return destinations;
};

/**
 * @type {Destination[]}
 */
const allDestinations = generateDestinations();
const getDestinations = () => allDestinations;

export { getDestinations };
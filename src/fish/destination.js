import { getRandomInteger, getRandomArrayElement } from '../utils.js';

const descriptions = [
  'Эта прекрасная деревушка, известная своим уникальным обликом, является истинным местом силы. Вековые храмы и уютные улочки переносят вас в сказочную атмосферу прошлого. Известное место, которое каждый путешественник должен посетить.',
  'Этот космополитичный мегаполис притягивает своим динамичным образом жизни и множеством возможностей. Небоскребы, бульвары и ночная жизнь делают его настоящим городом, который никогда не спит. Это место, где мечты сбываются и новые идеи рождаются.',
  'Этот исторический город является колыбелью культуры и знаний. Узкие улочки, королевские дворцы и прекрасные парки олицетворяют его элегантность и изящество. Здесь каждый уголок имеет свою историю и загадку.',
  'Этот вибрирующий мегаполис олицетворяет современный взгляд на жизнь. Небоскребы, оживленные рынки и разнообразие культур делают его настоящим мировым городом. Здесь вы найдете смесь традиций и инноваций, которая привлекает миллионы посетителей каждый год.',
  'Этот магический город-порт является смесью Востока и Запада. Высокие небоскребы, оживленные рынки и впечатляющие ночные виды создают уникальную атмосферу. Здесь вы сможете погрузиться в сокровища Востока и открыть новые грани этого мира.',
];

const cities = [
  'Rome',
  'San Francisco',
  'Tokyo',
  'Moscow',
  'Sydney',
];

const generateDescription = (items) => getRandomArrayElement(items);
const generateShortDescription = (items) => {
  const description = getRandomArrayElement(items);

  return `${description.slice(0, 20)}...`;
};
const generateCity = (nameList) => getRandomArrayElement(nameList);

const generatePictures = () => {
  const pictures = [];
  const quantity = getRandomInteger(1, 5);

  for (let i = 0; i < quantity; i++) {
    const picture = {
      src: `http://picsum.photos/300/200?r=${Math.random()}`,
      description: generateShortDescription(descriptions),
    };

    pictures.push(picture);
  }

  return pictures;
};

const generateDestination = (id) => ({
  id,
  description: generateDescription(descriptions),
  name: generateCity(cities),
  pictures: generatePictures(),
});

export { generateDestination };

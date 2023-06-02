import { getRandomInteger, getRandomArrayElement } from '../utils.js';

const titles = [
  'Приключение в историческом лабиринте',
  'Путешествие в мир будущего',
  'Открытие тайн параллельных измерений',
  'Погружение в психологический калейдоскоп',
  'Основы астрономии: звезды и планеты',
  'Волшебная весенняя экскурсия',
  'Уникальный тренинг для личностного роста',
  'Путешествие к звездам: гелиоцентрическая перспектива',
  'Загадки гигантской планеты Юпитер',
  'Философия искусства: погружение в мир творчества',
];

const generateOfferTitle = (titleList) => getRandomArrayElement(titleList);

const generateOfferPrice = () => {
  const randomNumber = getRandomInteger(1, 15);

  return randomNumber * 5;
};

const generateOffer = (id) => ({
  id,
  title: generateOfferTitle(titles),
  price: generateOfferPrice(),
});

export { generateOffer };

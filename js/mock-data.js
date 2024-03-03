import {createRandomIdFromRangeGenerator, getRandomInteger} from './utils';

const generateId = createRandomIdFromRangeGenerator(1, 25);
const generateUrlId = createRandomIdFromRangeGenerator(1, 25);
const generateLikesNumbers = createRandomIdFromRangeGenerator(15, 200);
const generateCommentId = createRandomIdFromRangeGenerator(100, 1000);
const NAMES = [
  'Александр', 'Мария', 'Дмитрий', 'Анна', 'Михаил',
  'Екатерина', 'Иван', 'Елена', 'Сергей', 'Ольга',
  'Николай', 'Татьяна', 'Владимир', 'Светлана', 'Андрей'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const createRandomObjects = (number, cb) => {
  const resultArray = [];
  for (let i = 0; i < number; i++) {
    resultArray.push(cb());
  }
  return resultArray;
};

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${ getRandomInteger(1, 6) }.svg`,
  message: `${MESSAGES[getRandomInteger(0, 5)]}`,
  name: `${NAMES[getRandomInteger(0, 14)]}`,
});

const createObject = () => ({
  id: generateId(),
  url: `photos/${ generateUrlId() }.jpg`,
  description: 'Описание придумайте самостоятельно',
  likes: generateLikesNumbers(),
  comments: createRandomObjects(getRandomInteger(0, 30), createComment)
});

export { createRandomObjects, createObject };

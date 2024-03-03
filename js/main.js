import {createRandomIdFromRangeGenerator, getRandomInteger} from './functions';

const generateId = createRandomIdFromRangeGenerator(1, 25);
const generateUrlId = createRandomIdFromRangeGenerator(1, 25);
const generateLikesNumbers = createRandomIdFromRangeGenerator(15, 200);
const generateCommentId = createRandomIdFromRangeGenerator(100, 1000);
const NAMES = [
  'Александр', 'Мария', 'Дмитрий', 'Анна', 'Михаил',
  'Екатерина', 'Иван', 'Елена', 'Сергей', 'Ольга',
  'Николай', 'Татьяна', 'Владимир', 'Светлана', 'Андрей'
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
  message: 'В целом всё неплохо. Но не всё.',
  name: `${NAMES[getRandomInteger(1, 15)]}`,
});

const createObject = () => ({
  id: generateId(),
  url: `photos/${ generateUrlId() }.jpg`,
  description: 'Описание придумайте самостоятельно',
  likes: generateLikesNumbers(),
  comments: createRandomObjects(15, createComment)
});

// console.log(createRandomObjects(25, createObject));

// Special for ESLint
createRandomObjects(25, createObject);

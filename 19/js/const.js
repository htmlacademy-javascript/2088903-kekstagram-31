const COMMENTS_COUNT_STEP = 5;

const MAX_HASHTAGS_NUMBER = 5;

const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 100,
    step: 1,
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    measure: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    measure: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    measure: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    measure: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    measure: '',
  },
];

const DEFAULT_EFFECT = EFFECTS[0];

const HASHTAG_REGEXP = /^#[a-zа-яё0-9]{1,19}$/i;

const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте ещё раз',
};

const RANDOM_PICTURES_COUNT = 10;

const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const TIME_TO_CLOSING = 5000;

const DEFAULT_SCALE = 100;
const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;

export {
  COMMENTS_COUNT_STEP,
  MAX_HASHTAGS_NUMBER,
  EFFECTS,
  DEFAULT_EFFECT,
  HASHTAG_REGEXP,
  BASE_URL,
  Route,
  Method,
  ErrorText,
  RANDOM_PICTURES_COUNT,
  Filter,
  FILE_TYPES,
  TIME_TO_CLOSING,
  DEFAULT_SCALE,
  SCALE_STEP,
  MIN_SCALE,
  MAX_SCALE
};

const checkLength = (text, length) => text.length <= length;
const isPalindrome = (text) => {
  const stringToCheck = text.toString().toLowerCase().replaceAll(' ','');
  for (let i = 0; i < Math.floor(stringToCheck.length / 2); i++) {
    if (stringToCheck.at(i) !== stringToCheck.at(-1 - i)) {
      return false;
    }
  }
  return true;
};

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

// Special for ESLint
checkLength('тестовая строка', 10);
isPalindrome('А роза упала на лапу Азора');

export { createRandomIdFromRangeGenerator, getRandomInteger };

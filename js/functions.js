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

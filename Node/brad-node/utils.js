function generateRandomNumber(_range) {
  let randomNumber = Math.floor(Math.random() * _range) + 1;
  return randomNumber;
}

module.exports = generateRandomNumber(700);
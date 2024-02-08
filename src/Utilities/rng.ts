// Get a random integer between 0 and max, exclusive
const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max);
};

// Get a random integer between min and max
// min is inclusive
// max is exclusive
const getRandomIntWithinRange = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

// Get a random decimal between min and max
// min is inclusive
// max is exclusive
const getRandomDecimalWithinRange = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;    
};

// Randomly make a number either positive or negative
const applySign = (val: number): number => {
  const direction = getRandomInt(2);

  return direction === 0 ? val : -val;
};

export {
  getRandomInt,
  getRandomIntWithinRange,
  getRandomDecimalWithinRange,
  applySign,
};
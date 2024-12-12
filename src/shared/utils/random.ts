export const randomNumberWithMax = (max: number): number =>
  Math.floor(Math.random() * max);

export const randomNumberFromInterval = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const shuffleArray = <T>(array: T[]): T[] => {
  // Fisher Yates method
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = randomNumberWithMax(i + 1);
    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }

  return shuffled;
};

export const randomItems = <T>(array: T[], count: number): T[] => {
  if (count > array.length)
    throw new Error("Count cannot be greater than the array length");

  const shuffled = shuffleArray(array);

  return shuffled.slice(0, count);
};

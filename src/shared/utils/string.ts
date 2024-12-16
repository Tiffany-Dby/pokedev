export const capitalize = (string: string) => {
  const stringToLowerCase = string.toString().toLowerCase();
  return stringToLowerCase[0].toUpperCase() + stringToLowerCase.slice(1);
};

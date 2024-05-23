export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toLocaleUpperCase().concat(str.slice(1, str.length));
};

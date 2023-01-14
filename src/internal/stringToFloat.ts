export function stringToFloat(numAsString: string): number {
  const asFloat = parseFloat(numAsString);
  // if the input string is a floating point number that is equal to 1, return 100
  return numAsString.indexOf(".") !== -1 && asFloat === 1 ? 100 : asFloat;
}

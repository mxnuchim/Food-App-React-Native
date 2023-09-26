export function extendArrayWithLoop(arr, times) {
  if (times <= 0) {
    return arr;
  }

  const extendedArray = [...arr]; // Create a shallow copy of the original array

  for (let i = 1; i < times; i++) {
    extendedArray.push(...arr); // Append the original array to itself
  }

  return extendedArray;
}

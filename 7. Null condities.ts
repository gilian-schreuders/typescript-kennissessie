const value = 5;
// const value = undefined;

/**
 * Klasiek:
 */
function getGetal(value: number | undefined | null): number {
  if (!value) {
    return 0;
  }

  return value;
}
const result1 = getGetal(value);

/**
 * 1 liner, if else:
 */
const result2 = value ? value : 0;

/**
 * Nullish Coalescing:
 */
const result3 = value ?? 0;

/**
 * Results:
 */
console.log("Result 1:", result1);
console.log("Result 2:", result2);
console.log("Result 3:", result3);

// Bij 5:
// [LOG]: "Result 1:",  5
// [LOG]: "Result 2:",  5
// [LOG]: "Result 3:",  5

// Bij undefined:
// [LOG]: "Result 1:",  0
// [LOG]: "Result 2:",  0
// [LOG]: "Result 3:",  0

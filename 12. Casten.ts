const metAs = 12 as number;
const metOperator = <number>12;

// const errorCast = 12 as string; // Error!

/**
 * Gebruik bij code waar je geen directe controle op hebt of bij testen!
 */
const inputElement: HTMLElement = document.createElement("input");
// const value = inputElement.value // Error!
const inputValue = (inputElement as HTMLInputElement).value;

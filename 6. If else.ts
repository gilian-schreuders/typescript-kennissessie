/**
 * Traditioneel
 */
function is5(value: number): boolean {
  if (value === 5) {
    return true;
  }
  return false;
}

/**
 * 1 liner:
 */
function is4(value: number): boolean {
  // conditie ? return waarde wanneer true : return waarde wanneer false
  return value === 4 ? true : false;
}

// of als functie variable:
const is4Var = (value: number): boolean => {
  return value === 4 ? true : false;
};

// Nog kleiner:
const is4VarKlein = (value: number): boolean => (value === 4 ? true : false);

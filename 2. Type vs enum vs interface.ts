/**
 * Enum
 */
enum Status {
  Done,
  Loading,
  Final,
}

/**
 * Type
 */
type StatusT = "done" | "loading" | "final";
type GetalT = 15 | 16 | 17;
type MixT = 15 | StatusT | boolean | [number];

// Array:
type LijstStatus = StatusT[];
type LijstStatus2 = Array<StatusT>; // Kan ook

type Lijst = Array<string | boolean | number>;
const lijst: Lijst = ["hey", true, "hey", 15, true];

// Tuple:
type Tuple = [string, boolean, number];
const tuple: Tuple = ["hey", true, 15];
// const tupleFout: Tuple = ["hey", 15, true]; // Error

// Objecten:
type GebruikerT = {
  name: string;
};

const userT = {
  name: "Pim",
//   id: 1
};

function logGebruikerT(naam: GebruikerT) {
  console.log(naam);
}

/**
 * Interface
 */
interface GebruikerI {
  naam: string;
}

const userI = {
  naam: "Pim",
};

function logGebruikerI(naam: GebruikerI) {
  console.log(naam);
}

/**
 * Results:
 */
logGebruikerT(userT);
logGebruikerI(userI);

//  [LOG]: {
//     "name": "Pim",
//   }
//   [LOG]: {
//     "naam": "Pim"
//   }

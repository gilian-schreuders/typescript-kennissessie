const evenGetallenTot10 = [2, 4, 6, 8, 10];
const onEvenGetallenTot10 = [1, 3, 5, 7, 9];

const getallenTot10 = [...onEvenGetallenTot10, ...evenGetallenTot10]; // [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]

const andereGetallen = [...onEvenGetallenTot10, 2000, 3000]; // [1, 3, 5, 7, 9, 2000, 3000]

const andereGetallenOmgedraaid = [2000, 3000, ...onEvenGetallenTot10]; // [2000, 3000, 1, 3, 5, 7, 9]

/**
 * Results:
 */

console.log("Getallen tot 10", getallenTot10);
console.log("Andere getallen", andereGetallen);
console.log("Andere getallen omgedraaid", andereGetallenOmgedraaid);

// [LOG]: "Getallen tot 10",  [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]
// [LOG]: "Andere getallen",  [1, 3, 5, 7, 9, 2000, 3000]
// [LOG]: "Andere getallen omgedraaid",  [2000, 3000, 1, 3, 5, 7, 9]

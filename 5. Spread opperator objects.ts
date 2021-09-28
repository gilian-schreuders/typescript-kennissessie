/**
 * Voorbeeld 2
 */
type Persoon = {
  id: number;
  naam: string;
  leeftijd: number;
  tel: string;
  rol: string;
};

const persoonHenk: Persoon = {
  id: 1,
  naam: "Henk",
  leeftijd: 30,
  tel: "0612345678",
  rol: "Admin",
};

// Kan:
function clonePersoon(persoon: Persoon) {
  return {
    id: persoon.id + 1,
    naam: persoon.naam,
    leeftijd: persoon.leeftijd,
    tel: persoon.leeftijd,
    rol: persoon.leeftijd,
  };
}
// {
//     id: 2,
//     naam: 'Henk',
//     leeftijd: 30,
//     tel: '0612345678',
//     rol: 'Admin'
// }

// Beter:
function clonePersoonBeter(persoon: Persoon) {
  return {
    ...persoon,
    id: persoon.id + 1,
  };
}
// {
//     id: 2,
//     naam: 'Henk',
//     leeftijd: 30,
//     tel: '0612345678',
//     rol: 'Admin'
// }

// Let op:
// function clonePersoonFout(persoon: Persoon) {
//   return {
//     id: persoon.id + 1, // Error
//     ...persoon,
//   };
// }

/**
 * Kan:
 */
type AppStore = {
  cart: Cart;
};

type Cart = {
  id: number;
  klant: Klant;
};

type Klant = {
  naam: string;
};

const store: AppStore = {
  cart: {
    id: 1234,
    klant: {
      naam: "Henk",
    },
  },
};

/**
 * Kan ook:
 */
const store2 = {
  cart: {
    id: 1234,
    klant: {
      naam: "Henk",
      role: "admin" as "admin" | "user",
    },
  },
};

type AppStore2 = typeof store2;
type Cart2 = AppStore2["cart"];
type Klant2 = Cart2["klant"];

const nieuweKlant2: Klant2 = {
  naam: "Tom",
  role: "user",
};

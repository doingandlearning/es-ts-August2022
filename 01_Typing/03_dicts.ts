{
  // the dictionary type
  const obj1 = {
    hello: "Bonjour",
    [`${Math.random()}`]: "population",
    [Symbol("name")]: "Kevin",
  };

  interface Celaphopod {
    hasink: boolean;
    arms: number;
    hearts: number;
  }

  interface CelaphopodDictionary {
    [species: string]: Celaphopod; // Don't have to create an entry for every species
  }

  enum en {
    vulgar = "Vulgaris",
    lol = "Loligo",
  }

  const dict: CelaphopodDictionary = {};
  dict[en.vulgar] = { hasink: true, arms: 8, hearts: 3 };
  dict[en.lol] = { hasink: true, arms: 8, hearts: 3 };

  console.log(Object.keys(dict).map((item) => item.toUpperCase()));
}

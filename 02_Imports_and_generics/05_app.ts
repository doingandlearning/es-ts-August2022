import { Penguin, Dog } from "./03_modules";

import RandomClass, { pi, phi, sqrtTwo } from "./04_maths";

type Animal = Penguin | Dog;

console.log(pi);

// console.log(pi);
const gromit: Dog = { breeds: ["plasticene", "silicone"], yearOfBirth: 1991 };
const feather: Penguin = { breed: "RockHopper", yearOfBirth: 1998 };

const characters: Animal[] = [gromit, feather];

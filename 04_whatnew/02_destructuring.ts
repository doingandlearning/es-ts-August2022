{
  const values = [1, 2, 3, 4];
  const [zeroth, first, ...rest] = values;
  console.log(rest);
  console.log(zeroth);
  console.log(first);

  const newNumbers = [7, 1, [3, 4, [5, 6]]] as const;
  const [seven, , [, four, [, six]]] = newNumbers;

  console.assert(seven === 7);
  console.assert(four === 4);
  console.assert(six === 6);
}
{
  const squares = [1, 4, 9, 16, 25];
  const powers = [2, 4, 8, 16, 32];

  const both = [...squares, ...powers];

  console.log(both);
}
{
  const getMission = (): [string, string, string] => {
    return ["inform", "educate", "entertain"];
  };
  const [inf, edu, ent] = getMission();
}
{
  const prog = {
    name: "Play school",
    presenter: "Floella",
    started: 1976,
    hero: true,
  };
  const { presenter, name } = prog;

  console.log(`${presenter} presented ${name}.`);
}

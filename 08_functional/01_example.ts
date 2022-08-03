// let importantNumber = 3;

// // Impure!!
// // const addFive = (): void => {
// //   importantNumber += 5;
// // };

// // Pure
// const addFive = (num: number): number => {
//   return num + 5;
// };

// // console.log(addFive(importantNumber));

// // Mutated outside the scope!

// // - Hard to follow the flow
// // - Don't know what we're doing!
// // - Cognotive load
// // - Brittle dependency -> too tightly coupled

// // console.log(importantNumber);

const data = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
  {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
  {
    userId: 1,
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
  },
];

console.log(
  data.map((item, idx) => {
    console.log(data);
    return item.title;
  })
);

const customer = { id: 1234, name: "Amalgamated Materials" };

const formatForPrint = () => {
  return `${customer.name} id: ${customer.id}`;
};

console.log(formatForPrint());

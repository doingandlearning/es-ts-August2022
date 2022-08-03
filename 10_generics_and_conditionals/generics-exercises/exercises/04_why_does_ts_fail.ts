// Source: https://dev.to/macsikora/series/4717

type User = {
  id: number;
  kind: string;
};

function makeCustomer<T extends User>(u: T): T {
  // Below error, why?
  return {
    id: u.id,
    kind: "customer",
  };
}

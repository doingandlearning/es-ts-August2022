type User = {
  id: number;
  kind: string;
};

function makeCustomer<T extends User>(u: T): T {
  // no error
  return {
    ...u, // spread all properties of u being T
    id: u.id, // yes redundant line, leaving it for consistency
    kind: "customer",
  };
}

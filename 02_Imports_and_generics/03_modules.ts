const kevin = {
  lives: "Northern Ireland",
  kids: "2",
};

export type Penguin = {
  breed: string;
  yearOfBirth: number;
};

export interface Dog {
  breeds: string[];
  yearOfBirth: number;
  legs?: number;
}

{
  type IsString<T> = T extends string ? true : false;

  type A = IsString<"hello">;
  type B = IsString<123123>;
}

{
  type NonNullable<T> = T extends null | undefined ? never : T;
  type User = {
    id: number;
  };
}

{
  type ToArray<T> = T[];

  type NumberArray = ToArray<number>;
  type B = ToArray<number | string>;
}

{
  type ToArray<T> = T extends unknown ? T[] : T[];
  type NumberArray = ToArray<number>;
  type StringNumberBooleanArray = ToArray<number | string | boolean>;
}

{
  type ElementType<T> = T extends unknown[] ? T[number] : T;
  type A = ElementType<string[]>;

  // we're being explicit when use infer
  type ElementType2<T> = T extends (infer U)[] ? U : T;
  type B = ElementType2<[12, 1212]>;
}
{
  type ArrayItem<T extends any[]> = T extends (infer E)[] ? E : never;

  type A = ArrayItem<true[]>;

  interface User {
    name: string;
    id: number;
  }

  // type NewType<T> = T extends
}

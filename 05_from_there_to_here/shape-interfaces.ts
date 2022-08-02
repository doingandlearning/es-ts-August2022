export interface BaseShape {
  area?: number;
}

export interface Circle extends BaseShape {
  type: "circle";
  radius: number;
}

export interface Rectangle extends BaseShape {
  type: "rectangle";
  length: number;
  width: number;
}

export interface Square extends BaseShape {
  type: "square";
  width: number;
}

export interface RightTriangle extends BaseShape {
  type: "rightTriangle";
  height: number;
  base: number;
}

export type Shape = Circle | Rectangle | Square | RightTriangle;

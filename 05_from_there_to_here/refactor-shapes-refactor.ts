import {
  Shape,
  Rectangle,
  Circle,
  Square,
  RightTriangle,
} from "./shape-interfaces";

const PI = 3.14;

function getCircleArea(circle: Circle): number {
  const { radius } = circle;
  return radius * radius * PI;
}

function getRectangleArea(length: number, width: number): number {
  return length * width;
}

function getSquareArea(width: number): number {
  return getRectangleArea(width, width);
}

function getRightTriangleArea(base: number, height: number): number {
  return (base * height) / 2;
}

function getArea(shape: Shape) {
  switch (shape.type) {
    case "circle":
      return getCircleArea(shape);
    case "rectangle":
      return getRectangleArea(shape.length, shape.width);
    case "square":
      return getSquareArea(shape.width);
    case "rightTriangle":
      return getRightTriangleArea(shape.base, shape.height);
  }
}

const circle: Circle = { type: "circle", radius: 4 };
circle.area = getArea(circle);
console.log(circle);

const rectangle: Rectangle = { type: "rectangle", length: 7, width: 4 };
rectangle.area = getArea(rectangle);
console.log(rectangle);

const square: Square = { type: "square", width: 5 };
square.area = getArea(square);
console.log(square);

const rightTriangle: RightTriangle = {
  type: "rightTriangle",
  base: 9,
  height: 4,
};
rightTriangle.area = getArea(rightTriangle);
console.log(rightTriangle);

const newSquare: Square = { type: "square", width: 12 };
newSquare.area = getArea(newSquare);
console.log(newSquare);

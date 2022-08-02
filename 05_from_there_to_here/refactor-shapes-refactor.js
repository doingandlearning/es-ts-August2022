const PI = 3.14;
function getCircleArea(radius) {
    return radius * radius * PI;
}
function getRectangleArea(length, width) {
    return length * width;
}
function getSquareArea(width) {
    return getRectangleArea(width, width);
}
function getRightTriangleArea(base, height) {
    return (base * height) / 2;
}
function getArea(shape) {
    switch (shape.type) {
        case "circle":
            return getCircleArea(shape.radius);
        case "rectangle":
            return getRectangleArea(shape.length, shape.width);
        case "square":
            return getSquareArea(shape.width);
        case "rightTriangle":
            return getRightTriangleArea(shape.base, shape.height);
    }
}
const circle = { type: "circle", radius: 4 };
circle.area = getArea(circle);
console.log(circle);
const rectangle = { type: "rectangle", length: 7, width: 4 };
rectangle.area = getArea(rectangle);
console.log(rectangle);
const square = { type: "square", width: 5 };
square.area = getArea(square);
console.log(square);
const rightTriangle = {
    type: "rightTriangle",
    base: 9,
    height: 4,
};
rightTriangle.area = getArea(rightTriangle);
console.log(rightTriangle);
const newSquare = { type: "square", width: 12 };
newSquare.area = getArea(newSquare);
console.log(newSquare);

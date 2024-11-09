"use strict";
//Problem 4
function calculateShapeArea(shape) {
    if ('radius' in shape) {
        return Math.PI * Math.pow(shape.radius, 2); // Area of a circle: π * r^2
    }
    else {
        return shape.width * shape.height; // Area of a rectangle: width * height
    }
}
var circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea);
var rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
});

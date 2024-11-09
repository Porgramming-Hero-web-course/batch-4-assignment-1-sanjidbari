"use strict";
//Problem 4
function calculateShapeArea(shape) {
    if ('radius' in shape) {
        return Math.PI * Math.pow(shape.radius, 2.0);
    }
    else {
        return shape.width * shape.height;
    }
}
var circleArea = calculateShapeArea({ shape: "circle", radius: 5 }).toFixed(2);
console.log(circleArea);
var rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
});
console.log(rectangleArea);

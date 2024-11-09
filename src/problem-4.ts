//Problem 4

type Circle = {
    shape: string;
    radius: number;
}

type Rectangle = {
    shape: string;
    width: number;
    height: number;
}

type Shape = Circle | Rectangle;

function calculateShapeArea(shape: Shape): number {
    if ('radius' in shape) {
        return Math.PI * shape.radius ** 2.0;
    } else {
        return shape.width * shape.height;
    }
}

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 }).toFixed(2);

console.log(circleArea);

const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
});

console.log(rectangleArea)
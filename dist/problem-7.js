"use strict";
//Problem 7
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.getCarAge = function () {
        return this.year - 2024;
    };
    return Car;
}());
var car = new Car("Honda", "Civic", 2018);
console.log(car.getCarAge());
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motorbike = void 0;
// Importing Vehicle and Wheel classes
var Vehicle_1 = require("./Vehicle");
var Wheel_1 = require("./Wheel");
// TODO: The Motorbike class should extend the Vehicle class
var Motorbike = /** @class */ (function (_super) {
    __extends(Motorbike, _super);
    // TODO: Create a constructor that accepts the properties of the Motorbike class
    function Motorbike(vin, color, make, model, year, weight, topSpeed, wheels, towingCapacity) {
        var _this = _super.call(this, vin, color, make, model, year, weight, topSpeed) || this;
        _this.vin = vin;
        _this.color = color;
        _this.make = make;
        _this.model = model;
        _this.year = year;
        _this.weight = weight;
        _this.topSpeed = topSpeed;
        // The constructor should check if the wheels array has 2 elements 
        if (wheels.length !== 2) {
            _this.wheels = [new Wheel_1.Wheel(), new Wheel_1.Wheel()];
        }
        else {
            _this.wheels = wheels;
        }
        _this.towingCapacity = towingCapacity;
        return _this;
    }
    //Implement the wheelie method
    Motorbike.prototype.wheelie = function () {
        console.log("Motorbike ".concat(this.make, " ").concat(this.model, " is doing a wheelie!"));
    };
    // printDetails method from the Vehicle class
    Motorbike.prototype.printDetails = function () {
        _super.prototype.printDetails.call(this);
        console.log("VIN: ".concat(this.vin));
        console.log("Make: ".concat(this.make));
        console.log("Model: ".concat(this.model));
        console.log("Year: ".concat(this.year));
        console.log("Weight: ".concat(this.weight));
        console.log("Top Speed: ".concat(this.topSpeed));
        console.log("Color: ".concat(this.color));
        console.log("Wheels: ".concat(this.wheels.map(function (wheel) { return "".concat(wheel.getDiameter, " inch ").concat(wheel.getTireBrand); }).join(', ')));
    };
    return Motorbike;
}(Vehicle_1.Vehicle));
exports.Motorbike = Motorbike;
// Export the Motorbike class as the default export
exports.default = Motorbike;

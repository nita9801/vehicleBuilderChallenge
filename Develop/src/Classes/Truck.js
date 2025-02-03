"use strict";
// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
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
exports.Truck = void 0;
var Vehicle_1 = require("./Vehicle");
var Wheel_1 = require("./Wheel");
//  The Truck class should extend the Vehicle class and should implement the AbleToTow interface
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    // Declare properties of the Truck class
    function Truck(vin, color, make, model, year, weight, topSpeed, wheels, towingCapacity) {
        // call the constructor of the parent class, Vehicle
        var _this = _super.call(this, vin, color, make, model, year, weight, topSpeed) || this;
        _this.vin = vin;
        _this.color = color;
        _this.make = make;
        _this.model = model;
        _this.year = year;
        _this.weight = weight;
        _this.topSpeed = topSpeed;
        _this.wheels = wheels.length > 0 ? wheels : Truck.defaultWheels();
        _this.towingCapacity = towingCapacity;
        return _this;
    }
    Truck.prototype.tow = function (vehicle) {
        throw new Error('Method not implemented.');
    };
    // Override the printDetails method from the Vehicle class
    Truck.prototype.printDetails = function () {
        _super.prototype.printDetails.call(this); // Call the parent method
        console.log("Weight: ".concat(this.weight));
        console.log("Top Speed: ".concat(this.topSpeed));
        console.log("Towing Capacity: ".concat(this.towingCapacity, " lbs"));
        console.log("Wheels: ".concat(this.wheels.map(function (wheel) { return "".concat(wheel.getDiameter, " inch ").concat(wheel.getTireBrand); }).join(', ')));
        this.printWheelDetails(); // Call the printWheelDetails method
    };
    // Call the printWheelDetails method
    Truck.prototype.printWheelDetails = function () {
        this.wheels.forEach(function (wheel, index) {
            console.log("Wheel ".concat(index + 1, ": ").concat(wheel.getDiameter, " inch with a ").concat(wheel.getTireBrand, " tire"));
        });
    };
    ;
    // default wheels to have validation
    Truck.defaultWheels = function () {
        return [new Wheel_1.Wheel(20, "Generic"), new Wheel_1.Wheel(20, "Generic"), new Wheel_1.Wheel(20, "Generic"), new Wheel_1.Wheel(20, "Generic")];
    };
    return Truck;
}(Vehicle_1.Vehicle));
exports.Truck = Truck;
// Export the Truck class as the default export
exports.default = Truck;
function tow(vehicle, arg1) {
    throw new Error('Function not implemented.');
}

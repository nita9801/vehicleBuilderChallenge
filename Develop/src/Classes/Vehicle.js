"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
// Declare properties of the Vehicle class
var Vehicle = /** @class */ (function () {
    // Constructor for the Vehicle class
    function Vehicle(vin, color, make, model, year, weight, topSpeed) {
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.started = false;
        this.currentSpeed = 0;
    }
    // Method to start the vehicle
    Vehicle.prototype.start = function () {
        this.started = true;
        console.log('Vehicle started');
    };
    // Method stop the vehicle
    Vehicle.prototype.stop = function () {
        this.started = false;
        this.currentSpeed = 0;
        console.log('Vehicle stopped');
    };
    // Method turn the vehicle
    Vehicle.prototype.turn = function (direction) {
        console.log("Vehicle turned ".concat(direction));
    };
    // Method reverse the vehicle
    Vehicle.prototype.reverse = function () {
        console.log('Vehicle reversed');
    };
    // Method to print vehicle details
    Vehicle.prototype.printDetails = function () {
        console.log("Vehicle started: ".concat(this.started));
        console.log("Vehicle current speed: ".concat(this.currentSpeed, " mph"));
    };
    // Method to accelerate the vehicle
    Vehicle.prototype.accelerate = function (change) {
        // Check if the vehicle is started
        if (this.started) {
            this.currentSpeed += change;
            console.log("Vehicle accelerated to ".concat(this.currentSpeed, " mph"));
        }
        else {
            console.log('Start the vehicle first');
        }
    };
    // Method to decelerate the vehicle
    Vehicle.prototype.decelerate = function (change) {
        // Check if the vehicle is started
        if (this.started) {
            this.currentSpeed -= change;
            if (this.currentSpeed < 0) {
                this.currentSpeed = 0;
            }
            console.log("Vehicle decelerated to ".concat(this.currentSpeed, " mph"));
        }
        else {
            console.log('Start the vehicle first');
        }
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;

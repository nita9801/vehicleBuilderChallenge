"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Vehicle class that implements Driveable interface
var Vehicle = /** @class */ (function () {
    // Constructor for the Vehicle class
    function Vehicle(vin, color, make, model, year, weight, topSpeed) {
        this.started = false;
        this.currentSpeed = 0;
    }
    // Method to print vehicle details
    Vehicle.prototype.printDetails = function () {
        console.log("Vehicle started: ".concat(this.started));
        console.log("Vehicle current speed: ".concat(this.currentSpeed, " mph"));
    };
    // Method to start the vehicle
    Vehicle.prototype.start = function () {
        this.started = true;
        console.log('Vehicle started');
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
            console.log("Vehicle decelerated to ".concat(this.currentSpeed, " mph"));
        }
        else {
            console.log('Start the vehicle first');
        }
    };
    // Method to stop the vehicle
    Vehicle.prototype.stop = function () {
        this.currentSpeed = 0;
        this.started = false;
        console.log('Vehicle stopped');
    };
    // Method to turn the vehicle
    Vehicle.prototype.turn = function (direction) {
        // Check if the vehicle is started
        if (this.started) {
            console.log("Vehicle turned ".concat(direction));
        }
        else {
            console.log('Start the vehicle first');
        }
    };
    // Method to reverse the vehicle
    Vehicle.prototype.reverse = function () {
        // Check if the vehicle is started
        if (this.started) {
            console.log('Vehicle reversed');
        }
        else {
            console.log('Start the vehicle first');
        }
    };
    return Vehicle;
}());
// Export the Vehicle class
exports.default = Vehicle;

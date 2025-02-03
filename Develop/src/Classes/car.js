"use strict";
// Importing Vehicle and Wheel classes
Object.defineProperty(exports, "__esModule", { value: true });
exports.car = void 0;
const Vehicle_1 = require("./Vehicle");
const Wheel_1 = require("./Wheel");
// Car class that extends Vehicle class
class car extends Vehicle_1.Vehicle {
    // Constructor for the Car class
    constructor(vin, color, make, model, year, weight, topSpeed, wheels) {
        // Call the constructor of the parent class, Vehicle
        super(vin, color, make, model, year, weight, topSpeed);
        this.Wheel = [];
        // Initialize properties of the Car class
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        // Check if the wheels array has 4 elements
        // If not, create 4 new Wheel objects
        // Otherwise, use the provided wheels array
        if (wheels.length !== 4) {
            this.Wheel = [new Wheel_1.Wheel(), new Wheel_1.Wheel(), new Wheel_1.Wheel(), new Wheel_1.Wheel()];
        }
        else {
            this.Wheel = wheels;
        }
    }
    // Override the printDetails method from the Vehicle class
    printDetails() {
        // Call the printDetails method of the parent class, Vehicle
        super.printDetails();
        // Print details of the Car class
        console.log(`VIN: ${this.vin}`);
        console.log(`Color: ${this.color}`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Weight: ${this.weight} lbs`);
        console.log(`Top Speed: ${this.topSpeed} mph`);
        // Print details of the wheels
        console.log(`Wheel 1: ${this.Wheel[0].getDiameter} inch with a ${this.Wheel[0].getTireBrand} tire`);
        console.log(`Wheel 2: ${this.Wheel[1].getDiameter} inch with a ${this.Wheel[1].getTireBrand} tire`);
        console.log(`Wheel 3: ${this.Wheel[2].getDiameter} inch with a ${this.Wheel[2].getTireBrand} tire`);
        console.log(`Wheel 4: ${this.Wheel[3].getDiameter} inch with a ${this.Wheel[3].getTireBrand} tire`);
    }
}
exports.car = car;
// Export the Car class as the default export
exports.default = car;

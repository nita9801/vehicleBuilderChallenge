"use strict";
// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
Object.defineProperty(exports, "__esModule", { value: true });
exports.Truck = void 0;
const Vehicle_1 = require("./Vehicle");
const Wheel_1 = require("./Wheel");
//  The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle_1.Vehicle {
    // Declare properties of the Truck class
    constructor(vin, color, make, model, year, weight, topSpeed, wheels, towingCapacity) {
        // call the constructor of the parent class, Vehicle
        super(vin, color, make, model, year, weight, topSpeed);
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.wheels = wheels.length > 0 ? wheels : Truck.defaultWheels();
        this.towingCapacity = towingCapacity;
    }
    tow(vehicle) {
        throw new Error('Method not implemented.');
    }
    // Override the printDetails method from the Vehicle class
    printDetails() {
        super.printDetails(); // Call the parent method
        console.log(`Weight: ${this.weight}`);
        console.log(`Top Speed: ${this.topSpeed}`);
        console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
        console.log(`Wheels: ${this.wheels.map((wheel) => `${wheel.getDiameter} inch ${wheel.getTireBrand}`).join(', ')}`);
        this.printWheelDetails(); // Call the printWheelDetails method
    }
    // Call the printWheelDetails method
    printWheelDetails() {
        this.wheels.forEach((wheel, index) => {
            console.log(`Wheel ${index + 1}: ${wheel.getDiameter} inch with a ${wheel.getTireBrand} tire`);
        });
    }
    ;
    // default wheels to have validation
    static defaultWheels() {
        return [new Wheel_1.Wheel(20, "Generic"), new Wheel_1.Wheel(20, "Generic"), new Wheel_1.Wheel(20, "Generic"), new Wheel_1.Wheel(20, "Generic")];
    }
}
exports.Truck = Truck;
// Export the Truck class as the default export
exports.default = Truck;
function tow(vehicle, arg1) {
    throw new Error('Function not implemented.');
}

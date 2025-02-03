// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import { Vehicle } from './Vehicle.js';
// The Truck class should extend the Vehicle class and should implement the AbleToTow interface
export class Truck extends Vehicle {
    constructor(vin, color, make, model, year, weight, topSpeed, wheels, towingCapacity) {
        super(vin, color, make, model, year, weight, topSpeed);
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.wheels = wheels;
        this.towingCapacity = towingCapacity;
    }
    tow(vehicle) {
        const makeAndModel = `${vehicle.make} ${vehicle.model}`;
        if (vehicle.weight <= this.towingCapacity) {
            console.log(`The ${makeAndModel} is being towed.`);
        }
        else {
            console.log(`The ${makeAndModel} is too heavy to be towed.`);
        }
    }
    printDetails() {
        super.printDetails();
        console.log(`Weight: ${this.weight}`);
        console.log(`Top Speed: ${this.topSpeed}`);
        console.log(`Towing Capacity: ${this.towingCapacity}`);
        console.log(`Wheels: ${this.wheels.map(wheel => `${wheel.getDiameter} inch ${wheel.getTireBrand}`).join(', ')}`);
    }
}



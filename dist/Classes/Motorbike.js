// Importing Vehicle and Wheel classes
import { Vehicle } from "./Vehicle.js";
import { Wheel } from "./Wheel.js";
// TODO: The Motorbike class should extend the Vehicle class
export class Motorbike extends Vehicle {
    // TODO: Create a constructor that accepts the properties of the Motorbike class
    constructor(vin, color, make, model, year, weight, topSpeed, wheels, towingCapacity) {
        super(vin, color, make, model, year, weight, topSpeed);
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        // The constructor should check if the wheels array has 2 elements 
        if (wheels.length !== 2) {
            this.wheels = [new Wheel(), new Wheel()];
        }
        else {
            this.wheels = wheels;
        }
        this.towingCapacity = towingCapacity;
    }
    //Implement the wheelie method
    wheelie() {
        console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
    }
    // printDetails method from the Vehicle class
    printDetails() {
        super.printDetails();
        console.log(`VIN: ${this.vin}`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Weight: ${this.weight}`);
        console.log(`Top Speed: ${this.topSpeed}`);
        console.log(`Color: ${this.color}`);
        console.log(`Wheels: ${this.wheels.map(wheel => `${wheel.getDiameter} inch ${wheel.getTireBrand}`).join(', ')}`);
    }
}
// Export the Motorbike class as the default export
export default Motorbike;

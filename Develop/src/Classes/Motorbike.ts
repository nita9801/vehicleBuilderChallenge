// Importing Vehicle and Wheel classes
import { Vehicle } from './Vehicle.js';
import { Wheel } from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
export class Motorbike extends Vehicle {
  override vin: string;
  override color: string;
  override make: string;
  override model: string;
  override year: number;
  override weight: number;
  override topSpeed: number;
           wheels: Wheel[];
           towingCapacity: number;  
    
  // TODO: Create a constructor that accepts the properties of the Motorbike class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ){
    super(vin,color, make, model, year, weight, topSpeed);
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
  // The constructor should check if the wheels array has 2 elements 
  if (wheels.length !== 2) {
    this.wheels = [new Wheel(), new Wheel()];
  } else {
    this.wheels = wheels;
  }
  // TODO: Implement the wheelie method
  // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"


  // TODO: Override the printDetails method from the Vehicle class
  override printDetails(): void {
    super.printDetails();
    console.log(`Weight: ${this.weight}`);
    console.log(`Top Speed: ${this.topSpeed}`);
    console.log(`Towing Capacity: ${this.towingCapacity}`);
    console.log(`Wheels: ${this.wheels.map(wheel => `${wheel.size} inch ${wheel.type}`).join(', ')}`);
  }
  // TODO: The method should call the printDetails method of the parent class
  // TODO: The method should log the details of the Motorbike
  // TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels
}


// Export the Motorbike class as the default export
export default Motorbike;

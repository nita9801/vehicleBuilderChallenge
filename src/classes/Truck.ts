// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces

import { Vehicle } from './Vehicle';
import { Motorbike }from './Motorbike';
import { Car } from './Car.js';
import { Wheel } from './Wheel';
import AbleToTow from '../Interfaces/AbletoTow.js';


//  The Truck class should extend the Vehicle class and should implement the AbleToTow interface
  export class Truck extends Vehicle implements AbleToTow {
  override vin: string;
  override color: string;
  override make: string;
  override model: string;
  override year: number;
  override weight: number;
  override topSpeed: number;
   wheels: Wheel[];
   towingCapacity: number;

   // Declare properties of the Truck class
  constructor(
     vin: string, 
     color: string,
     make: string,
     model: string,
     year: number, 
     weight: number, 
     topSpeed: number,
     wheels: [], 
     towingCapacity: number
) {
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
    tow(vehicle: Truck | Motorbike | Car): void {
      throw new Error('Method not implemented.');
    }
 // Override the printDetails method from the Vehicle class
  override printDetails(): void {
  super.printDetails(); // Call the parent method
  console.log(`Weight: ${this.weight}`);
  console.log(`Top Speed: ${this.topSpeed}`);
  console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
  console.log(`Wheels: ${this.wheels.map((wheel) => `${wheel.getDiameter} inch ${wheel.getTireBrand}`).join(', ')}`);
  this.printWheelDetails(); // Call the printWheelDetails method
}
  // Call the printWheelDetails method
    printWheelDetails(): void {
    this.wheels.forEach((wheel, index) => {
      console.log(`Wheel ${index + 1}: ${wheel.getDiameter} inch with a ${wheel.getTireBrand} tire`);
    });
  };
    // default wheels to have validation
    static defaultWheels(): Wheel[] {
    return [new Wheel(20, "Generic"), new Wheel(20, "Generic"), new Wheel(20, "Generic"), new Wheel(20, "Generic")];
    }
   }
  
// Export the Truck class as the default export
export default Truck;
function tow(vehicle: any, arg1: number) {
  throw new Error('Function not implemented.');
}


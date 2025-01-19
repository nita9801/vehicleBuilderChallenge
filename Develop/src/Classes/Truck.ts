// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces

import { Vehicle } from './Vehicle';
import { Motorbike }from './Motorbike';
import { car } from './car';
import { Wheel } from './Wheel';
import AbleToTow from '../Interfaces/Able To Tow';
import { NamedTupleMember } from 'typescript';

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

  // default wheels to have validation
  static defaultWheels(): Wheel[] {
  return [new Wheel(20, "Generic"), new Wheel(20, "Generic"), new Wheel(20, "Generic"), new Wheel(20, "Generic")];
};
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

  // Validate input
  if (weight <= 0) throw new Error("Weight must be a positive number.");
  if (topSpeed <= 0) throw new Error("Top speed must be a positive number.");
  if (towingCapacity <= 0) throw new Error("Towing capacity must be a positive number.");
   
    this.wheels = wheels.length > 0 ? wheels : Truck.defaultWheels();
    this.towingCapacity = towingCapacity;

  } 
  // TODO: Override the printDetails method from the Vehicle class
  override printDetails(): void {
    super.printDetails(); // Call the parent method
    console.log(`Weight: ${this.weight}`);
    console.log(`Top Speed: ${this.topSpeed}`);
    console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
    console.log(`Wheels: ${this.wheels.map((wheel) => `${wheel.size()} inch ${wheel.brand}`).join(', ')}`
  
  // Print details of the wheels
   printWheelDetails(): void {
    this.wheels.forEach((wheel, index) => {
      console.log(`Wheel ${index + 1}: ${wheel.size} inch with a ${wheel.brand} tire`);
    });
  }
}
 // TODO: Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | car): void {
    const makeAndModel = `${vehicle.make} ${vehicle.model}`;
    if (vehicle.weight <= this.towingCapacity) {
    console.log(`The ${makeAndModel} is being towed.`);
    } else {
    console.log(`The ${makeAndModel} is too heavy to be towed.`);
    }
   }
  }
// Export the Truck class as the default export
export default Truck;

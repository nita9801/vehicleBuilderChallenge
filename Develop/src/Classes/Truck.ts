// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces

import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';
import { NamedTupleMember } from 'typescript';

//  The Truck class should extend the Vehicle class and should implement the AbleToTow interface

 class Truck extends Vehicle implements AbleToTow {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // Declare properties of the Truck class
  constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, topSpeed: number, wheels: [], towingCapacity: number) 
{
  // call the constructor of the parent class, Vehicle
  super(vin, color, make, model, year, weight);
  
  // Initialize properties of the Truck class
  if (weight <= 0) throw new Error("Weight must be a positive number.");
  if (topSpeed <= 0) throw new Error("Top speed must be a positive number.");
  if (towingCapacity <= 0) throw new Error("Towing capacity must be a positive number.");
  
  this.towingCapacity = towingCapacity;
  this.wheels = wheels.length > 0 ? wheels : Truck.defaultWheels();
}
  // default wheels to have validation
  static defaultWheels(): Wheel[] {
  return [new Wheel(20, "Generic"), new Wheel(20, "Generic"), new Wheel(20, "Generic"), new Wheel(20, "Generic")];
}
  // TODO: Override the printDetails method from the Vehicle class
  override printDetails(): void {
    super.printDetails(); // Call the parent method
    console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
    console.log(
      `Wheels: ${this.wheels.map((wheel) => `${wheel.size} inch ${wheel.brand}`).join(', '
    )}`

  // TODO: Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    const makeAndModel = `${vehicle.make} ${vehicle.model}`;
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`The ${makeAndModel} is being towed.`);
    } else {
      console.log(`The ${makeAndModel} is too heavy to be towed.`);
    }
  }
  // Print details of the wheels
  printWheelDetails(): void {
    this.wheels.forEach((wheel, index) => {
    console.log(`Wheel ${index + 1}: ${wheel.getDiameter()} inch with a ${wheel.getTireBrand()} tire`
    );
  });
}
}
// Export the Truck class as the default export
export default Truck;

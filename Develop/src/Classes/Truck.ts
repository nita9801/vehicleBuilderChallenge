// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import { Vehicle } from './Vehicle.js';
import { Motorbike } from './Motorbike.js';
import { Car } from './car';
import { Wheel } from './Wheel';
import AbleToTow  from '../Interfaces/Able To Tow.js';

// The Truck class should extend the Vehicle class and should implement the AbleToTow interface
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
  ) {
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
  tow(vehicle: Truck | Motorbike | Car): void {
    const makeAndModel = `${vehicle.make} ${vehicle.model}`;
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`The ${makeAndModel} is being towed.`);
    } else {
      console.log(`The ${makeAndModel} is too heavy to be towed.`);
    }
  }
  override printDetails(): void {
    super.printDetails();
    console.log(`Weight: ${this.weight}`);
    console.log(`Top Speed: ${this.topSpeed}`);
    console.log(`Towing Capacity: ${this.towingCapacity}`);
    console.log(`Wheels: ${this.wheels.map(wheel => `${wheel.getDiameter} inch ${wheel.getTireBrand}`).join(', ')}`);
  }
 }
// Export the Truck class as the default export
export default Truck;

// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

//  The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  //  Declare properties of the Motorbike
  vin: string;
  color: String;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  //  Create a constructor that accepts the properties of the Motorbike class
  constructor(
    vin: string,
    color: String,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    frontWheel: Wheel,
    rearWheel: Wheel,
  ) {
    //  The constructor should call the constructor of the parent class, Vehicle
    super();
    //  The constructor should initialize the properties of the Motorbike class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year =year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    //  The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
    this.wheels = [frontWheel, rearWheel];
  }
  //  Implement the wheelie method
  wheelie(): void {
    //  The method should log the message "Motorbike [make] [model] is doing a wheelie!"
    console.log(`Your ${this.make} ${this.model} is doing a wheelie!`);
  }
  //  Override the printDetails method from the Vehicle class
  override printDetails(): void {

  //  The method should call the printDetails method of the parent class
    super.printDetails();

  //  The method should log the details of the Motorbike

    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Front Wheel: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`);
    console.log(`Rear Wheel: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`);
  }
}
// Export the Motorbike class as the default export
export default Motorbike;
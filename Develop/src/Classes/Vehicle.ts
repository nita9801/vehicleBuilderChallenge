// import Driveable interface
import Driveable from '../Interfaces/Driveable.js';

// Declare properties of the Vehicle class
export class Vehicle implements Driveable {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  started: boolean;
  currentSpeed: number;

  // Constructor for the Vehicle class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number
  ) {
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.started = false;
    this.currentSpeed = 0;
  }
 
  // Method to start the vehicle
 start(): void {
    this.started = true;
    console.log('Vehicle started');
  }
  // Method stop the vehicle
  stop(): void {
    this.started = false;
    this.currentSpeed = 0;
    console.log('Vehicle stopped');
  }
  // Method turn the vehicle
  turn(direction: string): void {
    console.log(`Vehicle turned ${direction}`);
  }
  // Method reverse the vehicle
  reverse(): void {
    console.log('Vehicle reversed');
  }
  // Method to print vehicle details
  printDetails(): void {
    console.log(`Vehicle started: ${this.started}`);
    console.log(`Vehicle current speed: ${this.currentSpeed} mph`);
  }

  // Method to accelerate the vehicle
  accelerate(change: number): void {
    // Check if the vehicle is started
    if (this.started) {
      this.currentSpeed += change;
      console.log(`Vehicle accelerated to ${this.currentSpeed} mph`);
    } else {
      console.log('Start the vehicle first');
    }
  }

  // Method to decelerate the vehicle
  decelerate(change: number): void {
    // Check if the vehicle is started
    if (this.started) {
      this.currentSpeed -= change;
      if (this.currentSpeed < 0) {
        this.currentSpeed = 0;
      }
      console.log(`Vehicle decelerated to ${this.currentSpeed} mph`);
    } else {
      console.log('Start the vehicle first');
    }
  }
}
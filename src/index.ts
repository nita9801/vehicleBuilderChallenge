// import classes

import { Motorbike } from"./classes/Motorbike.js";
import { Car } from "./classes/Car.js";
import { Wheel } from "./classes/Wheel.js";
import { Cli as ImportedCli }  from "./classes/Cli.js";
import { Truck } from"./classes/Truck.js";

// create an array of vehicles
const vehicle: (Car | Motorbike | Truck)[] = [];

class LocalCli {
  generateVin(): string {
    throw new Error("Method not implemented.");
  }
  private vehicles: (Car | Motorbike | Truck)[];

  constructor(vehicles: (Car | Motorbike | Truck)[]) {
    this.vehicles = vehicles;
  }
  // start the cli
  startCli() {
    console.log("CLI started with vehicles:", this.vehicles);
  } 
}

// Create an instance of the Cli class
const cli = new LocalCli(vehicle);

const truck1 = new Truck(cli.generateVin(),"red", "Ford", "F-150", 2021, 5000, 120, [], 10000);

// will use default wheels
const car1 = new Car(
  cli.generateVin(),
  'blue',
  'Toyota',
  'Camry',
  2021,
  3000,
  130,
  []
);

const motorbike1Wheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];

const motorbike1 = new Motorbike(ImportedCli.generateVin(), "black", "Harley Davidson", "Sportster", 2021, 500, 125, motorbike1Wheels,0);

// push vehicles to array
 vehicle.push(truck1);
 vehicle.push(car1);
 vehicle.push(motorbike1);

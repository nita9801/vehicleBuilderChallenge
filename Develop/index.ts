// import classes

import { Motorbike } from"./src/classes/Motorbike";
import { car } from "./src/classes/car";
import { Wheel } from "./src/classes/Wheel";
import { Cli as ImportedCli }  from "./src/classes/Cli";
import { Truck } from"./src/classes/Truck";

// create an array of vehicles
const vehicle: (car | Motorbike | Truck)[] = [];

class LocalCli {
  generateVin(): string {
    throw new Error("Method not implemented.");
  }
  private vehicles: (car | Motorbike | Truck)[];

  constructor(vehicles: (car | Motorbike | Truck)[]) {
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
const car1 = new car(
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

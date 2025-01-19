// import classes

import { Truck } from "./classes/Truck";
import { car } from "./classes/car";
import { Motorbike } from "./classes/Motorbike";
import { Wheel } from "./classes/Wheel";
import { Cli }  from "./classes/Cli";

// create an array of vehicles
const vehicles = [];

const truck1 = new Truck(Cli.generateVin(),"red", "Ford", "F-150", 2021, 5000, 120, [], 10000);

// will use default wheels
const car1 = new car(
  Cli.generateVin(),
  'blue',
  'Toyota',
  'Camry',
  2021,
  3000,
  130,
  []
);
 const motorbike1Wheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
 const motorbike1 = new Motorbike(Cli.generateVin(), "black", "Harley Davidson", "Sportster", 2021, 500, 125, motorbike1Wheels);

// push vehicles to array
 vehicles.push(truck1);
 vehicles.push(car1);
 vehicles.push(motorbike1);

// create a new instance of the Cli class
 const cli = new Cli(vehicles);

 // start the cli
cli.startCli();

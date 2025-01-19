// import classes

import { Vehicle } from "./classes/Vehicle";
import { Motorbike } from"./classes/Motorbike";
import { car } from "./classes/car";
import { Wheel } from "./classes/Wheel";
import { Cli }  from "./classes/Cli";
import { Truck } from"./classes/Truck";

// create an array of vehicles
const vehicle: Vehicle [] = [];
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
 const motorbike1 = new Motorbike(Cli.generateVin(), "black", "Harley Davidson", "Sportster", 2021, 500, 125, motorbike1Wheels,0);

// push vehicles to array
 vehicle.push(truck1);
 vehicle.push(car1);
 vehicle.push(motorbike1);

// create a new instance of the Cli class
 const cli = new Cli(vehicle);

 // start the cli
cli.startCli();

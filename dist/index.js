// import classes
import { Car } from "./classes/Car.js";
import { Motorbike } from "./classes/Motorbike.js";
import { Truck } from "./classes/Truck.js";
import { Wheel } from "./classes/Wheel.js";
import Cli from "./classes/Cli.js";
// create an array of vehicles
const vehicles = [];
// Create instances of vehicles
const truck1 = new Truck(Cli.generateVin(), "red", "Ford", "F-150", 2021, 5000, 120, [], 10000);
const car1 = new Car(Cli.generateVin(), 'blue', 'Toyota', 'Camry', 2021, 3000, 130, []);
const motorbike1Wheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
const motorbike1 = new Motorbike(Cli.generateVin(), "black", "Harley Davidson", "Sportster", 2021, 500, 125, motorbike1Wheels, 0);
// push vehicles to array
vehicles.push(truck1);
vehicles.push(car1);
vehicles.push(motorbike1);
// Create an instance of the Cli class
const cli = new Cli(vehicles);
// start the cli
cli.startCli();
console.log("CLI started with vehicles:", vehicles);

// import classes
import { Truck } from '../src/Classes/Truck';
import { Car } from '../src/Classes/car';
import { Motorbike } from '../src/Classes/Motorbike';
import { Wheel } from '../src/Classes/Wheel';
import Cli from '../src/Classes/Cli';
// create an array of vehicles
const vehicles = [];
const truck1 = new Truck(Cli.generateVin(), "red", "Ford", "F-150", 2021, 5000, 120, [], 10000);
// will use default wheels
const car1 = new Car(Cli.generateVin(), 'blue', 'Toyota', 'Camry', 2021, 3000, 130, []);
const motorbike1Wheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
const motorbike1 = new Motorbike(Cli.generateVin(), "black", "Harley Davidson", "Sportster", 2021, 500, 125, motorbike1Wheels, 0);
// push vehicles to array
vehicles.push(truck1);
vehicles.push(car1);
vehicles.push(motorbike1);
// create a new instance of the Cli class
const cli = new Cli(vehicles);
// start the cli
cli.startCli();

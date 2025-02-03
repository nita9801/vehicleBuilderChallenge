"use strict";
// import classes
Object.defineProperty(exports, "__esModule", { value: true });
const Motorbike_1 = require("./src/classes/Motorbike");
const car_1 = require("./src/classes/car");
const Wheel_1 = require("./src/classes/Wheel");
const Cli_1 = require("./src/classes/Cli");
const Truck_1 = require("./src/classes/Truck");
// create an array of vehicles
const vehicle = [];
class LocalCli {
    generateVin() {
        throw new Error("Method not implemented.");
    }
    constructor(vehicles) {
        this.vehicles = vehicles;
    }
    // start the cli
    startCli() {
        console.log("CLI started with vehicles:", this.vehicles);
    }
}
// Create an instance of the Cli class
const cli = new LocalCli(vehicle);
const truck1 = new Truck_1.Truck(cli.generateVin(), "red", "Ford", "F-150", 2021, 5000, 120, [], 10000);
// will use default wheels
const car1 = new car_1.car(cli.generateVin(), 'blue', 'Toyota', 'Camry', 2021, 3000, 130, []);
const motorbike1Wheels = [new Wheel_1.Wheel(17, "Michelin"), new Wheel_1.Wheel(17, "Michelin")];
const motorbike1 = new Motorbike_1.Motorbike(Cli_1.Cli.generateVin(), "black", "Harley Davidson", "Sportster", 2021, 500, 125, motorbike1Wheels, 0);
// push vehicles to array
vehicle.push(truck1);
vehicle.push(car1);
vehicle.push(motorbike1);

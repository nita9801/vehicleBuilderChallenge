"use strict";
// import classes
Object.defineProperty(exports, "__esModule", { value: true });
var Motorbike_1 = require("./src/classes/Motorbike");
var car_1 = require("./src/classes/car");
var Wheel_1 = require("./src/classes/Wheel");
var Cli_1 = require("./src/classes/Cli");
var Truck_1 = require("./src/classes/Truck");
// create an array of vehicles
var vehicle = [];
var LocalCli = /** @class */ (function () {
    function LocalCli(vehicles) {
        this.vehicles = vehicles;
    }
    LocalCli.prototype.generateVin = function () {
        throw new Error("Method not implemented.");
    };
    // start the cli
    LocalCli.prototype.startCli = function () {
        console.log("CLI started with vehicles:", this.vehicles);
    };
    return LocalCli;
}());
// Create an instance of the Cli class
var cli = new LocalCli(vehicle);
var truck1 = new Truck_1.Truck(cli.generateVin(), "red", "Ford", "F-150", 2021, 5000, 120, [], 10000);
// will use default wheels
var car1 = new car_1.car(cli.generateVin(), 'blue', 'Toyota', 'Camry', 2021, 3000, 130, []);
var motorbike1Wheels = [new Wheel_1.Wheel(17, "Michelin"), new Wheel_1.Wheel(17, "Michelin")];
var motorbike1 = new Motorbike_1.Motorbike(Cli_1.Cli.generateVin(), "black", "Harley Davidson", "Sportster", 2021, 500, 125, motorbike1Wheels, 0);
// push vehicles to array
vehicle.push(truck1);
vehicle.push(car1);
vehicle.push(motorbike1);

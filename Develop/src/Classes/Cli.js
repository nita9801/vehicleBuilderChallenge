"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cli = void 0;
// importing classes from other files
var Motorbike_1 = require("./Motorbike");
var Car_1 = require("./Car");
var Truck_1 = require("./Truck");
var Wheel_1 = require("./Wheel");
var inquirer_1 = require("inquirer");
// define the Cli class
var Cli = /** @class */ (function () {
    function Cli(vehicles) {
        this.exit = false;
        this.vehicles = vehicles;
    }
    // static method to generate a vin
    Cli.generateVin = function () {
        // return a random string
        return (Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15));
    };
    // method to create a vehicle
    Cli.prototype.createVehicle = function () {
        var _this = this;
        inquirer_1.default
            .prompt([
            {
                type: 'list',
                name: 'vehicleType',
                message: 'Select a vehicle type',
                // array to include Truck and Motorbike
                choices: ['Car', 'Truck', 'Motorbike'],
            },
        ])
            .then(function (answers) {
            switch (answers.vehicleType) {
                case 'Car':
                    _this.createCar();
                    break;
                case 'Truck':
                    _this.createTruck();
                    break;
                case 'Motorbike':
                    _this.createMotorbike();
                    break;
                default:
                    console.log('Invalid selection');
            }
        });
    };
    // method to choose a vehicle from existing vehicles
    Cli.prototype.chooseVehicle = function () {
        var _this = this;
        var _a;
        inquirer_1.default
            .prompt([
            {
                type: 'list',
                name: 'selectedVehicleVin',
                message: 'Select a vehicle to perform an action on',
                choices: (_a = this.vehicles) === null || _a === void 0 ? void 0 : _a.map(function (vehicle) {
                    return {
                        name: "".concat(vehicle.vin, " -- ").concat(vehicle.make, " ").concat(vehicle.model),
                        value: vehicle.vin,
                    };
                }),
            },
        ])
            .then(function (answers) {
            // set the selectedVehicleVin to the vin of the selected vehicle
            _this.selectedVehicleVin = answers.selectedVehicleVin;
            // perform actions on the selected vehicle
            if (_this.vehicles) {
                // this.performActions();
            }
        });
    };
    // Removed duplicate performActions method
    // method to perform actions on a vehicle
    Cli.prototype.performActions = function () {
        var _this = this;
        inquirer_1.default
            .prompt([
            {
                type: 'list',
                name: 'action',
                message: 'Select an action',
                // TODO: add options to tow and wheelie
                choices: [
                    'Print details',
                    'Start vehicle',
                    'Accelerate 5 MPH',
                    'Decelerate 5 MPH',
                    'Stop vehicle',
                    'Turn right',
                    'Turn left',
                    'Reverse',
                    'Select or create another vehicle',
                    'Exit',
                ],
            },
        ])
            .then(function (answers) {
            // perform the selected action
            if (answers.action === 'Print details') {
                // find the selected vehicle and print its details
                for (var i = 0; i < _this.vehicles.length; i++) {
                    if (_this.vehicles[i] && _this.vehicles[i].vin === _this.selectedVehicleVin) {
                        _this.vehicles[i].printDetails();
                    }
                    // method to start the cli
                    startCli();
                    void {
                        inquirer: inquirer_1.default,
                        : 
                            .prompt([
                            {
                                type: 'list',
                                name: 'CreateOrSelect',
                                message: 'Would you like to create a new vehicle or perform an action on an existing vehicle?',
                                choices: ['Create a new vehicle', 'Select an existing vehicle'],
                            },
                        ])
                            .then(function (answers) {
                            // check if the user wants to create a new vehicle or select an existing vehicle
                            if (answers.CreateOrSelect === 'Create a new vehicle') {
                                _this.createVehicle();
                            }
                            else {
                                _this.chooseVehicle();
                            }
                        })
                    };
                }
            }
            else if (answers.action === 'Start vehicle') {
                // find the selected vehicle and start it
                for (var i = 0; i < _this.vehicles.length; i++) {
                    if (_this.vehicles[i].vin === _this.selectedVehicleVin) {
                        _this.vehicles[i].start();
                    }
                }
            }
            else if (answers.action === 'Accelerate 5 MPH') {
                // find the selected vehicle and accelerate it by 5 MPH
                for (var i = 0; i < _this.vehicles.length; i++) {
                    if (_this.vehicles[i].vin === _this.selectedVehicleVin) {
                        _this.vehicles[i].accelerate(5);
                    }
                }
            }
            else if (answers.action === 'Decelerate 5 MPH') {
                // find the selected vehicle and decelerate it by 5 MPH
                for (var i = 0; i < _this.vehicles.length; i++) {
                    if (_this.vehicles[i].vin === _this.selectedVehicleVin) {
                        _this.vehicles[i].decelerate(5);
                    }
                }
            }
            else if (answers.action === 'Stop vehicle') {
                // find the selected vehicle and stop it
                for (var i = 0; i < _this.vehicles.length; i++) {
                    if (_this.vehicles[i].vin === _this.selectedVehicleVin) {
                        _this.vehicles[i].stop();
                    }
                }
            }
            else if (answers.action === 'Turn right') {
                // find the selected vehicle and turn it right
                for (var i = 0; i < _this.vehicles.length; i++) {
                    if (_this.vehicles[i].vin === _this.selectedVehicleVin) {
                        _this.vehicles[i].turn('right');
                    }
                }
            }
            else if (answers.action === 'Turn left') {
                // find the selected vehicle and turn it left
                for (var i = 0; i < _this.vehicles.length; i++) {
                    if (_this.vehicles[i].vin === _this.selectedVehicleVin) {
                        _this.vehicles[i].turn('left');
                    }
                }
            }
            else if (answers.action === 'Reverse') {
                // find the selected vehicle and reverse it
                for (var i = 0; i < _this.vehicles.length; i++) {
                    if (_this.vehicles[i].vin === _this.selectedVehicleVin) {
                        _this.vehicles[i].reverse();
                    }
                }
            }
            // TODO: add statements to perform the tow action only if the selected vehicle is a truck. Call the findVehicleToTow method to find a vehicle to tow and pass the selected truck as an argument. After calling the findVehicleToTow method, you will need to return to avoid instantly calling the performActions method again since findVehicleToTow is asynchronous.
            // TODO: add statements to perform the wheelie action only if the selected vehicle is a motorbike
            else if (answers.action === 'Select or create another vehicle') {
                // start the cli to return to the initial prompt if the user wants to select or create another vehicle
                _this.startCli();
                return;
            }
            else {
                // exit the cli if the user selects exit
                if (_this) {
                    _this.exit = true;
                }
            }
            if (!_this.exit) {
                // if the user does not want to exit, perform actions on the selected vehicle
                // this.performActions();
            }
        });
    };
    // method to create a car
    Cli.prototype.createCar = function () {
        var _this = this;
        inquirer_1.default
            .prompt([
            {
                type: 'input',
                name: 'color',
                message: 'Enter Color',
            },
            {
                type: 'input',
                name: 'make',
                message: 'Enter Make',
            },
            {
                type: 'input',
                name: 'model',
                message: 'Enter Model',
            },
            {
                type: 'input',
                name: 'year',
                message: 'Enter Year',
            },
            {
                type: 'input',
                name: 'weight',
                message: 'Enter Weight',
            },
            {
                type: 'input',
                name: 'topSpeed',
                message: 'Enter Top Speed',
            },
        ])
            .then(function (answers) {
            var wheels = answers.wheels.split(',').map(function (wheel) { return new Wheel_1.Wheel(parseInt(wheel.trim()), 'DefaultBrand'); });
            var Car = new Car_1.car(Cli.generateVin(), answers.color, answers.make, answers.model, parseInt(answers.year), parseInt(answers.weight), parseInt(answers.topSpeed), wheels);
            // push the car to the vehicles array
            _this.vehicles.push(Car);
            console.log('Car created:', Car_1.car);
            // set the selectedVehicleVin to the vin of the car
            _this.selectedVehicleVin = Car_1.car.vin;
            // perform actions on the car
            _this.performActions();
        });
    };
    // method to create a truck
    Cli.prototype.createTruck = function () {
        var _this = this;
        inquirer_1.default
            .prompt([
            {
                type: 'input',
                name: 'color',
                message: 'Enter Color',
            },
            {
                type: 'input',
                name: 'make',
                message: 'Enter Make',
            },
            {
                type: 'input',
                name: 'model',
                message: 'Enter Model',
            },
            {
                type: 'input',
                name: 'year',
                message: 'Enter Year',
            },
            {
                type: 'input',
                name: 'weight',
                message: 'Enter Weight',
            },
            {
                type: 'input',
                name: 'topSpeed',
                message: 'Enter Top Speed',
            },
            {
                type: 'input',
                name: 'wheels',
                message: 'Enter Wheels (comma-separated diameters)',
            },
            {
                type: 'input',
                name: 'towingCapacity',
                message: 'Enter Towing Capacity',
            },
        ])
            .then(function (answers) {
            // Use the answers object to pass the required properties to the Truck constructor
            var wheels = answers.wheels.split(',').map(function (wheel) { return new Wheel_1.Wheel(parseInt(wheel.trim()), 'DefaultBrand'); });
            var truck = new Truck_1.Truck(Cli.generateVin(), answers.color, answers.make, answers.model, parseInt(answers.year), parseInt(answers.weight), parseInt(answers.topSpeed), wheels, parseInt(answers.towingCapacity));
            // push the truck to the vehicles array
            _this.vehicles.push(truck);
            console.log('Truck created:', truck);
            //selectedVehicleVin to the vin of the truck 
            _this.selectedVehicleVin = truck.vin;
            // perform actions on the car
            _this.performActions();
        });
    };
    // method to create a motorbike
    Cli.prototype.createMotorbike = function () {
        var _this = this;
        inquirer_1.default
            .prompt([
            {
                type: 'input',
                name: 'color',
                message: 'Enter Color',
            },
            {
                type: 'input',
                name: 'make',
                message: 'Enter Make',
            },
            {
                type: 'input',
                name: 'model',
                message: 'Enter Model',
            },
            {
                type: 'input',
                name: 'year',
                message: 'Enter Year',
            },
            {
                type: 'input',
                name: 'weight',
                message: 'Enter Weight',
            },
            {
                type: 'input',
                name: 'topSpeed',
                message: 'Enter Top Speed',
            },
            {
                type: 'input',
                name: 'frontWheelDiameter',
                message: 'Enter Front Wheel Diameter',
            },
            {
                type: 'input',
                name: 'frontWheelBrand',
                message: 'Enter Front Wheel Brand',
            },
            {
                type: 'input',
                name: 'rearWheelDiameter',
                message: 'Enter Rear Wheel Diameter',
            },
            {
                type: 'input',
                name: 'rearWheelBrand',
                message: 'Enter Rear Wheel Brand',
            },
        ])
            .then(function (answers) {
            //Use the answers object to pass the required properties to the Motorbike constructor
            var wheels = [
                new Wheel_1.Wheel(parseInt(answers.frontWheelDiameter), answers.frontWheelBrand),
                new Wheel_1.Wheel(parseInt(answers.rearWheelDiameter), answers.rearWheelBrand)
            ];
            var motorbike = new Motorbike_1.Motorbike(Cli.generateVin(), answers.color, answers.make, answers.model, parseInt(answers.year), parseInt(answers.weight), parseInt(answers.topSpeed), wheels, 0 // Add a default towing capacity for motorbikes
            ); // TODO: push the motorbike to the vehicles array
            _this.vehicles.push(motorbike);
            console.log('Motorbike created:', motorbike);
            // set the selectedVehicleVin to the vin of the motorbike
            _this.selectedVehicleVin = motorbike.vin;
            // perform actions on the motorbike
            _this.performActions();
        });
    };
    return Cli;
}());
exports.Cli = Cli;
// method to find a vehicle to tow
var FindVehicleToTow = /** @class */ (function () {
    function FindVehicleToTow(vehicles, selectedVehicleVin) {
        this.vehicles = vehicles;
        this.selectedVehicleVin = selectedVehicleVin; // Assign in the constructor
    }
    FindVehicleToTow.prototype.performActions = function () {
        console.log('Returning to actions menu...');
    };
    FindVehicleToTow.prototype.find_VehicleToTow = function () {
        var _this = this;
        inquirer_1.default
            .prompt([
            {
                type: 'list',
                name: 'vehicleToTow',
                message: 'Select a vehicle to tow:',
                choices: this.vehicles.map(function (vehicle) { return ({
                    name: "".concat(vehicle.vin, " -- ").concat(vehicle.make, " ").concat(vehicle.model),
                    value: vehicle.vin,
                }); }),
            },
        ])
            .then(function (answers) {
            var vehicleToTowVin = answers.vehicleToTow; // Get the VIN from answers
            var vehicleToTow = _this.vehicles.find(function (v) { return v.vin === vehicleToTowVin; });
            var selectedVehicle = _this.vehicles.find(function (v) { return v.vin === _this.selectedVehicleVin; });
            // Check if the selected vehicle is a Truck
            if (selectedVehicle instanceof Truck_1.Truck) {
                if (vehicleToTow) {
                    // Check if the truck is trying to tow itself
                    if (selectedVehicle.vin === vehicleToTow.vin) {
                        console.log('A truck cannot tow itself.');
                    }
                    else {
                        console.log("Towing ".concat(vehicleToTow.make, " ").concat(vehicleToTow.model, "..."));
                    }
                }
                else {
                    console.log('No valid vehicle selected to tow.');
                }
            }
            else {
                console.log('Only trucks can tow.');
            }
            _this.performActions(); // Return to actions
        });
    };
    return FindVehicleToTow;
}());
// method to perform actions on a vehicle
performActions();
void {
    // First, get the selected vehicle
    const: selectedVehicle = this.FindSelectedVehicle() // Get the selected vehicle
    , // Get the selected vehicle
    if: function (, selectedVehicle) {
        console.error("No vehicle selected.");
        return; // Exit the method early if no vehicle is selected
    },
    inquirer: inquirer_1.default,
    : 
        .prompt([
        {
            type: 'list',
            name: 'action',
            message: 'Select an action',
            choices: [
                'Print details',
                'Start vehicle',
                'Accelerate 5 MPH',
                'Decelerate 5 MPH',
                'Stop vehicle',
                'Turn right',
                'Turn left',
                'Reverse',
                'Select or create another vehicle',
                'Exit',
            ],
        },
    ])
        .then(function (answers) {
        switch (answers.action) {
            case 'Print details':
                selectedVehicle.printDetails();
                break;
            case 'Start vehicle':
                selectedVehicle.start();
                break;
            case 'Accelerate 5 MPH':
                selectedVehicle.accelerate(5);
                break;
            case 'Decelerate 5 MPH':
                selectedVehicle.decelerate(5);
                break;
            case 'Stop vehicle':
                selectedVehicle.stop();
                break;
            case 'Turn right':
                selectedVehicle.turn('right');
                break;
            case 'Turn left':
                selectedVehicle.turn('left');
                break;
            case 'Reverse':
                selectedVehicle.reverse();
                break;
            case 'Select or create another vehicle':
                _this.selectOrCreateVehicle();
                break;
            case 'Tow another vehicle':
                _this.find_VehicleToTow(); // Call the tow method
                break;
            default:
                console.log('Exiting...');
                break;
        }
    })
};
// method to start the cli
startCli();
void {
    inquirer: inquirer_1.default,
    : 
        .prompt([
        {
            type: 'list',
            name: 'CreateOrSelect',
            message: 'Would you like to create a new vehicle or perform an action on an existing vehicle?',
            choices: ['Create a new vehicle', 'Select an existing vehicle'],
        },
    ])
        .then(function (answers) {
        // check if the user wants to create a new vehicle or select an existing vehicle
        if (answers.CreateOrSelect === 'Create a new vehicle') {
            _this.createVehicle();
        }
        else {
            _this.chooseVehicle();
        }
    })
};
// export the Cli class
function createMotorbike() {
    throw new Error("Function not implemented.");
}
var cli = new Cli([]);
cli.startCli();
function startCli() {
    throw new Error("Function not implemented.");
}
function find_VehicleToTow() {
    throw new Error("Function not implemented.");
}
function performActions() {
    throw new Error("Function not implemented.");
}

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cli = void 0;
// importing classes from other files
const Motorbike_1 = require("./Motorbike");
const Car_1 = require("./Car");
const Truck_1 = require("./Truck");
const Wheel_1 = require("./Wheel");
const inquirer_1 = __importDefault(require("inquirer"));
// define the Cli class
class Cli {
    constructor(vehicles) {
        this.exit = false;
        this.vehicles = vehicles;
    }
    // static method to generate a vin
    static generateVin() {
        // return a random string
        return (Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15));
    }
    // method to create a vehicle
    createVehicle() {
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
            .then((answers) => {
            switch (answers.vehicleType) {
                case 'Car':
                    this.createCar();
                    break;
                case 'Truck':
                    this.createTruck();
                    break;
                case 'Motorbike':
                    this.createMotorbike();
                    break;
                default:
                    console.log('Invalid selection');
            }
        });
    }
    // method to choose a vehicle from existing vehicles
    chooseVehicle() {
        var _a;
        inquirer_1.default
            .prompt([
            {
                type: 'list',
                name: 'selectedVehicleVin',
                message: 'Select a vehicle to perform an action on',
                choices: (_a = this.vehicles) === null || _a === void 0 ? void 0 : _a.map((vehicle) => {
                    return {
                        name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
                        value: vehicle.vin,
                    };
                }),
            },
        ])
            .then((answers) => {
            // set the selectedVehicleVin to the vin of the selected vehicle
            this.selectedVehicleVin = answers.selectedVehicleVin;
            // perform actions on the selected vehicle
            if (this.vehicles) {
                // this.performActions();
            }
        });
    }
    // Removed duplicate performActions method
    // method to perform actions on a vehicle
    performActions() {
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
            .then((answers) => {
            // perform the selected action
            if (answers.action === 'Print details') {
                // find the selected vehicle and print its details
                for (let i = 0; i < this.vehicles.length; i++) {
                    if (this.vehicles[i] && this.vehicles[i].vin === this.selectedVehicleVin) {
                        this.vehicles[i].printDetails();
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
                            .then((answers) => {
                            // check if the user wants to create a new vehicle or select an existing vehicle
                            if (answers.CreateOrSelect === 'Create a new vehicle') {
                                this.createVehicle();
                            }
                            else {
                                this.chooseVehicle();
                            }
                        })
                    };
                }
            }
            else if (answers.action === 'Start vehicle') {
                // find the selected vehicle and start it
                for (let i = 0; i < this.vehicles.length; i++) {
                    if (this.vehicles[i].vin === this.selectedVehicleVin) {
                        this.vehicles[i].start();
                    }
                }
            }
            else if (answers.action === 'Accelerate 5 MPH') {
                // find the selected vehicle and accelerate it by 5 MPH
                for (let i = 0; i < this.vehicles.length; i++) {
                    if (this.vehicles[i].vin === this.selectedVehicleVin) {
                        this.vehicles[i].accelerate(5);
                    }
                }
            }
            else if (answers.action === 'Decelerate 5 MPH') {
                // find the selected vehicle and decelerate it by 5 MPH
                for (let i = 0; i < this.vehicles.length; i++) {
                    if (this.vehicles[i].vin === this.selectedVehicleVin) {
                        this.vehicles[i].decelerate(5);
                    }
                }
            }
            else if (answers.action === 'Stop vehicle') {
                // find the selected vehicle and stop it
                for (let i = 0; i < this.vehicles.length; i++) {
                    if (this.vehicles[i].vin === this.selectedVehicleVin) {
                        this.vehicles[i].stop();
                    }
                }
            }
            else if (answers.action === 'Turn right') {
                // find the selected vehicle and turn it right
                for (let i = 0; i < this.vehicles.length; i++) {
                    if (this.vehicles[i].vin === this.selectedVehicleVin) {
                        this.vehicles[i].turn('right');
                    }
                }
            }
            else if (answers.action === 'Turn left') {
                // find the selected vehicle and turn it left
                for (let i = 0; i < this.vehicles.length; i++) {
                    if (this.vehicles[i].vin === this.selectedVehicleVin) {
                        this.vehicles[i].turn('left');
                    }
                }
            }
            else if (answers.action === 'Reverse') {
                // find the selected vehicle and reverse it
                for (let i = 0; i < this.vehicles.length; i++) {
                    if (this.vehicles[i].vin === this.selectedVehicleVin) {
                        this.vehicles[i].reverse();
                    }
                }
            }
            // TODO: add statements to perform the tow action only if the selected vehicle is a truck. Call the findVehicleToTow method to find a vehicle to tow and pass the selected truck as an argument. After calling the findVehicleToTow method, you will need to return to avoid instantly calling the performActions method again since findVehicleToTow is asynchronous.
            // TODO: add statements to perform the wheelie action only if the selected vehicle is a motorbike
            else if (answers.action === 'Select or create another vehicle') {
                // start the cli to return to the initial prompt if the user wants to select or create another vehicle
                this.startCli();
                return;
            }
            else {
                // exit the cli if the user selects exit
                if (this) {
                    this.exit = true;
                }
            }
            if (!this.exit) {
                // if the user does not want to exit, perform actions on the selected vehicle
                // this.performActions();
            }
        });
    }
    // method to create a car
    createCar() {
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
            .then((answers) => {
            const wheels = answers.wheels.split(',').map((wheel) => new Wheel_1.Wheel(parseInt(wheel.trim()), 'DefaultBrand'));
            const Car = new Car_1.car(Cli.generateVin(), answers.color, answers.make, answers.model, parseInt(answers.year), parseInt(answers.weight), parseInt(answers.topSpeed), wheels);
            // push the car to the vehicles array
            this.vehicles.push(Car);
            console.log('Car created:', Car_1.car);
            // set the selectedVehicleVin to the vin of the car
            this.selectedVehicleVin = Car_1.car.vin;
            // perform actions on the car
            this.performActions();
        });
    }
    // method to create a truck
    createTruck() {
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
            .then((answers) => {
            // Use the answers object to pass the required properties to the Truck constructor
            const wheels = answers.wheels.split(',').map((wheel) => new Wheel_1.Wheel(parseInt(wheel.trim()), 'DefaultBrand'));
            const truck = new Truck_1.Truck(Cli.generateVin(), answers.color, answers.make, answers.model, parseInt(answers.year), parseInt(answers.weight), parseInt(answers.topSpeed), wheels, parseInt(answers.towingCapacity));
            // push the truck to the vehicles array
            this.vehicles.push(truck);
            console.log('Truck created:', truck);
            //selectedVehicleVin to the vin of the truck 
            this.selectedVehicleVin = truck.vin;
            // perform actions on the car
            this.performActions();
        });
    }
    // method to create a motorbike
    createMotorbike() {
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
            .then((answers) => {
            //Use the answers object to pass the required properties to the Motorbike constructor
            const wheels = [
                new Wheel_1.Wheel(parseInt(answers.frontWheelDiameter), answers.frontWheelBrand),
                new Wheel_1.Wheel(parseInt(answers.rearWheelDiameter), answers.rearWheelBrand)
            ];
            const motorbike = new Motorbike_1.Motorbike(Cli.generateVin(), answers.color, answers.make, answers.model, parseInt(answers.year), parseInt(answers.weight), parseInt(answers.topSpeed), wheels, 0 // Add a default towing capacity for motorbikes
            ); // TODO: push the motorbike to the vehicles array
            this.vehicles.push(motorbike);
            console.log('Motorbike created:', motorbike);
            // set the selectedVehicleVin to the vin of the motorbike
            this.selectedVehicleVin = motorbike.vin;
            // perform actions on the motorbike
            this.performActions();
        });
    }
}
exports.Cli = Cli;
// method to find a vehicle to tow
class FindVehicleToTow {
    constructor(vehicles, selectedVehicleVin) {
        this.vehicles = vehicles;
        this.selectedVehicleVin = selectedVehicleVin; // Assign in the constructor
    }
    performActions() {
        console.log('Returning to actions menu...');
    }
    find_VehicleToTow() {
        inquirer_1.default
            .prompt([
            {
                type: 'list',
                name: 'vehicleToTow',
                message: 'Select a vehicle to tow:',
                choices: this.vehicles.map((vehicle) => ({
                    name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
                    value: vehicle.vin,
                })),
            },
        ])
            .then((answers) => {
            const vehicleToTowVin = answers.vehicleToTow; // Get the VIN from answers
            const vehicleToTow = this.vehicles.find((v) => v.vin === vehicleToTowVin);
            const selectedVehicle = this.vehicles.find((v) => v.vin === this.selectedVehicleVin);
            // Check if the selected vehicle is a Truck
            if (selectedVehicle instanceof Truck_1.Truck) {
                if (vehicleToTow) {
                    // Check if the truck is trying to tow itself
                    if (selectedVehicle.vin === vehicleToTow.vin) {
                        console.log('A truck cannot tow itself.');
                    }
                    else {
                        console.log(`Towing ${vehicleToTow.make} ${vehicleToTow.model}...`);
                    }
                }
                else {
                    console.log('No valid vehicle selected to tow.');
                }
            }
            else {
                console.log('Only trucks can tow.');
            }
            this.performActions(); // Return to actions
        });
    }
}
// method to perform actions on a vehicle
performActions();
void {
    // First, get the selected vehicle
    const: selectedVehicle = this.FindSelectedVehicle() // Get the selected vehicle
    , // Get the selected vehicle
    if(, selectedVehicle) {
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
        .then((answers) => {
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
                this.selectOrCreateVehicle();
                break;
            case 'Tow another vehicle':
                this.find_VehicleToTow(); // Call the tow method
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
        .then((answers) => {
        // check if the user wants to create a new vehicle or select an existing vehicle
        if (answers.CreateOrSelect === 'Create a new vehicle') {
            this.createVehicle();
        }
        else {
            this.chooseVehicle();
        }
    })
};
// export the Cli class
function createMotorbike() {
    throw new Error("Function not implemented.");
}
const cli = new Cli([]);
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

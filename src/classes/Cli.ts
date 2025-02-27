// importing classes from other files
import { Motorbike } from "./Motorbike.js";
import { Car } from "./Car.js";
import { Truck } from "./Truck.js";
import { Wheel } from "./Wheel.js";
import { Vehicle } from "./Vehicle.js";
import inquirer from 'inquirer';

// define the Cli class
  class Cli {
  [x: string]: any;
  vehicles: (Car | Truck | Motorbike)[];
  selectedVehicleVin: string | undefined;
  exit: boolean = false;
  constructor(vehicles: (Car | Truck | Motorbike)[]) {
    this.vehicles = vehicles;
  }
  // static method to generate a vin
  static generateVin(): string {
    // return a random string
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }
  // method to choose a vehicle from existing vehicles
  chooseVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'selectedVehicleVin',
          message: 'Select a vehicle to perform an action on',
          choices: this.vehicles?.map((vehicle) => {
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
  // method to create a vehicle
  createVehicle(): void {
    inquirer
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
  // method to create a car
createCar(): void {
  inquirer
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
    .then((answers: any) => {
      const wheels = answers.wheels.split(',').map((wheel: string) => new Wheel(parseInt(wheel.trim()), 'DefaultBrand'));
      const car = new Car(
        Cli.generateVin(),
        answers.color,
        answers.make,
        answers.model,
        parseInt(answers.year),
        parseInt(answers.weight),
        parseInt(answers.topSpeed),
        wheels,
        // Add a default towing capacity for cars
      );

      // push the car to the vehicles array
      this.vehicles.push(car);
      console.log('Car created:', car);
      // set the selectedVehicleVin to the vin of the car
      this.selectedVehicleVin = car.vin;
      // perform actions on the car
      this.performActions();
    });
  }
    // method to create a truck
createTruck(): void {
  inquirer
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
    .then((answers: any) => {
      // Use the answers object to pass the required properties to the Truck constructor
      const wheels = answers.wheels.split(',').map((wheel: string) => new Wheel(parseInt(wheel.trim()), 'DefaultBrand'));
      const truck = new Truck(
        Cli.generateVin(),
        answers.color,
        answers.make,
        answers.model,
        parseInt(answers.year),
        parseInt(answers.weight),
        parseInt(answers.topSpeed),
        wheels,
        parseInt(answers.towingCapacity)
      );

      // push the truck to the vehicles array
      this.vehicles.push(truck);
      console.log('Truck created:', truck);

      //selectedVehicleVin to the vin of the truck 
      this.selectedVehicleVin = truck.vin;

      // perform actions on the car
      this.performActions();
    })
};
// method to create a motorbike
createMotorbike(): void {
  inquirer
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
    .then((answers: any) => {
      //Use the answers object to pass the required properties to the Motorbike constructor
      const wheels = [
        new Wheel(parseInt(answers.frontWheelDiameter), answers.frontWheelBrand),
        new Wheel(parseInt(answers.rearWheelDiameter), answers.rearWheelBrand)
      ];
      const motorbike = new Motorbike(
        Cli.generateVin(),
        answers.color,
        answers.make,
        answers.model,
        parseInt(answers.year),
        parseInt(answers.weight),
        parseInt(answers.topSpeed),
        wheels,
        0 // Add a default towing capacity for motorbikes
      ); // TODO: push the motorbike to the vehicles array
      this.vehicles.push(motorbike);
      console.log('Motorbike created:', motorbike);
      // set the selectedVehicleVin to the vin of the motorbike
      this.selectedVehicleVin = motorbike.vin;
      // perform actions on the motorbike
      this.performActions();
    })
}
// method to find a vehicle to tow
findVehicleToTow(): void {
  inquirer
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
      const vehicleToTowVin: string = answers.vehicleToTow; // Get the VIN from answers
      const vehicleToTow = this.vehicles.find((v) => v.vin === vehicleToTowVin);
      const selectedVehicle = this.vehicles.find((v) => v.vin === this.selectedVehicleVin);
      // Check if the selected vehicle is a Truck
      if (selectedVehicle instanceof Truck) {
        if (vehicleToTow) {
          // Check if the truck is trying to tow itself
          if (selectedVehicle.vin === vehicleToTow.vin) {
            console.log('A truck cannot tow itself.');
          } else {
            console.log(`Towing ${vehicleToTow.make} ${vehicleToTow.model}...`);
          }
        } else {
          console.log('No valid vehicle selected to tow.');
        }
      } else {
        console.log('Only trucks can tow.');
      }
      this.performActions(); // Return to actions
    })
  };
// method to perform actions on a vehicle
  performActions(): void {
    inquirer
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
          }
        }else if (answers.action === 'Start vehicle') {
        // find the selected vehicle and start it
        for (let i = 0; i < this.vehicles.length; i++) {
          if (this.vehicles[i].vin === this.selectedVehicleVin) {
            this.vehicles[i].start();
          }
        }
      } else if (answers.action === 'Accelerate 5 MPH') {
        // find the selected vehicle and accelerate it by 5 MPH
        for (let i = 0; i < this.vehicles.length; i++) {
          if (this.vehicles[i].vin === this.selectedVehicleVin) {
            this.vehicles[i].accelerate(5);
          }
        }
      } else if (answers.action === 'Decelerate 5 MPH') {
        // find the selected vehicle and decelerate it by 5 MPH
        for (let i = 0; i < this.vehicles.length; i++) {
          if (this.vehicles[i].vin === this.selectedVehicleVin) {
            this.vehicles[i].decelerate(5);
          }
        }
      } else if (answers.action === 'Stop vehicle') {
        // find the selected vehicle and stop it
        for (let i = 0; i < this.vehicles.length; i++) {
          if (this.vehicles[i].vin === this.selectedVehicleVin) {
            this.vehicles[i].stop();
          }
        }
      } else if (answers.action === 'Turn right') {
        // find the selected vehicle and turn it right
        for (let i = 0; i < this.vehicles.length; i++) {
          if (this.vehicles[i].vin === this.selectedVehicleVin) {
            this.vehicles[i].turn('right');
          }
        }
      } else if (answers.action === 'Turn left') {
        // find the selected vehicle and turn it left
        for (let i = 0; i < this.vehicles.length; i++) {
          if (this.vehicles[i].vin === this.selectedVehicleVin) {
            this.vehicles[i].turn('left');
          }
        }
      } else if (answers.action === 'Reverse') {
        // find the selected vehicle and reverse it
        for (let i = 0; i < this.vehicles.length; i++) {
          if (this.vehicles[i].vin === this.selectedVehicleVin) {
            this.vehicles[i].reverse();
          }
        }
      }
     
      // TODO: add statements to perform the wheelie action only if the selected vehicle is a motorbike
      else if (answers.action === 'Select or create another vehicle') {
        // start the cli to return to the initial prompt if the user wants to select or create another vehicle
        this.startCli();
        return;
      } else {
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
  // method to start the cli
  startCli(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'CreateOrSelect',
          message:
            'Would you like to create a new vehicle or perform an action on an existing vehicle?',
          choices: ['Create a new vehicle', 'Select an existing vehicle'],
        },
      ])
      .then((answers: any) => {
        // check if the user wants to create a new vehicle or select an existing vehicle
        if (answers.CreateOrSelect === 'Create a new vehicle') {
          this.createVehicle();
        } else {
          this.chooseVehicle();
        }
      })
  }
};
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

// export the Cli class
export default Cli;
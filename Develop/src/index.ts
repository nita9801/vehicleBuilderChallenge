// import classes
import Truck from 
import Car from 
import Motorbike from 
import Wheel from 
import Cli from 


// create an array of vehicles
const vehicles = [];


// TODO: uncomment once trucks are implemented
 const truck1 = new Truck(Cli.generateVin(),"red", "Ford", "F-150", 2021, 5000, 120, [], 10000);


// will use default wheels
const car1 = new Car(
  Cli.generateVin(),
  'blue',
  'Toyota',
 nt once trucks are implemented
// vehicles.push(truck1);
vehicles.push(car1);
// TODO: uncomment once motorbikes are implemented
// vehicles.push(motorbike1);


// create a new instance of the Cli class
const cli = new Cli(vehicles);


// start the cli
cli.startCli();

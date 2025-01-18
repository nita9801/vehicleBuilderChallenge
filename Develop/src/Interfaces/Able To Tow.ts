// import the classes
import { Truck } from '../Classes/Truck';
import { Motorbike } from '../Classes/Motorbike';
import { Car } from '../Classes/car';

// Define the interface
interface AbleToTow {
  // Declare the properties
  towingCapacity: number;
  // Tow method takes a Truck or a Motorbike or a Car as an argument
  tow(vehicle: Truck | Motorbike | Car): void;
}

// export the interface
export default AbleToTow;

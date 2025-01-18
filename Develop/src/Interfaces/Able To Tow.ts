// import the classes
import { Truck } from "../classes/Truck";
import { Motorbike } from "../classes/Motorbike";
import { Car } from '../Classes/car';

// define the interface
interface AbleToTow {
    // declare the properties
    towingCapacity: number;
    // tow method takes a Truck or a motorbike or a car as an argument
    tow(vehicle: Truck | Motorbike | Car): void;
}

// export the interface
export default AbleToTow;

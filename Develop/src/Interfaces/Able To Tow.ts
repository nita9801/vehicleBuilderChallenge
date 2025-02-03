// import the classes
import { Truck }  from '../classes/Truck';
import { Motorbike } from '../classes/Motorbike';
import { car } from '../classes/Car';


// define the interface
export interface AbleToTow {
    // declare the properties
    towingCapacity: number;
    // tow method takes a truck or a motorbike or a car as an argument
    tow(vehicle: Truck | Motorbike | car): void;
}

// export the interface
export default AbleToTow;

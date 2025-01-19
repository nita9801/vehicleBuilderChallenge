// import the classes
import { Truck }  from "./Truck";
import { Motorbike } from "./Motorbike";
import { car } from "./car";

// define the interface
export interface AbleToTow {
    // declare the properties
    towingCapacity: number;
    // tow method takes a truck or a motorbike or a car as an argument
    tow(vehicle: Truck | Motorbike | car): void;
}

// export the interface
export default AbleToTow;

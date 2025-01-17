// definition of the Driveable interface
 export interface Driveable {
 
  // declare the methods
  start(): void;
  accelerate(change: number): void;
  decelerate(change: number): void;
  stop(): void;
  turn(direction: string): void;
  reverse(): void;
  
  // declare the properties
  started: boolean;
  currentSpeed: number;
}
 

  // export the Driveable interface
export default Driveable;

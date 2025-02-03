"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
// Declare properties of the Vehicle class
class Vehicle {
    // Constructor for the Vehicle class
    constructor(vin, color, make, model, year, weight, topSpeed) {
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.started = false;
        this.currentSpeed = 0;
    }
    // Method to start the vehicle
    start() {
        this.started = true;
        console.log('Vehicle started');
    }
    // Method stop the vehicle
    stop() {
        this.started = false;
        this.currentSpeed = 0;
        console.log('Vehicle stopped');
    }
    // Method turn the vehicle
    turn(direction) {
        console.log(`Vehicle turned ${direction}`);
    }
    // Method reverse the vehicle
    reverse() {
        console.log('Vehicle reversed');
    }
    // Method to print vehicle details
    printDetails() {
        console.log(`Vehicle started: ${this.started}`);
        console.log(`Vehicle current speed: ${this.currentSpeed} mph`);
    }
    // Method to accelerate the vehicle
    accelerate(change) {
        // Check if the vehicle is started
        if (this.started) {
            this.currentSpeed += change;
            console.log(`Vehicle accelerated to ${this.currentSpeed} mph`);
        }
        else {
            console.log('Start the vehicle first');
        }
    }
    // Method to decelerate the vehicle
    decelerate(change) {
        // Check if the vehicle is started
        if (this.started) {
            this.currentSpeed -= change;
            if (this.currentSpeed < 0) {
                this.currentSpeed = 0;
            }
            console.log(`Vehicle decelerated to ${this.currentSpeed} mph`);
        }
        else {
            console.log('Start the vehicle first');
        }
    }
}
exports.Vehicle = Vehicle;

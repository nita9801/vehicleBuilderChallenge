"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wheel = void 0;
// Wheel class that defines the properties of a wheel
class Wheel {
    // Constructor for the Wheel class
    constructor(size = 18, type = "GoodYear") {
        this.size = size;
        this.brand = type;
    }
    // Getter methods for the properties of the Wheel class
    get getDiameter() {
        return this.getDiameter;
    }
    // Setter method for the diameter property
    get getTireBrand() {
        return this.getTireBrand;
    }
}
exports.Wheel = Wheel;
// Export the Wheel class
exports.default = Wheel;

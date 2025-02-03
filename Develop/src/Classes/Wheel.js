"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wheel = void 0;
// Wheel class that defines the properties of a wheel
var Wheel = /** @class */ (function () {
    // Constructor for the Wheel class
    function Wheel(size, type) {
        if (size === void 0) { size = 18; }
        if (type === void 0) { type = "GoodYear"; }
        this.size = size;
        this.brand = type;
    }
    Object.defineProperty(Wheel.prototype, "getDiameter", {
        // Getter methods for the properties of the Wheel class
        get: function () {
            return this.getDiameter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wheel.prototype, "getTireBrand", {
        // Setter method for the diameter property
        get: function () {
            return this.getTireBrand;
        },
        enumerable: false,
        configurable: true
    });
    return Wheel;
}());
exports.Wheel = Wheel;
// Export the Wheel class
exports.default = Wheel;

// Wheel class that defines the properties of a wheel
export class Wheel {
  // Declare properties of the Wheel class using private access modifier
  private size: number;
  private brand: string;

  // Constructor for the Wheel class
  constructor(size: number = 18, type: string = "GoodYear") {
    this.size = size;
    this.brand = type;
  }

  // Getter methods for the properties of the Wheel class
  get getDiameter(): number {
    return this.getDiameter;
  }

  // Setter method for the diameter property
  get getTireBrand(): string {
    return this.getTireBrand;
  }
}

// Export the Wheel class
export default Wheel;

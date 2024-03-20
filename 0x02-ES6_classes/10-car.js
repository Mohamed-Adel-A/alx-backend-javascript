export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const clonedCar = Object.create(this.constructor.prototype);
    return Object.assign(clonedCar, this);
  }
}

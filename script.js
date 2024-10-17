function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Adding getMakeModel method to Car's prototype
Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;
}
// SportsCar constructor function
function SportsCar(make, model, topSpeed) {
    // Inheriting Car's properties (call Car constructor with SportsCar's this context)
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}
// Inheriting Car's prototype in SportsCar
SportsCar.prototype = Object.create(Car.prototype);

// Set the constructor of SportsCar back to itself (otherwise it would point to Car)
SportsCar.prototype.constructor = SportsCar;

// Adding getTopSpeed method to SportsCar's prototype
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;

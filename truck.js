const Vehicle = require('./vehicle.js');

module.exports = class Truck extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = `truck`;
    }

    displayInfo() {
        super.displayInfo();
        console.log("I'm a truck");
    }

    static carType(a) {
        return a.type === `truck`;
    }

    transportContainer() {
        console.log(`I am starting transporting heavy container`);
    }
}
const Truck = require('./truck.js'),
  Car = require('./car.js');


let bmw = new Car("X 5", 2012, 300);

let pickup = new Truck("RAM", 2017, 150);

bmw.displayInfo();
bmw.transportPeople();
pickup.displayInfo();
pickup.transportContainer();

console.log(Truck.carType(bmw));

pickup.displayInfo();

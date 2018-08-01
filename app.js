console.log('Task 1');

let array = ['a', 'b', 'c', 'd'];
let lastSymbol = array.slice(-1);
console.log(lastSymbol);


console.log('Task 2');

let numb = [1, 'one', 'two', 3, 4];
console.log(numb.join());


console.log('Task 3');

let arr1 = [1, 2, 3, 4];
let arr2 = [10, 20, 30, 40];
let results = [];

for (let i = 0; i < arr1.length; i++) {
  results[i] = arr1[i] + arr2[i];
}

console.log(results);

console.log('Task 4');

let rectangle = {
  width: 4,
  height: 5,
  getArea: function () {
    let area;
    
    area = this.width * this.height;

    console.log(area);
  },

  getPerimetr: function () {
    let perimetr;
    
    perimetr = (this.width + this.height) * 2;

    console.log(perimetr);
  }
}

rectangle.getArea();
rectangle.getPerimetr();


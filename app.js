/*console.log("\nNice work! Your first application have been launched.");
console.log("Now, I need to know your name, type it below: ");

let stdin = process.openStdin();

stdin.addListener("data", (txt) => {
    if(txt.toString().trim() === "quit") {
        console.log("\nHave a nice JS trip! Bye-bye");
        stdin.end();
    } else {
        console.log(`\nHi ${txt.toString().trim()}, nice to meet you at Eleks QA Academy 2018. I am sure you'll become great in your job.`);
        console.log(`${txt.toString().trim()}, to quit this application you can use 'Ctrl + C' keys, or type 'quit' and hit 'Enter'`); 
    }   
  }); */

  console.log('Task 1');

  let int1 = 1;
  let int2 = 100;
  console.log(int1 + int2);

  console.log('Task 2');

  let str = 'Test_';
  let givenStr = 1;
  console.log(str + givenStr);

  console.log('Task 3');

let firstName = 'Tania';
let lastName = 'Koziuk'; 
let age = 26;
console.log(firstName + ' ' + lastName + ' age: ' + age);

console.log('Task 4');

let a;
a = 5;
console.log(a > 100);

console.log('Task 5');

let arr = [31, 20, 30];
console.log(arr[0] > arr[1] && arr[0] > arr[2]);

console.log('Task 6');

let num1 = 5;
let num2 = 45;
if (num1 == 50 || num2 == 50 || num1 + num2 == 50) {
    console.log('true')
}
else {
    console.log('false')
}

console.log('Task 7');

let num = 21;
if(num % 3 == 0){
    console.log('number is a multiple of 3')
}
if (num % 7 == 0){
    console.log('number is a multiple of 7')
}

/* /*let url = "https://eleks.com/services/quality-assurance-and-testing-services/";
let resultArr = [];

resultArr.push(url.slice(0, url.indexOf("://")));
//console.log(url.split("/"));

for(let i = 2; i < 5; i++)
    resultArr.push(url.split("/") [i]);

console.log(`${resultArr}`);*/

let circle = {
    radius: 3,
    type: "circle"
};

let triangle = {
    sideA: 4,
    sideB: 5,
    type: "triangle"
};

let square = {
    sideS: 6,
    type: "square"
};

function calcArea(figure) {
    switch (figure.type) {
        case "circle":
            return (Math.PI * Math.pow(figure.radius, 2)).toFixed(2);
            break;
        case "triangle":
            return 0.5 * figure.sideA * figure.sideB;
            break;
        case "square":
            return Math.pow(figure.sideS, 2);
            break;
        default:
            return "Wrong figure";

    }
}

console.log(calcArea(circle));
console.log(calcArea(triangle));
console.log(calcArea(square)); */

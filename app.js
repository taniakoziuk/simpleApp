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
  }); 

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
}*/

console.log('Task 1');

let string = 'abcdefg';
let s1 = string.includes('j');
console.log(s1);

console.log('Task 2');

let string1 = '';
function isEmptyString(str) {
     console.log(!!str);
  }

  isEmptyString(string1);

  console.log('Task 3');

  let firstN = 'Tania';
  let lastN = 'Koziuk';

      let abbr = firstN.chartAt(0);
      let abbr1 = lastN.chartAt(0);
      
console.log(abbr + abbr1);

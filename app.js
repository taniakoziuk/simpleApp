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
let s1 = string.includes('d');
console.log(s1);

console.log('Task 2');

let string1 = '';
function isEmptyString(str) {
     console.log(!!str);
  }

  isEmptyString(string1);

  console.log('Task 3');

let fullName = "tetiana Koziuk";
let upper = fullName.toUpperCase();
let abbrev = [];
let splitName = upper.split(" ");
splitName.forEach(function(element) {
  let i = element.slice(0, 1);
  abbrev.push(i);
})

console.log(`${abbrev[0]}` + `. ` + `${abbrev[1]}` + `.`);


  console.log('Task 4');

function integers(a, b) {
      if (a != b)
    console.log("The larger number is " + Math.max(a, b));
  
      else if (a = b) 
   console.log("Integers are equal.")
}

integers(10, 3);


console.log("Task 5");

let a= 0;
let b=-1;
let c= 4;
if (a > b && a > c)
{
        if (b > c)
        {
            console.log(a + ", " + b + ", " + c);
        }
        else
        {
            console.log(a + ", " + c + ", " + b);
        }
}
else if (b > c && b > c)
{
        if (a > c)
        {
             console.log(b + ", " + a + ", " + c);
        }
        else
        {
             console.log(b + ", " + c + ", " + a);
        }
}
else if (c > a && c > b)
{
        if (a > b)
        {
            console.log(c + ", " + a + ", " + b);
        }
        else
        {
            console.log(c + ", " + b + ", " + a);
        }
}        


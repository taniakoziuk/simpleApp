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


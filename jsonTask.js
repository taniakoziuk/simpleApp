let student = {
    "name": "Tetiana",
    "surname": "Koziuk",
    "rate": "12"
}

JSON.stringify(student);

console.log("student rate: " + `${student.rate}`);

let randomstring = require("randomstring");

randomstring.generate({
    length: 12,
    charset: 'alphabetic'
});

let a = Math.floor(Math.random() * 100);

console.log("random integer: " + `${a}`);

// File System task

var http = require('http');
var fs = require('fs');

fs.open('createdFile.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});

fs.appendFile('createdFile.txt', ' Added text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
});

fs.writeFile('createdFile.txt', 'Replaced text!', function (err) {
    if (err) throw err;
    console.log('Replaced!');
  });

fs.readFile('createdFile.txt', 'utf8', function (err, data) {
    if (err) throw err;
    console.log(data);
});
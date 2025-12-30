// Question 1: Variable Declarations and Initialization

var productName = "Laptop";
var price = 999.99;
var inStock = true;
console.log(productName, price, inStock);


// Question 2: Mathematical Operations

console.log(27 % 4);
console.log(12 ** 2);
var num1 = 8;
num1++;
console.log(num1);
var num2 = 15;
num2 -= 2;
console.log(num2);


// Question 3: String Concatenation and Case Conversion

var firstName = "alex";
var lastName = "SMITH";
var fullName = firstName + " " + lastName;
var properCase = fullName.charAt(0).toUpperCase() + fullName.slice(1).toLowerCase();
console.log(properCase);
console.log(properCase.length);


// Question 4: if-else Conditional Logic

var temperature = 25;
if (temperature > 30) {
    console.log("Hot day");
} else if (temperature >= 20 && temperature <= 30) {
    console.log("Pleasant day");
} else {
    console.log("Cold day");
}


// Question 5: Comparison Operators

console.log(15 === "15");
console.log(20 > 15 && 20 < 25);
console.log(10 != 10 || 5 > 3);


// Question 6: Array Manipulation - Basics

var colors = ["red", "green", "blue"];
colors.push("yellow");
colors.shift();
colors.splice(1, 0, "purple");
console.log(colors);
console.log(colors.length);


// Question 7: Array Manipulation - splice()

var fruits = ["apple", "banana", "cherry", "date", "elderberry"];
fruits.splice(2, 1);
fruits.splice(2, 1, "dragonfruit");
var middleArray = fruits.slice(0, 3);
console.log(fruits);
console.log(middleArray);


// Question 8: for Loop - Number Sequence

var totalSum = 0;
for (var i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    if (i > 8) {
        break;
    }
    console.log(i);
    totalSum = totalSum + i;
}
console.log("Sum: " + totalSum);


// Question 9: Nested for Loop - Pattern

for (var i = 1; i <= 5; i++) {
    var stars = "";
    for (var j = 1; j <= i; j++) {
        stars = stars + "*";
    }
    console.log(stars);
}


// Question 10: String Methods - Search and Extract

var text = "The quick brown fox jumps over the lazy dog";
console.log(text.indexOf("fox"));
console.log(text.slice(10, 19));
console.log(text.indexOf("dog"));
console.log(text.charAt(10));


// Question 11: String Replacement

var sentence = "I love JavaScript and JavaScript is awesome";
console.log(sentence.replace("JavaScript", "coding"));
console.log(sentence.split("JavaScript").join("JS"));
console.log(sentence.replace("awesome", "AWESOME"));


// Question 12: Number Rounding and Formatting

var num = 123.456789;
console.log(num.toFixed(2));
console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(num.toFixed(4));


// Question 13: Random Number Generation

console.log(Math.floor(Math.random() * 100) + 1);
console.log(Number(Math.random().toFixed(3)));
console.log(Math.floor(Math.random() * (75 - 50 + 1)) + 50);


// Question 14: Type Conversion

console.log(Number("123"));
console.log(parseFloat("45.67"));
var someNum = 789;
console.log(someNum.toString());
var boolVal = true;
console.log(typeof boolVal);


// Question 15: Date and Time Operations

var today = new Date();
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getHours());
var dateStr = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
console.log(dateStr);
var genrDate = new Date(2024, 11, 25);
console.log(genrDate);


// Question 16: Function - Basic Calculator

function sum(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}
console.log(sum(2, 3));
console.log(sub(4, 2));
console.log(mul(4, 4));
console.log(div(2, 0));

// Question 17: Function - Local vs Global Variables

var globalCounter = 0;
function incrementCounter() {
    var globalCounter = 0;
    globalCounter++;
    window.globalCounter++;
    console.log("Local Counter: " + globalCounter);
}
incrementCounter();
incrementCounter();
console.log("Global Counter: " + globalCounter);


// Question 18: switch Statement - Day of Week

function getDay(num) {
    switch (num) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default: return "Invalid Number";
    }
}


// Question 19: while Loop - Countdown

var countNum = 10;
while (countNum >= 1) {
    console.log(countNum);
    countNum--;
}
console.log("Blast off!");

var factor = 1;
var f = 5;
while (f > 0) {
    factor = factor * f;
    f--;
}
console.log("Factorial of 5: " + factor);


// Question 20: do...while Loop - User Input Simulation

var enteredPassword = "";
var attempts = 0;
var MAX_ATTEMPTS = 5;

do {
    attempts++;
    enteredPassword = prompt("Attempt " + attempts + " of " + MAX_ATTEMPTS + "\nEnter Password:");

    if (enteredPassword === "secret123") {
        alert("Access Granted! Welcome back.");
    } else {
        if (enteredPassword === null) {
            alert("Login cancelled.");
            break;
        }
        alert("Incorrect password. Please try again.");
    }

} while (enteredPassword !== "secret123" && attempts < MAX_ATTEMPTS);
if (enteredPassword !== "secret123" && enteredPassword !== null) {
    alert("Account locked. You have reached the maximum number of attempts.");
}

// Question 21: Array Methods with for Loop

var numbers = [12, 45, 78, 23, 56, 89, 34];
var maxNum = numbers[0];
var sumNums = 0;
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNum) {
        maxNum = numbers[i];
    }
    sumNums += numbers[i];
}
console.log("Max: " + maxNum);
console.log("Avg: " + (sumNums / numbers.length));

var over50 = [];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 50) {
        over50.push(numbers[i]);
    }
}

var reversedArr = [];
for (var i = numbers.length - 1; i >= 0; i--) {
    reversedArr.push(numbers[i]);
}


// Question 22: Event Handling Simulation

function handleClick() {
    var user = document.getElementById("username").value;
    if (user == "") {
        alert("Field is empty!");
    } else {
        document.getElementById("greeting").innerHTML = "Welcome, " + user + "!";
        document.getElementById("username").value = "";
    }
}

// Question 23: Form Validation Function

function validateForm(email, password) {
    if (email.includes("@") && password.length >= 8) {
        return true;
    } else {
        if (!email.includes("@")) {
            console.log("Invalid Email");
        }
        if (password.length < 8) {
            console.log("Password too short");
        }
        return false;
    }
}

// Question 24: Temperature Converter

function convertTemperature(temp, unit) {
    var converted;
    if (unit == "C") {
        converted = (temp * 9 / 5) + 32;
    } else {
        converted = (temp - 32) * 5 / 9;
    }
    return converted.toFixed(1);
}


// Question 25: Shopping Cart Array Operations

var cart = [];

function addItem(name, price) {
  cart.push({ name: name, price: price });
}

function removeItem(name) {
  cart = cart.filter(function(item) {
    return item.name !== name;
  });
}

function calculateTotal() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].price;
  }
  return total;
}

function applyDiscount(percent) {
  var total = calculateTotal();
  var discountedPrice = total - (total * (percent / 100));
  return discountedPrice;
}

function listItems() {
  return cart.map(function(item) {
    return item.name;
  });
}
////

let marks = 85;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 60) {
  console.log("Grade C");
} else if (marks >= 50) {
  console.log("Grade D");
} else {
  console.log("Grade E");
}

////


let value = "2";

if(value>= "0" && value <= "1000"){
    console.log("digit")
}else if(value >= "a" && value <= "z" || value >= "A" && value <= "Z"){
    console.log("Alaphabet");
}else {
    console.log("Special Charcters");
}


////


let year = 2064

if(year%4==0){
  console.log("leap year")
}else{
  console.log("not leap year")
}

//*//

let hour = 10;

if (hour < 12) {
  console.log("Good morning!");
} else if (hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

//*//

let age = 15;

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

////

let number = 15;

if (number % 3 === 0 && number % 5 === 0) {
    console.log("The number is divisible by both 3 and 5.");
} else if (number % 3 === 0) {
    console.log("The number is divisible by 3.");
} else if (number % 5 === 0) {
    console.log("The number is divisible by 5.");
} else {
    console.log("The number is not divisible by 3 or 5.");
}


//*//

let ages = 28;
let income = 45000;
let creditScore = 720;

if (ages >= 18 && income >= 30000 && creditScore >= 700) {
    console.log("the loan with a standard interest rate.");
} else if (ages >= 18 && income >= 30000 && creditScore >= 650) {
    console.log("the loan, but with a higher interest rate.");
} else if (ages >= 18 && income < 30000 && creditScore >= 700) {
    console.log("the loan, but with a higher interest rate due to lower income.");
} else if (ages >= 18 && income < 30000 && creditScore < 650) {
    console.log("You are not eligible for the loan.");
} else {
    console.log("You are not eligible for the loan.");
}

//*//

let numbers = 7;

if (numbers % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

//*//

let playerScore = 85;
let passingScore = 50;

if (playerScore > passingScore) {
    console.log("You passed the game!");
} else if (playerScore === passingScore) {
    console.log("You passed with the minimum score.");
} else if (playerScore < passingScore) {
    console.log("You failed. Try again!");
}

//*//

let purchaseAmount = 750;

if (purchaseAmount >= 500) {
    console.log("You get a 20% discount!");
} else if (purchaseAmount >= 300) {
    console.log("You get a 10% discount!");
} else if (purchaseAmount >= 100) {
    console.log("You get a 5% discount!");
} else {
    console.log("No discount available");
}


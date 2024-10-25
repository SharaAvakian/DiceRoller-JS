/*const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increasebtn.onclick = function () {
  count++;
  countLabel.textContent = count;
};
decreasebtn.onclick = function () {
  count--;
  countLabel.textContent = count;
};
resetbtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age = 0;
mySubmit.onclick = function name(params) {
  age = myText.value;
  age = Number(age);
  if (age >= 100) {
    resultElement.textContent = `youre too old`;
  } else if (age == 0) {
    resultElement.textContent = `youre just born how? do you mean 0`;
  } else if (age >= 18) {
    resultElement.textContent = `youre old enogh to enter`;
  } else if (age < 0) {
    resultElement.textContent = `you cannot enter lower than 0 that would mean you dont exist yet`;
  } else {
    resultElement.textContent = `you must be 18+ to enter this site`;
  }
};
let ary = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];


for (let index = 0; index <20; index += 3) {
  u.push(index)
}

console.log();*/
// let age = 21;
// let message = age >= 18 ? "youre'n adult" : "youre a minor";
// console.log(message);
//  let time = 16;
//  let greeting = time < 12 ? "Good morning": "goof afternoon"
//  console.log(greeting);
// let day = 12 ;
// switch (day) {
//   case 1:
//     console.log("yerkushabti");
//     break;
//   case 2:
//     console.log("yerekshabti");
//     break;
//   case 3:
//     console.log("chorekshabti");
//     break;
//   case 4:
//     console.log("hingshabti");
//     break;
//   case 5:
//     console.log("urbat");
//     break;
//   case 6:
//     console.log("shabt");
//     break;
//   case 7:
//     console.log("kiraki");
//     break;
//     default:
//     console.log(`${day} is not a day`);

//string
// }
//  let username = "Shara";

//  console.log( username.charAt(1), username.indexOf("a"), username.length);
//  let phoneNumber = "123-456-789-0";
//  phoneNumber = phoneNumber.replaceAll("-","");
//  phoneNumber= phoneNumber.padStart(11,"+");
//  console.log(phoneNumber);

// let username = window.prompt("Enter your username");
// //NO method chaining

// username = username.trim();
// let Letter = username.charAt(0);
// Letter = Letter.toUpperCase();

// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();
// Rusername = Letter + extraChars;
// console.log(Rusername);

// // METHOD CHAINING
// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// console.log(username);

// for (let i = 1; i <= 30; i++) {
//   sam= i++;
//   sam = sam.toString();
//   console.log(sam);

// }

//number guessing game

// const min = 1;
// const max = 100;
// const answer = Math.floor(Math.random() * (max - min + 1));
// let attemps = 0;
// let guess;
// let running = true;
// while (running) {
//   guess = window.prompt(`guess a number between ${min} - ${max}`);
//   guess = Number(guess);
//  if (isNaN(guess)) {
//   window.alert("Enter a valid number")

//  }
//  else if (guess<min || guess>max){
//   window.alert("Enter a valid number")
//  }
// else
// {
//   attemps++;
//   if (guess<answer) {
//     window.alert("Too low!")

//   }
//   else if (guess>answer) {
//     window.alert("Too high!")

//   }
//   else{
//     window.alert(`That was correct and its4 you ${attemps} attmeps`)

//   }
// }
//   running = false;
// }
// console.log(answer);

// const textbox = document.getElementById("textbox");
// const tofarenheit = document.getElementById("tofarenheit");
// const toCelsius = document.getElementById("toCelsius");
// const result = document.getElementById("result");

// function convert() {
//   if (tofarenheit.checked) {
//     result.textContent = "you sleected ta Farenheit";
//     temp = Number(textbox.value);
//     temp = (temp * 9) / 5 + 32;
//     result.textContent = temp + "°F";
//   } else if (toCelsius.checked) {
//     result.textContent = "you slected to Celsius";
//     temp = Number(textbox.value);
//     temp = (temp - 32) * (5 / 9);
//     result.textContent = temp.toFixed(1) + "°C";
//   } else {
//     result.textContent = "select a unit";
//   }
// }
// function sum(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   return result;
// }
// const total = sum(1);
// console.log(`your total is ${total}`);
// class base {

//  surename;

//   constructor(parameters) {

//   }
// }
// class child extends base {

//   constructor(parameters) {

//   }
// }
function rolldice() {
  const numOfDice = document.getElementById("numofdice").value;
  const diceResult = document.getElementById("diceresult");
  const diceimages = document.getElementById("diceimages");
  const values = [];
  const images = [];

  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="./dice_images/${value}.png">`);
  }
  diceResult.textContent = `dice ${values.join(`, `)}`;
  diceimages.innerHTML = images.join(" ");
}

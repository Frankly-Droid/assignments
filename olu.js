//REGEX//
// /pattern/modifiers;

// let sentc = "Oluchukwu is such a good boy but he is so easily distracted";
// let n =  [...sentc.match(/is/ig)];
// console.log(`${n} ${sentc[13]}`);


// const pattern = /life/g.exec("The best things in life are free!");
// console.log(pattern);

// function validateCreditCard(cardNumber) {
//     const visaPattern = /^(4[0-9]{12})[0-9]{3}?$/;
//     const masterCardPattern = /^5[1-5][0-9]{14}$/;
//     const vervePattern = /^(506|6500|5000)[0-9]{12}$/

//     }


//     if (visaPattern.test(cardNumber)) return "Visa";
//     if (masterCardPattern.test(cardNumber)) return "MasterCard";
//     if (vervePattern.test(cardNumber)) return "Verve";
    
//     return "Invalid card number";

// function validateEmail(email) {
//     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return emailPattern.test(email);
// }

// function validatePassword(password) {
//     const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     return passwordPattern.test(password);
// }

// // Example Usage
// const cardNumber = "4111111111111111"; // Visa test number
// const email = "test@example.com";
// const password = "Secure@123";

// console.log("Card Type:", validateCreditCard(cardNumber));
// console.log("Valid Email:", validateEmail(email) ? "Yes" : "No");
// console.log("Valid Password:", validatePassword(password) ? "Yes" : "No");


//Regex to Validate 9ja PhoneNumber

// function validatePhoneNumber(phoneNumber) {
//     const numberPattern = /^0[7-9]{1}[0-1]{1}[0-9]{7}$/;


//     if (numberPattern.test(phoneNumber)) return "Phone number is Valid";

//     return "Invalid Number";
// }
// Example Usage    
// function validatePhoneNumber(phoneNumber) {
//     // const numberPattern = /^(\+234|0)([7-9](0|1))([-]?[0-9]){7}$/;
//     const numberPattern = /^(\+234|0)([7-9][0-9])([-]?[0-9]){7}$/;
//     if (numberPattern.test(phoneNumber)) return "Phone number is Valid";

//     return "Invalid Number";
// }

// const phoneNumber = "+234-80-03641051";

// console.log(validatePhoneNumber(phoneNumber));

// function validatePhoneNumber(phoneNumber) {
//     const numberPattern = /^((\+234[-]?)|0)([7-9][0-1])[-]?([0-9]{3,5}[-]?[0-9]{4})$/;
//     if (numberPattern.test(phoneNumber)) return "Phone number is Valid";
//     return "Invalid Number";
// }

// const phoneNumber = "070-382222-8191";
// console.log(validatePhoneNumber(phoneNumber)); // Output: "Phone number is Valid"


//CALL BACK FUNCTIONS

// function first() {
//     second();
//     console.log("This is the first");
// }
// function second() {
//     console.log("This is the second");
// }

// function third(x) {
//      first();
//     console.log("This is the third");
// }

// // first();
// // second();
// third();


//ASYNC | AWAIT

// function wakeup() {
//     console.log("Wake up!");
    
// }
// function pray() {
//     console.log("I pray!");
    
// }
// function bake() {
//     console.log("I bake!");
    
// }
// function eat() {
//     console.log("I eat and got to  work!");
    
// }

// function save(savedItem, item2) {
//      return savedItem + item2;
// }

// console.log(save(2, 8));

// // save();


// // wakeup();
// // pray();
// // bake();
// // eat();

//ARROW FUNCTIONS AND SET TIMEOUT


// const fightStart = (fighter, sword, ready) => fighter + " " + sword + " " + ready;

// console.log(fightStart("I", 'am', 'ready'));

// setTimeout(() => {
//     function greet(name) {
//     return "Hello, " + name + ", Wlcome to the family!";
// }
// console.log(greet("Alice"));
    
// }, 5000);

// setTimeout(() => {
// console.log("processing");
    
// }, 1000);

// console.log("I am Oluchukwu and guess what....");


// setTimeout(() => {
//     console.log("I AM GOOD");
    
// }, 4000)




// const fetchData = (callback) => setTimeout (() => {
//     const data = "Adas son";
//     callback(data);
// }, 2000);

// function handleData(data) {
//   console.log("Received:", data);
// }

// fetchData(handleData);
// fetchData(); // error.."call back is not a function"


// function fetchData(callback) {
//         callback("Data received");
// }

// fetchData((data) => {
//     console.log(data);
// });
// console.log(fetchData);


// PROMISES : are objects that manages asynchronous operaions
//            you  wrap promise object around asynchronous codes
//            the promise object promises to return a value
//            pending if REDOLVED OR REJECTED
//      new Promise((resolve, reject) => {asynchronous code});

//DO THESE CHORES

//wake up
//pray
//bake

// function wakeUp(callback){
//     setTimeout(() => {
//         console.log("Wake up MF!"); 
//         callback();
//     }, 1000);
// }
// function pray(callback){
//     setTimeout(() => {
//         console.log("Get on your knees and pray");
//         callback(); 
//     }, 2000);
// }
// function bake(callback){
//     setTimeout(() => {
//         console.log("Now bake the fuck up MF!"); 
//         callback();
//     }, 700);
// }


// wakeUp(() => {
//     pray(() => {
//         bake(() => console.log("you have finised!"));   
//     })
// });



///PROMISES

// function wakeUp(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         resolve("Wake up MF!"); 
//     }, 1000);    
//     });
// }


// function pray(){
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//         resolve("Get on your knees and pray"); 
//         }, 2000);
//         });
// }


// function bake(){
//         return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         resolve("Now bake the fuck up MF!"); 
//     }, 700);
//     });
    
// }

// wakeUp().then(value => {console.log(value); return pray()})
//         .then(value => {console.log(value); return bake()})
//         .then(value => {console.log(value); console.log("finished")});


//ANOTHER WAY TO CREATE AND CALL OBJECTS//
// const myBestFood = new Object();

// myBestFood.firstChoice = "Garri";
// myBestFood.secondChoice = "Rice";
// myBestFood.thirdChoice = "Beans";

// console.log(myBestFood.firstChoice);

// MATH functions/  OBJECTS / math methods//

// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.SQRT2);
// console.log(Math.LN2);
// console.log(Math.LN10);
// console.log(Math.LOG2E);
// console.log(Math.LOG10E);
// console.log(Math.mini);

// console.log(Math.pow(15, 8));
// console.log(Math.ceil(Math.SQRT1_2));

// const Olu = [1, 2, 3];
// console.log(typeof(Olu));

//Higher order functions and arrays//


// const validNumbers = numbers.filter((item) => item >= 30); //filter order function

// console.log(validNumbers);

//this .map function targerts a particular index usind the .map and the if statement
    // const numbers = [12,34,87,45];
    // const validNumbers = numbers.map((item, index) => {
    //     if (index === 2) {
    //         return item *2;
    //     }
    //         return item;
    // });
    // console.log(validNumbers);



///using the .reduce hof //

// const numbers = [12,34,87,45];
// const newNumbers = numbers.reduce((accumulator, currentItem) => {
//     return accumulator + currentItem;

// }, 2);

// console.log(newNumbers);

// const numbers = [12,34,87,45];
// const newNumbers = numbers.reduce((accumulator, currentItem) => {
//     return accumulator < currentItem ? accumulator : currentItem;

// }, );

// console.log(newNumbers);


const numbers = [18,72,0,53,86];
const newNumber = numbers.reduce((accumulator, currentItem) => {
    return accumulator . currentItem ? accumulator : currentItem;
}, Infinity);
console.log(newNumber);













//REGEX//
// /pattern/modifiers;

// let sentc = "Oluchukwu is such a good boy but he is so easily distracted";
// let n =  [...sentc.match(/is/ig)];
// console.log(`${n} ${sentc[13]}`);


// const pattern = /life/g.exec("The best things in life are free!");
// console.log(pattern);

// function validateCreditCard(cardNumber) {
//     const visaPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
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

function validatePhoneNumber(phoneNumber) {
    // Match +234 or 0, followed by 2-digit prefix, optional hyphens, 7 digits
    const numberPattern = /^((\+234[-]?)|0)([7-9][0-9])[-]?([0-9]{3,}[-]?[0-9]{4})$/;
    if (numberPattern.test(phoneNumber)) return "Phone number is Valid";
    return "Invalid Number";
}

const phoneNumber = "070-384-8191";
console.log(validatePhoneNumber(phoneNumber)); // Output: "Phone number is Valid"
// 2. Marriage Eligibility
// Write a program to check if a person is eligible for marriage based on their gender and age.
// Condition:
// For males, the minimum age is 21 years.
// For females, the minimum age is 18 years.


var gender = prompt("mention your gender male or female  ")

if(gender==="male"){
    var age = prompt("Enter your age :  ");

    age>=21 ? console.log("Eligible for marriage") : console.log("Not eligible for marriage");
}
else{
    var age = prompt("Enter your age :  ")

    age>=18 ? console.log("Eligible for marriage") : console.log("Not eligible for marriage");
}

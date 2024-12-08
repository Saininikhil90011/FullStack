//  Q:1 get user input a number using prompt("Enter the number") check if the number is a multiplication of 5
// let num = prompt("Enter the number");
// if (num % 5 === 0) {
//     console.log( num ," is a multiplication of 5");
// }else {
//     console.log( num ," is not a multiplication of 5");
// }


//  Q:2 write a code which can give grades to students according to theirs scores:
// 80-100 A
// 70-79 B
// 60-69 C
// 50-59 D
// 0-49 F

let num = prompt("Enter the number");
if (num >= 80 && num <= 100) {
    console.log("A");
 }
 else if (num >= 70 && num <= 79) {
    console.log("B");
 }
 else if (num >= 60 && num <= 69) {
    console.log("C");
 }
 else if (num >= 50 && num <= 59) {
    console.log("D");
 }
 else if (num >= 0 && num <= 49) {
    console.log("F");
 }
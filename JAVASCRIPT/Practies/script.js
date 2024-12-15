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

// let num = prompt("Enter the number");
// if (num >= 80 && num <= 100) {
//     console.log("A");
//  }
//  else if (num >= 70 && num <= 79) {
//     console.log("B");
//  }
//  else if (num >= 60 && num <= 69) {
//     console.log("C");
//  }
//  else if (num >= 50 && num <= 59) {
//     console.log("D");
//  }
//  else if (num >= 0 && num <= 49) {
//     console.log("F");
//  }

//  Strings

// let str = "Hello";
// let str2 = "World";

// let result = str1.concat(str2);

// console.log(`i'm reading in js programingg ${result}`);
// console.log(result);]
// console.log(str.replace("Hello", "Good Morning"));

// Question 3= Prompt the use to enter full name. Generate a username for them basrd on input stsrt username with @AbortController,followed by their full name and wiht the full length

// let fullName = prompt("Enter your full name");
// let result = "@" +  fullName + fullName.length;
// console.log(result);

// arraysss-->>>>

// let arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// let arr2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// let arr3 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// let result = arr.concat(arr2, arr3);
// console.log(result);

// let array = [60, 70, 80, 90, 100]
// console.log(array);
// console.log(array.length); //5
// console.log(array[2]); //80

// let heros = ["spiderman", "ironman", "hulk", "thor"];
//for loop
// for(let i = 0; i < heros.length; i++) {
//    console.log(heros[i]);
// }

// for of

// for (let hero of heros) {
//   console.log(hero);
// }




// let cityes =["jaipur", "lahore", "karachi", "islamabad", "peshawar", "quetta"];
// for(let city of cityes){
//    console.log(city.toUpperCase());
// }



// Qustion 4= For a given array with marks of student ->>[99,94,80,78,97] find the average marks of the entiire class.

// let marks = [99, 94, 90, 78, 97];   
// let sum = 0;
// for( let val of marks){
//    sum = sum + val;  
//  }
//  console.log(sum / marks.length);

//  Question 5= for a given array with prices 5 items -> [350,90,400,980,500] all items have an of 10% off on them .change the array to store final after applying offer 

// let items = [350, 90, 400, 980, 500];
// let i = 0;
// for (let val of items){
//    console.log(`value at index ${i} = ${val}`)
//    let offer = val/10;
//    items[i]=items[i]-offer;
//    console.log(`value after offer = ${items[i]}`)
//    i++;  
// }

//4:15
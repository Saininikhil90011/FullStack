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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////













// 4:37
// Functions------->>>>>>>>>>>>>>>>>>>>>>>>.\

// function myname (){
//     console.log("Hello My Name is Nikhil ");
//     console.log("I Learn JavaScript");
// }
// myname();

// function myfunction(smg){
//     //parameters-->> input
//     console.log(smg);
// }
// myfunction("Hello My Name is Nikhil" ); //arguments-->>output

// function sum(x,y){
//     s=x+y
//     return s
// }
// let val = sum(10,20);
// console.log(val);//30

// Arrow Functions------->>>>>>>>>>>>>>>>>>>>>>>>.

// const myname = (name) => {
//     console.log("Hello My Name is " + name);
//     console.log("I Learn JavaScript");
// }
// myname("Nikhil");

// const multiplication = (a,b) => {
//     return a*b;
// }
// let val = multiplication(10,20);
// console.log(val);

// function countVowels(str) {
//     let count = 0;
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i].toLowerCase())) {
//             count++;
//         }
//     }
//     return count;
//   }

//   const inputString = "Hello, World!";
//   const vowelCount = countVowels(inputString);
//   console.log(`Number of vowels in "${inputString}": ${vowelCount}`);

// function countVowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;

// }
// console.log(countVowels("nikhil saini"));




// const countVowels = (str) => {
//         let count = 0;
//         for (const char of str) {
//             if (
//                 char === "a" ||
//                 char === "e" ||
//                 char === "i" ||
//                 char === "o" ||
//                 char === "u"
//             ) {
//                 count++;
//             }
//         }
//         return count;
    
//     }
//     console.log(countVowels("nikhil saini"));




// foreach functions---->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Q:1 for a given array of numbers , pront the square of each value using the foreach loop

// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach((num) => {
//     console.log(num * num); //num**2
// }); 



// let nums = [15, 24, 32, 44, 35];
// let claSqure = (num)=>{
//     console.log(num**2);

// };
// nums.forEach(claSqure);




// map functions---->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// let nums = [15, 24, 32, 44, 35];
// let newarray = nums.map((val)=>{
//     return val*2
// })
// console.log(newarray);



// filter functions---->>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// q:1 PRINT ALL THE EVEN NUMBERS FROM THE GIVEN ARRAY

// let nums = [22,23,15, 24, 32, 44, 35];
//  let newArr = nums.filter((val)=>{
//     return val % 2 == 0;
  
// })
// console.log(newArr);


// q:2 PRINT ALL THE ODD NUMBERS FROM THE GIVEN ARRAY
// let nums = [22,23,15, 24, 32, 44, 35];
//  let newArr = nums.filter((val)=>{
//     return val % 2 !== 0;
  
// })
// console.log(newArr);

// Questions:3 print 33> values from the given array
// let nums = [22,23,15, 24, 32, 44, 35];
//  let newArr = nums.filter((val)=>{
//     return val > 33;
  
// })
// console.log(newArr);

// qUESTION:4 print 33< values from the given array
// let nums = [22,23,15, 24, 32, 44, 35];   
//  let newArr = nums.filter((val)=>{
//     return val < 33;
  
// })
// console.log(newArr);

//Question:5 print 33= values from the given array
// let nums = [22,23,15, 24, 32,33, 44, 35];
//  let newArr = nums.filter((val)=>{
//     return val == 33;
  
// })
// console.log(newArr);





//Reduce function---->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Q:1 find the sum of all the values in the array

// let arr=[1,2,3,4];
// let sum = arr.reduce((pre,cur)=>{
//     return pre+cur;
// })
// console.log(sum);  //10


// Q:2find the largest value in the arr


// let arr=[1,2,3,4];
// let sum = arr.reduce((pre,cur)=>{
//     return pre>cur ? pre : cur
// })
// console.log(sum); //4


//Q:3 find the smallest value in the arr
// let arr=[1,2,3,4];
// let sum = arr.reduce((pre,cur)=>{
//     return pre<cur ? pre : cur
// })
// console.log(sum); //1


// prectice set:1
//Q:1 we are given array of marks of student . filter out of the marks of studebt that score 90+

// let marks = [99,94,80,78,97,77,65,55];
// let totalmarks = marks.filter((val)=>{
//     return val > 90;
// })
// console.log(totalmarks);



//Q:2 take a num n as input form user an array of number form 1 to n use the reduce to calculate sum of all number in the array use the reduce method to calculate product of all number in the array



// let n = prompt("Enter the number");
// let arr = [];
// for( let i = 1; i <= n; i++) {
//     arr[i-1]=i;
// }
// console.log(arr);

// let sum = arr.reduce((pre,cur)=>{
//     return pre+cur;
// })
// console.log(sum);

// let product = arr.reduce((pre,cur)=>{
//     return pre*cur;
// })
// console.log(product);





//Q:3 find the factorial of a number

// let n = prompt("Enter the number");
// let fact = 1;
// for( let i = 1; i <= n; i++) { 
//     fact = fact*i;  
// }
// console.log(fact);





// DOM ------------->>>>>>>>>>>>>>>.>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




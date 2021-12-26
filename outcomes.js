// const myFunction =(num)=>{
//     let tot = num.toString().split("")
//     return tot

// }
// console.log(myFunction(246))

// function giveMeSomething(a) {
//   b = "something " +a;
//   console.log(b)
//   return b;
// }

// giveMeSomething("bob jane");

// const boss= (num) =>{

// if (
//     num
// )

// }

// function swap(a, b) {
//   [a, b] = [b, a];

//   return [a, b];
// }
// swap(10, 2);

// function triArea(base, height) {
//   area = (base * height) / 2;
//   console.log(area);
//   // return area
// }
// triArea(1024,256);

// function printArray(number) {
//     var newArray = [""];

//     for(var i = 1; i <= number; i++) {
//       newArray.push(i);
//     }
//     console.log(newArray)

//     return newArray;
//   }

//   printArray(10000)

// function and(a, b) {
//   if (a === b) {
//     console.log("good")
//     return true;
//   } else {
//     console.log("fuck no")
//     return false;
//   }
// }

// and(false,true);

// function and(a, b) {
// 	if (a == true && b ==true){

//   return true
//   }else {
//     return false
//   }

// }

// console.log(and(true, false))

// console.log(and(true, true))

// console.log(and(false, true))

// console.log(and(false, false))

// Write here your multiply-function
// const mult=(a,b)=>{
//   tot=a*b
//   console.log(tot)
//   return tot
// }
//  mult(2,7)

// function century(year) {
//   // Finish this :)
//   let centuries = Math.ceil(year/100)

//   return centuries;
// }

// century(1704)

// function bmi(weight, height) {
//   const results = weight/(height*height)

//   if(results <= 18.5){
//     console.log(results)
//     return "Underweight"
//     }else
//       if(results <= 25.0){
//     console.log(results)
//     return "Normal"
//     }else
//       if(results <= 30.0){
//     console.log(results)
//     return "Overweight"
//     }else{
//       return "Obese"
//     }

// }

// bmi(10,2)

// function numberToString(num) {
//   // Return a string of the number here!
//   const toString = num.toString()
//   console.log(toString)
//   return toString
// }

// numberToString(34325435435425)

// console.log("burger King" > "McDonalds");

// function cockroachSpeed(s) {
//   //Good Luck!

//   cmConversion = s * 0.00001;
//   console.group(cmConversion);
// }

// cockroachSpeed(1.08);

// function cockroachSpeed(s) {
//   //Good Luck!

//   cmConversion = s * (1/3600)
//   answer=cmConversion*100000
//   realAnswer = Math.floor(answer)
//   console.log(realAnswer)
//   return realAnswer

// }

// cockroachSpeed(1.08)

// function isDivideBy(number, a, b) {
// good luck

//   if (number%a === 0 && number%b === 0){
//     console.log(true)
//     return true
//     }else{
//       console.log(false)
//       return false
//     }

// }

// isDivideBy(-12, 2, -6)
// isDivideBy(-12, 2, -5)
// isDivideBy(45, 1, 6)
// isDivideBy(45, 5, 15)
// isDivideBy(4, 1, 4)
// isDivideBy(15, -5, 3)

// var stringToNumber = function(str){

//   toNumber = parseInt(str)
//  console.log(toNumber)
//   return toNumber;
// }

// stringToNumber("1234")






// function simpleMultiplication(number) {
//   // your code........

//   let evenAnswer = number * 8;
//   let oddAnswer = number * 9;

//   if (number % 2 === 0) {
//     console.log(evenAnswer);
//     return evenAnswer;
//   } else {
//     console.log("false");
//     number * 9;
//     console.log(oddAnswer);
//     return oddAnswer;
//   }
// }

// simpleMultiplication(8);



// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   // your code here
//   const twiceAge=dadYearsOld-sonYearsOld*2
//   const twiceAgeFlip = dadYearsOld-sonYearsOld*2

// if (twiceAge<0){
//   console.log(twiceAgeFlip*(-1))
//   }else{
//     console.log(twiceAge)
//   }

// }
// twiceAsOld(55,30)


var isSquare = function(n){
  
  let checkNumber = Math.sqrt(n)

  if(checkNumber %1 === 0){
    console.log("true")
  }
  else{
    console.log("false")
  }
}





isSquare(101)


//==========================


var isSquare = function(n){
  
  let checkNumber = Math.sqrt(n) 

 console.log(checkNumber %1 === 0 ? "this shyt is " +true+ " B!":"This shyt is " +false+ " B!")
   
  
}





isSquare(101)
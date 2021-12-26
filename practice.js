// ``;
// // let myArr = [1, 2, "five", "seven", 5, 6, 7]

// // console.log(myArr.forEach((value,index)=>{
// //   console.log(value, index)
// //   return value + index;

// // }))

// //=======this is how you invoke a function

// // const muFunc = (ok) => {
// //    let myfunc2 = 5;
// //    console.log(myfunc2)

// //   }
// // muFunc("b")

// //======]
// //tjhis is how you call it outside a function
// // const myFuncc = (ok) => {
// //    let myfunc2 = 34;
// //    return myfunc2;
// //    }

// // console.log("my funcc is " +myFuncc(1))

// // const name = "Tony Derandall Daniels Jr"

// // console.log(name)
// //======you would use the array sign to find an index to a string
// // console.log(name[7])
// // console.log(name.length)

// // const firstName ={
// // "first name" : "Tony",
// //    lastName: 'Daniels'
// // }

// //thats crazy. Didnt even know you could do this above.. Ill stick to the one that is last name
// // console.log(firstName[1])
// // console.log(firstName.lastName[1])

// // const Unordered = () => {
// //    let unorderedString = "Daniels";
// // };

// // const yroo = () =>{
// //    console.log("helloo, yroo?..  wtheck?")
// //    return 12
// // }
// // yroo()

// // const test = (number) => {
// //    return number < 7 ?  "too small, B" : "koo, you have a number greater than 7"

// // }

// // console.log(test(5))

// // function swap(a,b){
// //     [a,b] = [b,a]
// //    return [a,b]
// //  }

// //  console.log(swap(1,3))

// // function otherAngle(a, b) {

// //   let third = 180-a-b

// //   console.log(third)

// //   return third;
// // }

// // otherAngle(84,30)

// // var  x=1
// // for(var i=0; i<=3;i++){
// //   x = 5*i //5*i wil happen first then the x.order of operations

// // }
// // console.log(x)

// // let myArr =[0,1,2,3,4,5,6,7]

// // console.log(myArr.length)

// // let lengthOfLastWord = (s) => {
// //   let string = s.split(" ");

// //   let getLastWord = string.slice(-1);
// //   console.log(getLastWord[0].length);
// //   return getLastWord[0].length;
// // };

// // lengthOfLastWord("hello yo. My name is Tony Daniels");

// // var lengthOfLastWord = (s) => {

// //   let string = s.split(" ");
// //   for (i = 0; i < string; i++) {
// //     console.log(i);
// //   }

// //   console.log(string);

// //   let getLastWord = string.slice(-1);
// //   console.log(getLastWord[0].length);

// //   return getLastWord[0].length;
// // };

// // lengthOfLastWord("    fly me to   the moon   ");

// // var lengthOfLastWord = (s) => {
// //   const trim = s.trim();

// //   let string = trim.split(" ");

// //   for (i = 0; i < string; i++) {
// //     console.log(i);
// //   }
// //     console.log(string);

// //   let getLastWord = string.slice(-1);
// //   console.log(getLastWord[0].length);

// //   return getLastWord[0].length;
// // };
// // lengthOfLastWord("    fly me to   the moon        ");

// // const angle = (n) => {
// //   //code here
// //   let sum = (n - 2) * 180;
// //   console.log(sum);
// //   return sum;
// // };

// // angle(4);

// // const recurseMethod=(n)=>{
// //   if(n<1){
// //     console.log("n is less than 1")
// //   }else{
// //     console.log(n)
// //     recurseMethod(n-1)

// //   }
// // }
// // recurseMethod(100)

// //https://www.codewars.com/kata/57ed30dde7728215300005fa/train/javascript

// function bump(x) {
//   let bumpArray = x.split("");
//   for (i = 0; i < bumpArray.length; i++) {
//     if (bumpArray[i] === "o") {
//       let newArray = bumpArray.splice();
//       console.log(newArray);
//     } else {
//       console.log("naw");
//     }
//   }
// }

// bump("yooooo you already knoooow");

// function solution(year) {
//   let centuryApprox = year / 100;
//   let centuryActual = Math.ceil(centuryApprox);
//   console.log(centuryActual);
//   return centuryActual;
// }

// solution(2000);

// function testSize(num) {
//   // Only change code below this line
//   if (num < 5) {
//     return "Tiny";
//   } else if (num < 15) {
//     return "Medium";
//   } else if (num < 20) {
//     return "Large";
//   } else if (num >= 20) {
//     return "Huge";
//   }

//   return num;
// }
// // Only change code above this line

// testSize(7);

const hero = (bullets, dragons) => {
  //Get Coding!
  let division = bullets / dragons;
  let divisionMod = division % 2;
  if (bullets >= dragons * 2) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};

hero(10, 5);

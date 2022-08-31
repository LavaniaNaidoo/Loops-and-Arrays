//1.Display numbers from 1 to 10
const tenNumbers = [];   
for (let i = 1; i <= 10; i++) {
  tenNumbers.push(i);
}
console.log(tenNumbers.join(" "));

//2.Print the odd numbers less than 100
const oddNumbers = []; 
for (let i = 1; i < 100; i += 2) {
  oddNumbers.push(i);
}
console.log(oddNumbers.join(" "));

//3.Print the multiplication table with 7
for (let i = 1; i <= 10; i++) { 
  let total = i * 7;
  console.log(`7 * ${i} = ${total}`);
}

//4.Print all the multiplication tables with numbers from 1 to 10
for (let i = 1; i <= 10; i++) {  
  for (let j = 1; j <= 10; j++) {
    let total = i * j;
    console.log(`${i} * ${j} = ${total}\n`);
  }
}

//5.Calculate the sum of numbers from 1 to 10
function sumTo(n) {   
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log("The sum of numbers from 1 to 10 is", sumTo(10));;

//6.Calculate 10!
function factorial(n) { 
  var total = 1;
  for (i = 1; i <= n; i++) {
    total = total * i;
  }
  return total;
}
console.log("The result of 10! is ", factorial(10));

//7.Calculate the sum of odd numbers greater than 10 and less than 30
function sumOdd() {   
  let sum = 0;
  for (let i = 11; i <= 30; i += 2) {
    sum += i;
  }
  return sum;
}
console.log("The sum of odd numbers from 10 to 30 is", sumOdd());

//8.Calculate the sum of numbers in an array of numbers
const arrOfNumbers = [1, 27, 63, 58, 71, 39, 11, 23]; 
function sumOfArray() {
  let total = 0;
  for (let i = 0, n = arrOfNumbers.length; i < n; i++) {
    total += arrOfNumbers[i];
  }
  return total;
}
console.log("The sum of numbers in my array is", sumOfArray());

//9.Calculate the average of the numbers in an array of numbers
function averageArray() { 
  let total = 0;
  arrOfNumbers.forEach(num => {
    total += num;
  });
  return total / arrOfNumbers.length;
}
console.log("The average of the numbers in the same array is ", averageArray());

//10.Create a function that receives an array of numbers and returns an array containing only the positive numbers
const anotherArray = [-7, 3, 11, -26, -9, 45, 38, 17, 0, -9]; 

const positiveNumbers = (anotherArray) => anotherArray.filter(num => num >= 0);

const positives = positiveNumbers(anotherArray);

console.log(positives);

//11.Find the maximum number in an array of numbers
const maximum = Math.max(...anotherArray); 
console.log(`The maximum number of the array is ${maximum}`);

//12.Create a function that will return a Boolean specifying if a number is prime
function primeNumber(n) { 
  if (n === 1) {
    return false;
  }
  else if (n === 2) {
    return true;
  } else {
    for (let x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}
console.log(primeNumber(9));

//13.Calculate the sum of digits of a positive integer number
function sumDigits(n){  
   let numArr = n.toString().split("");
   let sum = numArr.reduce(function(a, b) {
      return parseInt(a) + parseInt(b);
  });
  return sum;
}
console.log("The sum of digits is", sumDigits(1995));

//14.Print the first 100 prime numbers
const arrPRime = []; 
let x = 2;
while(arrPRime.length < 100){
    if(primeNumber(x)) { arrPRime.push(x); }
    x++;
}
console.log(arrPRime);

//15.Rotate an array to the left 1 position
const rotateLeft = (arrOfNumbers, count = 1) => { 
  return [...arrOfNumbers.slice(count, arrOfNumbers.length), ...arrOfNumbers.slice(0, count)];
};
console.log("The array is ", arrOfNumbers, "One position to the left is", rotateLeft(arrOfNumbers, 1));


console.log("The array is ", arrOfNumbers);

//16.Reverse and array
const reversedArray = arrOfNumbers.reverse(); 
console.log("The reversed array is ", reversedArray);

//17Create a function that will merge two arrays and return the result as a new array
const twoArrInOne = arrOfNumbers.concat(anotherArray); 
console.log("Here are the two arrays merged in one array", twoArrInOne);

//18.Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
 const difference = (arrOfNumbers, anotherArray) => { 
   const first = arrOfNumbers.filter(num => !anotherArray.includes(num));
   const second =anotherArray.filter(num => !arrOfNumbers.includes(num));
   return first.concat(second);
 }
 console.log(difference(arrOfNumbers,anotherArray));

//19.Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
 const distinct = (anotherArray) => { 
   const newArr = anotherArray.map(arg => arg * 3);
   return newArr;
 }
console.log(distinct(anotherArray));

// 20.Create a function that will return the number of words in a text
  function numberOfWords(str) { 
       return str.split(" ").length;
 }
console.log(numberOfWords("I hope I did everything right"));

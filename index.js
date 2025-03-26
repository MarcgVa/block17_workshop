// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
  constructor(data) {
    //data can either be a string or an array of numbers
    if (typeof data === "string") {
      this.data = str.split(",").map((number) => number * 1);
    } else {
      this.data = data;
    }
  }
  count() {
    //return the count of numbers in data
    return this.data.length;
  }
  printNumbers() {
    //print the numbers in data
    this.data.forEach((e,i) => console.log(`number ${e} at index ${i}.`));
  }
  printNumbersHTML() {
    //print the numbers in data
    let tempArr = [];
    this.data.forEach((e, i) => {
      tempArr.push(`number ${e} at index ${i}`);
    });
    return tempArr;
  }
  odds() {
    //return the odd numbers in data
    return this.data.filter((e) => e % 2 !== 0).sort();
  }
  evens() {
    //return the even numbers in data
    return this.data.filter((e) => e % 2 === 0).sort();
  }
  sum() {
    //return the sum of the numbers
    return this.data.reduce((t, n) => t + n, 0);
  }
  product() {
    //return the product of the numbers
    return this.data.reduce((t, n) => t * n);
  }
  greaterThan(target) {
    //return the numbers greater than the target
    return this.data.filter((e) => e > target).sort();
  }
  howMany(target) {
    //return the count of a given number
    return this.data.filter((e) => e === target).length;
  }
}

//Prompt the user for a list of integers separated by commas
const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");
//const str =  "1,2,3,3,5,9";
//create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count()); //returns count of numbers
n1.printNumbers(); //prints the number along with their indexes
console.log(n1.odds()); //returns odd numbers
console.log(n1.evens()); //returns even numbers
console.log(n1.sum()); //returns sum of numbers
console.log(n1.product()); //returns product of numbers
console.log(n1.greaterThan(3)); //returns numbers greater than another number
console.log(n1.howMany(3)); //return the count of a specific number

const headerArr = document.getElementsByTagName("h4");
const paraArr = document.getElementsByTagName("p");

const textArr = [
  "Return count of numbers:",
  "Prints the number along with their indexes:",
  "Return odd numbers:",
  "Return even numbers:",
  "Return the sum of numbers:",
  "Return the product of numbers:",
  "Return numbers greater than another number:",
  "Return the count of a specific number:",
];


for (let i = 0; i < headerArr.length; i++){
  headerArr[i].innerText = textArr[i];
}




paraArr[0].innerText = n1.count();
// //text.append("prints the number along with their indexes:");
paraArr[1].innerText = n1.printNumbersHTML(); //prints the number along with their indexes
// text.append("Return odd numbers:");
paraArr[2].innerText = n1.odds();
// text.append("Return even numbers:");
paraArr[3].innerText = n1.evens();
// text.append("Return the sum of numbers:");
paraArr[4].innerText = n1.sum();
// text.append("Return the product of numbers:");
paraArr[5].innerText = n1.product(); //returns product of numbers
// text.append("Return numbers greater than another number:");
paraArr[6].innerText = n1.greaterThan(3); //returns numbers greater than another number
// text.append("Return the count of a specific number:");
paraArr[7].innerText = n1.howMany(3); //return the count of a specific number
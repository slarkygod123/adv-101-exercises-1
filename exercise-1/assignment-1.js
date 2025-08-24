//  1. Create a varialbe using var to store your name
// var myName = "Daniel Ceruela";

// 2. Create a variable using let to store your age, but store it as a string, not a number.
// let myAge = "20";

// 3. Create a constant PI with the value 3.1416 and try reassigning it — observe the error. (10 pts)
// const PI = 3.1416;
// PI = 3.14;

// 4. Create variable boolean isStudent, but set it dynamically to true if your age is less than 25, otherwise false.
let isStudent = myAge < 25;
console.log(isStudent)

// 5. Create An object person with nested properties
let person = {
    name: myName,
    age: myAge,
    address: {
        street: "Agdao Street",
        city: "Davao",
        country: "Philippines"
    }
}

// 6. An array colors containing at least 5 color names (include at least one repeated value.)
let colors = ["red", "black", "white", "yellow", "black"];

// 6.1 Reverse and Transform 
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
let reversedArray = []
for(let i = 0; i < fruits.length; i++){
    let temp = fruits[i].toUpperCase();
    let toBeReversed = "";

    for(let j = temp.length - 1; j >= 0; j--){
        toBeReversed += temp[j];
    }

    reversedArray.push(toBeReversed);
}
console.log(reversedArray);

// 6.2 Filtering and Counting 
let numbers = [12, 45, 67, 23, 90, 32, 11, 9, 28];
let newArray = [];
for(num of numbers){
    if(num % 2 === 0 && num > 20){
        newArray.push(num);
    }
}
console.log(`Found ${newArray.length} numbers: [${newArray}]`);
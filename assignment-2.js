
// 1. Write a function updatePerson(id, person) that replaces the matching person’s properties with the new data.
// let persons = [
//     {id: 1, name: "Alice", age: 28},
//     {id: 2, name: "Bob", age: 22},
//     {id: 3, name: "Charlie", age: 30},
// ]

// function updatePerson(id, person){
//     return persons.map(p => {
//         if(p.id === id){
//             return {...p, ...person};
//         }
//         return p;
//     })
// }
// console.log("Original Persons:", persons)
// persons = updatePerson(2, {name: "Daniel", age: 20});
// console.log("New Persons:", persons)


// 2. Write a function named isValidPassword that receives a string as parameter and returns a boolean verifying that the string
// function isValidPassword(password) {
//     let upperCount = 0;
//     let hasDigit = false;
//     let hasSymbol = false;

//     for (let char of password) {
//         if (char >= 'A' && char <= 'Z') {
//             upperCount++;
//         } else if (char >= '0' && char <= '9') {
//             hasDigit = true;
//         } else if ("_!?*".includes(char)) {
//             hasSymbol = true;
//         }
//     }

//     return upperCount >= 3 && hasDigit && hasSymbol;
// }
// console.log("Is Valid Password: ", isValidPassword("PASword123!"));
// console.log("Is Valid Password: ", isValidPassword("pass"));


// 3. Write a function named areValuesUnique that receives an Array of numbers as parameter.
// The function should return a boolean verifying if the array contains only unique numbers.
function areValuesUnique(arr) {
    const uniqueValues = new Set(arr);
    return uniqueValues.size === arr.length;
}

console.log("Values Unique: ", areValuesUnique([1, 2, 3, 4, 5])); 
console.log("Values Unique: ", areValuesUnique([1, 2, 2, 4, 5])); 
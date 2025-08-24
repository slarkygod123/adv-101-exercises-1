
// 1. Use map to get only the names from an array of objects.
let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ];
console.log("Map: ", users.map(user => user.name)) // Result: ["Alice", "Bob"]

// 2. Using .filter(), filter people with age 18 and above.
let people_1 = [
  { name: "Tom", age: 16 },
  { name: "Jerry", age: 18 },
  { name: "Spike", age: 22 }
];
console.log("\nFilter: ", people_1.filter(p => p.age  >= 18)) // Result: [{name:"Jerry", age:18}, {name:"Spike", age:22}]

// 3. Use reduce: Find the oldest person in the list.
let people_2 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 32 },
  { name: "Charlie", age: 29 }
];
console.log("\nReduce: ", people_2.reduce((prev, curr) => ( prev.age > curr.age ? prev : curr))) // Result: { name: "Bob", age: 32 }

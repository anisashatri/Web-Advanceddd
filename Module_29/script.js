var programminglanguages = ["JavaScript", "Python", "C#", "Java", "Ruby"];

console.log("Original array:", programminglanguages);
console.log(programminglanguages[0]); // First element

console.log(programminglanguages.length); // Length of the array

console.log(programminglanguages[programminglanguages.length - 1]); // Last element

programminglanguages.push("Go"); // Add element to the end
console.log("After push:", programminglanguages);

programminglanguages.pop(); // Remove last element
console.log("After pop:", programminglanguages);

programminglanguages.unshift("TypeScript"); // Add element to the beginning
console.log("After unshift:", programminglanguages);

programminglanguages.shift(); // Remove first element
console.log("After shift:", programminglanguages);  

//splice
programminglanguages.splice(2, 0, "C++"); // Add "C++" at index 2

console.log("After splice:", programminglanguages);

//random number
console.log("Random number between 0 and 1:", Math.random() * 5)
console.log("Random integer between 0 and 4:", Math.floor(Math.random() * 5))

// Array Destructuring
var students = ["Alice", "Bob", "Charlie",];
var [student1, student2, student3] = students;
console.log("destructured students:", student1, student2, student3); 
console.log("first student:", student1);    
console.log("second student:", student2);
console.log("third student:", student3);
var numbers = [1, 2, 3, 4, 5, 6.7, 8, 9, 10];
var [num1, num2 , num3, ...othernumbers] = numbers;
console.log("destructured numbers:", num1, num2, num3, othernumbers);
console.log("first number:", num1);
console.log("second number:", num2);
console.log("third number:", num3);
console.log("other numbers:", othernumbers);
console.log(othernumbers.toString());
// Question 130: Explain how to export a function from one JavaScript file and import it into another file.

import { add } from "./mathFunctions"

console.log(add(2, 3));

console.log("\n");

// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.

import { Person } from "./person";

const zohaib = new Person("Zohaib");
zohaib.greet();

console.log("\n");

// Question 132: Discuss the difference between default and named exports in JavaScript modules.

import { utilOne, utilTwo } from "./utils";

import Calculator from "./Calculator";
"use strict";
// Question 130: Explain how to export a function from one JavaScript file and import it into another file.
Object.defineProperty(exports, "__esModule", { value: true });
const mathFunctions_1 = require("./mathFunctions");
console.log((0, mathFunctions_1.add)(2, 3));
console.log("\n");
// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
const person_1 = require("./person");
const zohaib = new person_1.Person("Zohaib");
zohaib.greet();
console.log("\n");

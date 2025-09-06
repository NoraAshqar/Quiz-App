import Question from './Question.js';

export const questions = [
  new Question(
    1, 
    "How many arguments can a JavaScript function accept?", 
    ["Two", "None", "Only one", "Unlimited"], 
    "Unlimited"
),
  new Question(2,
     "What is 'Abstraction' in the context of OOP?", 
     [
    "The ability to inherit properties from multiple classes.",
    "Converting an object into a JSON string.",
    "The process of creating detailed, complex classes.",
    "Hiding the complex implementation details and showing only the essential features of an object."], 
  "Hiding the complex implementation details and showing only the essential features of an object."
),
  new Question(3, 
    "What does the extends syntax in JavaScript do?",
     [
    "Merges two classes into one",
    "Enables a class to inherit from another",
    "Creates a copy of another class",
    "Defines private fields"], 
  "Enables a class to inherit from another"
),
  new Question(4,
     "How can you append a child element to a parent element in the DOM using JavaScript?", 
     ["addElement()", "addChild()", "append()", "childAppend()"],
      "append()"
    ),
  new Question(5,
     "What is the purpose of the addEventListener() method in JavaScript?",
      [
    "To select elements by their tag name",
    "To remove an HTML element",
    "To attach an event handler to an element",
    "To change an element's class name"], 
  "To attach an event handler to an element"
),
  new Question(6, 
    "How do you call a JavaScript function named myFunction?", 
    ["call myFunction();", "run myFunction();", "execute myFunction();", "myFunction();"],
     "myFunction();"
    ),
  new Question(7,
     "Which of the following is an example of a higher-order function?",
      [
    "if (true) { console.log('Hi'); }",
    "function sayHi() { console.log('Hi'); }",
    "setTimeout(() => console.log('Hi'), 1000)",
    "const x = 5 + 3;"], 
  "setTimeout(() => console.log('Hi'), 1000)"
),
  new Question(8, 
    "True/False: Arrow functions do NOT have their own this", 
    ["True", "False" ],
     "True"
    ),
  new Question(9,
     "True/False: Can a function return another function in JavaScript?",
      ["True", "False"],
       "True"),
  new Question(10, 
    "What does the following code return? (() => 5 + 3)();",
     ["undefined", "function", "8", "NaN"], 
     "8"
    )
];
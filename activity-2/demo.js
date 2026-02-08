let a = 10;
let b = 3;

console.log("Part A: Arithmetic Operators");
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);

console.log("Without parentheses:", a + b * 2);
console.log("With parentheses:", (a + b) * 2); 

let numFive = 5;
let strFive = "5";
let numTen = 10;

console.log("\nPart B: Comparison Operators");
console.log("5 == '5':", numFive == strFive);
console.log("5 === '5':", numFive === strFive);

console.log("5 > 10:", numFive > numTen);
console.log("5 < 10:", numFive < numTen);
console.log("5 >= 5:", numFive >= numFive);
console.log("5 <= 4:", numFive <= 4);


let isAdult = true;
let hasID = false;

console.log("\nPart C: Logical Operators");
console.log("AND (&&):", isAdult && hasID);
console.log("OR (||):", isAdult || hasID);
console.log("NOT (!):", !isAdult);


let age = 20;
console.log(
    "Compound condition (age >= 18 && age < 65):",
    age >= 18 && age < 65
);

let score = 85;
let grade;

console.log("\nPart D: Conditional Statements");

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

console.log("Score:", score, "Grade:", grade);

let dayOfWeek = 2;
console.log("\nPart E: Switch Statement");

switch (dayOfWeek) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day value");
}

document.getElementById("output").textContent =
    "Check the console to see JavaScript operator and control flow examples.";

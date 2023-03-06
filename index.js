// Question 1
// Differences between mutating array method and non-mutation array method in JS and examples of each
Mutation is basically changing the array itself instead of returning a new array with the new changes.
examples;
prototype. push()
prototype. pop()
prototype. shift()
prototype. reverse()
prototype. unshift()

Non-mutating methods do not change the object after the method has been used.
examples;
prototype. slice()
prototype. filter()
prototype. map()
prototype. concat()




// Question 2
let languages = ["C#", "JavaScript", "Ruby", "PHP", "Python"];
languages.splice(5, 0, "Kotlin");
console.log(languages);

let languagesB = ["C#", "JavaScript", "Ruby", "PHP", "Python"];
languagesB.splice(3, 0, "Java");
console.log(languagesB);

let languagesC = ["C#", "JavaScript", "Ruby", "PHP", "Python"];
languagesC.shift();
console.log(languagesC);

let languagesD = ["C#", "JavaScript", "Ruby", "PHP", "Python"];
languagesD.unshift("Scala", "Swift");
console.log(languagesD);

let languagesE = ["C#", "JavaScript", "Ruby", "PHP", "Python"];
languagesE.splice(3,1, "Go", "Rust");
console.log(languagesE );

// Question 3
let fruit = ["apple","mango","banana"];
function changedFruit( fruit) {
    fruit[2] = "orange";
    return fruit;
}
let newFruit = fruit;
console.log (changedFruit(newFruit));

// // Question 4
function number(a,b,c,d){
    return Math.max(50,9,45,0,1)
}
console.log(number(Math.max));

// // Question 5
function valTimeIndex(num){
    return num.map((val,index) => val*index);
}

let arrayNumbers = [1,2,3,4];
let multiplier = valTimeIndex(arrayNumbers);
console.log(multiplier);
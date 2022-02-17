let string = "Java is 2 JavaScript what 4 Car is to 9333 Carpet";
console.log(string)

// let regex = /^J t$/g;

// let result = regex.test(string)
// console.log(result)

// let pattern = /java/ig;

// let result = string.match(pattern);
// console.log(result);

// let pattern = /[0-9]+/g

// let result = string.match(pattern)
// console.log(result)


// let names = "Sultan Osama Jadi Rahsh Sara"

// let pattern = /[A-Z]/g;

// let result = names.match(pattern)
// let sNamePattern = /[S](\w)+/g;
// let sNames = names.match(sNamePattern)
// console.log(result)
// console.log(sNames)


// let pattern = /(\s)/g;

// let result = string.replace(pattern, '--')
// console.log(result);



let pattern = /J/g;
let result = string.replace(pattern, 'S')
console.log(result);

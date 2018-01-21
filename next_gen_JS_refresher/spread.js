const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4]

console.log(newNumbers);


// DOESN'T WORK WITHOUT BABEL
// const person = {
//     name: 'Logan'
// };

// const newPerson = {
//     ...person,
//     age: 35
// }

// like saying "filter will filter a list of arguments, whose length
// does not matter. it will get filtered in by sorting through
// each element and returning true if that element is equal to 1, so
// when it returns true, the filter function will return that element"
const filter = (...arguments) => arguments.filter(el => el === 1);

// OR

// const filter = (...arguments) => {
//     return arguments.filter((el) => {
//         return el === 1;
//     });
// };

console.log(filter(1,2,3));


// DESTRUCTURING //
    // Array destructuring //
[a,b] = ['Logan', 'Tiffany'];
console.log("a: ", a);
console.log("b: ", b);

const numsArray = [1,2,3,4,5];
[num1, num2] = numsArray;
console.log(num1, num2);
[ , ,num3, ,num5] = numsArray;
console.log(num3, num5);


    // Object destructuring // (doesn't work without Babel yet)
// {name} = {
//     name: 'Logan',
//     age: 35
// }

// console.log("name: ", name);
// console.log("age: ", age); // undefined



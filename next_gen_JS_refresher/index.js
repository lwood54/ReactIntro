// import mathHelp from './extraMath.js';

// NOTE: I think I could use import statements to
// create default templates for the manipulative app
// export default manipCategories

// function printName (name) {
//     console.log(name);
// }


const printName = (name)  => {
        console.log(name);
    };

printName('Logan');

const multiply = (num) => {
    return num * 2;
}
console.log(multiply(4));

const multiplyEfficient = (num) => num * 2;
console.log(multiplyEfficient(6));

// console.log(mathHelp.addTwoNums(5,8));

class Human {
    constructor() {
        this.gender = 'male';
    }

    printGender() {
        console.log((this.gender));
    }
}

class Person extends Human {
    constructor() {
        // if you use the constructor from the class that you are extending form, you must supply the 'super()' command
        super();
        this.name = 'Logan';
    }
    printMyName() {
        console.log(this.name);
        
    }
}

const person = new Person();
person.printMyName();
person.printGender();


// A MORE MODERN WAY OF WRITING classes
// NOTE: This will not work without running it with 'Babel'
// class Human {
//     gender = 'male';
//     printGender = () => {
//         console.log(this.gender);
        
//     }
// }

// class Person extends Human {
//     name = 'Logan';

//     printMyName = () => {
//         console.log(this.name);
//     }
// }

// const person = new Person();
// person.printMyName();
// person.printGender();
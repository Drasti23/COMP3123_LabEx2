// Name : Drasti Parikh
// Student Id : 101419828

// Exercise : 1

const greeter = (myArray, counter) => {
    const greetText = 'Hello ';
    for (const item of myArray) {
      console.log(`${greetText} ${item}`);
    }
  };
  
  greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);
  

// Exercise : 2

  function capitalize(str) {
    const [first, ...rest] = str;
    
    return first.toUpperCase() + rest.join('').toLowerCase();
  }
  
  console.log(capitalize('fooBar')); 
  console.log(capitalize('nodeJs')); 

// Exercise : 3

  const colors = ['red', 'green', 'blue'];
  const capitalizedColors = colors.map(capitalize);
  console.log(capitalizedColors);

// Exercise : 4

var values = [1, 60, 34, 30, 20, 5];

var filterLessThan20 = values.filter(function(value) {
  return value < 20;
});

console.log(filterLessThan20); 

// Exercise : 5

var array = [1, 2, 3, 4];

var calculateSum = array.reduce((acc, val) => acc + val, 0);

var calculateProduct = array.reduce((acc, val) => acc * val, 1);

console.log(calculateSum); 
console.log(calculateProduct); 

// Exercise : 6

class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    details() {
        return `Model: ${this.model} Engine ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);  
        this.balance = balance;
    }

    info() {
        return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
    }
}

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details()); 

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info()); 

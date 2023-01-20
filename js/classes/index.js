class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const john = new Person('john', 32);
console.log(john.name);







class Animal {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }
  getDescription() {
      return this.name + ', ' + this.age + ' years old, with ' + this.legs + ' legs';
  }
}

class Dog extends Animal {
  constructor(name, age) {
      super(name, age);
      this.legs = 4;
  }
}

class Duck extends Animal {
  constructor(name, age) {
      super(name, age);
      this.legs = 2;
  }
}

const bob = new Dog('Bob', 4);
const jack = new Duck('Jack', 2);
console.log(bob.getDescription()); // Bob, 4 years old, with 4 legs
console.log(jack.getDescription()); // Jack, 2 years old, with 2 legs
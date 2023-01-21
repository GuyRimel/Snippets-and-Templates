function Animal(name, age) {
  this.name = name; // name is public
  this.age = age; // age is public

  const ageText = this.age + ' years old'; // ageText isn't public

  // getAgeText isn't public - you can only call it inside of the class!
  function getAgeText() {
    return this.age + ' years old';
  }

  this.getDescription = function () {
    return this.name + ', ' + getAgeText();
  }
}
const bob = new Animal('Bob', 4);
console.log(bob.getDescription()); // Bob, 4 years old
console.log(bob.name); // "Bob"
console.log(bob.age); // 4
console.log(bob.ageText); // undefined - this isn't accessible!

// DOWNSIDES:
// You can’t extend it to create subclasses.

// All functions are defined on every instance, which can create a lot of overhead. If you create thousands of objects, this can result in a noticeable decrease in your application's performance.

// If you don’t need inheritance, and if you’ll only create a few instances of a class, this approach is perfectly valid and pretty easy to write and comprehend; however, in other cases, it may not be the most viable solution and will require the use of a prototype chain.

Animal.prototype.getDescription = function () {
  return this.name + ', ' + this.age + ' years old';
}

console.log(bob.getDescription())

// This will work exactly the same as before, allowing you to call bob.getDescription. You can specify as many functions on the prototype as you want, including ones you can use to implement inheritance. You do this with the call function:

function Dog(name, age) {
   Animal.call(this, name, age);
   this.legs = 4;
}

// See above how the Animal function has been called with the name and age parameters? The call function allows you to execute a function while pretending it was called at a defined place. In this case, you want to pretend to call it inside of the Dog function, so you pass this to the call function as the first parameter. Afterwards, you can specify additional properties/functions of your own or overwrite existing ones.

// This still leaves you with one problem, however, and that’s the fact that your Dog class prototype is still empty. So far, you’ve only defined your Animal prototype, so Dog will still be lacking the methods defined on the Animal prototype. To fix this, you need to change the prototype of the Dog class:

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Now, the Dog prototype will have all the functions of the Animal prototype, and, afterwards, you can add/overwrite prototype functions for Dog.

// Whoa, that Seems Pretty Complicated…

// ...and that’s because it is! JavaScript, along with the whole prototype system itself, wasn’t really designed for object-oriented programming. In fact, you could say allowing this programming style is actually a “misuse” of JavaScript; however, there’s currently no other way to realize real inheritance with JavaScript. If you want to write proper OOP code, you’re stuck working with prototype objects


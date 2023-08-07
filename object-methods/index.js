// "use strict";

function generatePerson() {
  return {
    name: "Yurii",
    age: 24,
    phone: "+123456789",
    greet() {
      console.log(this.name);
    },
  };
}

function showObjectPropertyDescription(obj) {
  console.log("\n\u001b[1;32m Property Description: \u001b[0m");
  console.log(Object.getOwnPropertyDescriptors(obj));
}

function makeObjectImmutable(object) {
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      Object.defineProperty(object, key, { writable: false });
    }
  }

  return object;
}

// Example 1
const person1 = makeObjectImmutable(generatePerson());
// Won't assign to read only property 'name'
person1.name = "David"; // Throws an error in strict mode
console.log(`The name property is the same: ${person1.name}`);
showObjectPropertyDescription(person1);

// Example 2
const person2 = generatePerson();
// Make "greet" method non-enumerable to exclude it from for in loop
Object.defineProperty(person2, "greet", { enumerable: false });
for (const key in person2) {
  console.log(`${key}: ${person2[key]}`);
}
showObjectPropertyDescription(person2);

// Example 3
const person3 = generatePerson();
// Make phone propery none-configurable
Object.defineProperty(person3, "phone", { configurable: false });
// 'phone' property won't be deleted
delete person3.phone; // Throws an error in strict mode
showObjectPropertyDescription(person3);

// Example 4
const person4 = generatePerson();
// Freezing an object prevents extensions and makes existing properties non-writable and non-configurable
Object.freeze(person4);
person4.age = 30; // Throws an error in strict mode
console.log(person4);
showObjectPropertyDescription(person4);

// Example 5
const person5 = generatePerson();
// Prevents adding new properties to an object and reassigning the prototype.
Object.preventExtensions(person5);

try {
  Object.defineProperty(person5, 'email', {
    value: "example@email.com",
  });
} catch (e) {
  console.log(e); // Error: Cannot define property email, object is not extensible
}

// Example 6
const person6 = generatePerson();
// Sealing an object prevents extensions and makes existing properties non-configurable, but writable
Object.seal(person6);

person6.age = 30;
console.log(person6.age); // Expected output: 30

delete person6.age; // Cannot delete when sealed
console.log(person6.age);
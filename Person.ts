class Person {
  constructor(private name: string, private age: number) {
  }

  greeting() {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
  }
}

const hiromu = new Person('hiromu', 25);
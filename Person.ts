class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
  }
}

const hiromu = new Person('hiromu', 25);
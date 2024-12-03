class Person {
  constructor(protected name: string, protected age: number) {
  }

  greeting() {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
  }

  incrementAge() {
    this.age += 1;
  }
}

const hiromu = new Person('hiromu', 25);

class Teacher extends Person {
  constructor(name: string, age: number, public _subject: string) {
    super(name, age);
  }

  get subject() {
    return 'Music';
  }

  greeting() {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}.`);
  }
}

const teacher = new Teacher('Sumiyoshi', 26, 'Math');
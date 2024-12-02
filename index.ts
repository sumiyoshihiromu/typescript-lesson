let hello: string = 'hello hiromu';
console.log(hello);

function add(a: number, b:number): number {
  return a + b;
}

let hasValue: boolean = true;
let count: number = 10;
let back: string = `hello`;
const person: {
  name: string;
  age: number;
} = {
  name: 'hiromu',
  age: 21
}

console.log(person.age);

const fruits: string[] = ['Apple', 'Banana', 'Grape'];
console.log(fruits[1]);

const book: [string, number, boolean] = ['business', 1500, false];

enum cofeeSize {
  SHORT = 'SHORT',
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTI = 'VENTI'
}

const coffee = {
  hot: true,
  size: cofeeSize.TALL
}

let unionType: number | string = 10;
unionType = 'hello';

type ClothSize = 'small' | 'medium' | 'large';
let clothSize: ClothSize = 'large';
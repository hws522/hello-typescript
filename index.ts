let myName: string = 'string';
let myAge = 123;
let myCountry = 'korea';
let group = {
  name: '123',
  age: 123,
};

let project: { member: string[]; days: number; started: boolean } = {
  member: ['kim', 'park'],
  days: 30,
  started: true,
};

let 어레이: (number | string)[] = [1, '2', 3];
let 오브젝트: { data: number | string } = { data: '123' };

let user = 'kim';
let age: undefined | number = undefined;
let married = false;
let 철수: (string | undefined | number | boolean)[] = [user, age, married];

let 학교: { score: (number | boolean)[]; teacher: string; friend: string[] | string } = {
  score: [100, 97, 84],
  teacher: 'Phil',
  friend: 'John',
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];

/***********************************************************************/

const nameFunc = (name?: string) => {
  if (typeof name === 'string') console.log(`hi ${name}`);
  console.log('no name.');
};

const toStringFunc = (x: string | number) => {
  if (typeof x === 'string') console.log(x.length);
  console.log(x.toString().length);
};

const marryPossibleFunc = (money: number, home: boolean, charm: string): string | void => {
  let result = 0;
  result += money;
  if (home) result += 500;
  if (charm === '상') result += 100;

  if (result >= 600) return '결혼가능';
};

console.log(marryPossibleFunc(700, false, '중'));
console.log(marryPossibleFunc(100, false, '상'));

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

// console.log(marryPossibleFunc(700, false, '중'));
// console.log(marryPossibleFunc(100, false, '상'));

/***********************************************************************/

/**
(숙제1) 숫자여러개를 array 자료에 저장해놨는데

가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.

이걸 클리닝해주는 함수가 필요합니다. 

클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면

[1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
 */

const cleaning = (cleanArr: (string | number)[]) => {
  return console.log(cleanArr.map((ele) => Number(ele)));
};

// cleaning(['1', 2, '3']);

/*
(숙제2) 다음과 같은 함수를 만들어보십시오.

let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }

지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다. 

과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고

과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다. 

철수쌤같은 선생님 object 자료를 집어넣으면 

그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.

그리고 타입지정도 엄격하게 해보도록 합시다. 
*/

const subjectFunc = (subjectObj: { subject: string | string[] }) => {
  if (typeof subjectObj.subject === 'string') return subjectObj.subject;
  else if (typeof subjectObj.subject === 'object') return subjectObj.subject.pop();
};

let 철수쌤 = { subject: 'math' };
let 영희쌤 = { subject: ['science', 'english'] };
let 민수쌤 = { subject: ['science', 'art', 'korean'] };
let 길동쌤 = { object: 'korean' };

// console.log(subjectFunc(철수쌤));
// console.log(subjectFunc(영희쌤));
// console.log(subjectFunc(민수쌤));
// console.log(subjectFunc(길동쌤));

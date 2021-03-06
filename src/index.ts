// let myName: string = 'string';
// let myAge = 123;
// let myCountry = 'korea';
// let group = {
//   name: '123',
//   age: 123,
// };

// let project: { member: string[]; days: number; started: boolean } = {
//   member: ['kim', 'park'],
//   days: 30,
//   started: true,
// };

// let 어레이: (number | string)[] = [1, '2', 3];
// let 오브젝트: { data: number | string } = { data: '123' };

// let user = 'kim';
// let age: undefined | number = undefined;
// let married = false;
// let 철수: (string | undefined | number | boolean)[] = [user, age, married];

// let 학교: { score: (number | boolean)[]; teacher: string; friend: string[] | string } = {
//   score: [100, 97, 84],
//   teacher: 'Phil',
//   friend: 'John',
// };
// 학교.score[4] = false;
// 학교.friend = ['Lee', 학교.teacher];

// /***********************************************************************/

// const nameFunc = (name?: string) => {
//   if (typeof name === 'string') console.log(`hi ${name}`);
//   console.log('no name.');
// };

// const toStringFunc = (x: string | number) => {
//   if (typeof x === 'string') console.log(x.length);
//   console.log(x.toString().length);
// };

// const marryPossibleFunc = (money: number, home: boolean, charm: string): string | void => {
//   let result = 0;
//   result += money;
//   if (home) result += 500;
//   if (charm === '상') result += 100;

//   if (result >= 600) return '결혼가능';
// };

// // console.log(marryPossibleFunc(700, false, '중'));
// // console.log(marryPossibleFunc(100, false, '상'));

// /***********************************************************************/

// /**
// (숙제1) 숫자여러개를 array 자료에 저장해놨는데

// 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.

// 이걸 클리닝해주는 함수가 필요합니다.

// 클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면

// [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
//  */

// const cleaning = (cleanArr: (string | number)[]) => {
//   return console.log(cleanArr.map((ele) => Number(ele)));
// };

// // cleaning(['1', 2, '3']);

// /*
// (숙제2) 다음과 같은 함수를 만들어보십시오.

// let 철수쌤 = { subject : 'math' }
// let 영희쌤 = { subject : ['science', 'english'] }
// let 민수쌤 = { subject : ['science', 'art', 'korean'] }

// 지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다.

// 과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고

// 과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다.

// 철수쌤같은 선생님 object 자료를 집어넣으면

// 그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.

// 그리고 타입지정도 엄격하게 해보도록 합시다.
// */

// const subjectFunc = (subjectObj: { subject: string | string[] }) => {
//   if (typeof subjectObj.subject === 'string') return subjectObj.subject;
//   else if (typeof subjectObj.subject === 'object') return subjectObj.subject.pop();
// };

// let 철수쌤 = { subject: 'math' };
// let 영희쌤 = { subject: ['science', 'english'] };
// let 민수쌤 = { subject: ['science', 'art', 'korean'] };
// let 길동쌤 = { object: 'korean' };

// // console.log(subjectFunc(철수쌤));
// // console.log(subjectFunc(영희쌤));
// // console.log(subjectFunc(민수쌤));
// // console.log(subjectFunc(길동쌤));

// /*
// (숙제1) object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
// */

// type testType1 = { test1: string; test2: string };
// type testType2 = { test2: string; test3: number };
// type resultType = testType1 & testType2;

// const numbers: resultType = { test1: 'sdf', test2: '234', test3: 123 };

// // console.log(numbers);

// /*
// (숙제2) 다음 조건을 만족하는 타입을 만들어봅시다.

// 1. 이 타입은 object 자료형이어야합니다.

// 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다.

// 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.

// 4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.

// type alias로 만들어보셈
// */

// type colorSizePositionType = { color?: string; size: number; readonly position: number[] };

// let 테스트용변수: colorSizePositionType = {
//   size: 123,
//   position: [1, 2, 3],
// };

// // console.log(테스트용변수);

// /*
// 숙제3) 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오.

// 1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }

// 2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.

// 3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오.
// */

// type checkType = { name: string; phone: number; email: string };

// /*
// (숙제4). 다음을 만족하는 type alias를 만들어보십시오.

// 1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.

// 2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다.

// 3. 멋있게 숙제2에서 만들어둔  type alias를 재활용해봅시다.
// */

// type checkType1 = { name: string; phone: number; email?: string; over20: boolean };

// const User: checkType1 = {
//   name: '123',
//   phone: 123,
//   over20: true,
// };

// // console.log(User);

// /**
//  * 1. 가위 바위 보 중 1개 입력가능
//  * 2. 가위 바위 보 만 들어올 수 있는 array 를 return.
//  */

// // function 가위바위보 (a: '가위' | '바위'| '보') : ('가위' | '바위'| '보')[]{
// //   let result = [];
// //   if(a === '가위') {result.length = 0; result.push('바위');}
// //   else if(a === '바위') {result.length = 0; result.push('보');}
// //   else {result.length = 0; result.push('가위');}

// //   return result;
// // }

// // console.log(가위바위보('가위'))
// // console.log(가위바위보('바위'))
// // console.log(가위바위보('보'))

// /***********************************************************************/

// /**
// - (숙제1) 위 코드에서 회원정보라는 변수에 타입지정 알아서 해보십시오.

// - plusOne이라는 속성은 함수여야하고, 숫자를 넣어서 숫자를 뱉는 함수여야합니다.

// - changeName이라는 속성은 함수여야하고, 아무것도 return하면 안됩니다.

// - type 키워드를 쓰든 말든 알아서 합시다.
//  */

// type funcAlias = {
//   name: string;
//   age: number;
//   plusOne: (a: number) => number;
//   changeName: () => void;
// };

// let 회원정보: funcAlias = {
//   name: 'kim',
//   age: 30,
//   plusOne(x) {
//     return x + 1;
//   },
//   changeName: () => {
//     console.log('안녕');
//   },
// };
// // console.log(회원정보.plusOne(1));
// // console.log(회원정보.changeName());

// /**
//  * (숙제2) 다음 함수2개를 만들어보고 타입까지 정의해보십시오.

// - cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.

// - removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다.

// - 함수에 타입지정시 type alias를 꼭 써보도록 합시다.

// 물론 문자제거 하는 방법을 모른다면 구글검색이 필요합니다.
//  */
// type aliasFunc = (a: string) => string;
// type aliasFunc2 = (a: string) => number;

// type CutType = (x: string) => string;

// const cutZero: aliasFunc = (a) => {
//   return a.indexOf('0') !== -1 ? a.substring(1) : a;
// };

// // console.log(cutZero('0123'));

// const removeDash: aliasFunc2 = (a) => {
//   return a.indexOf('-') !== -1 ? Number(a.replace(/-/g, '')) : Number(a);
// };

// // console.log(removeDash('123-1'));

// /**
//  * (숙제3) 함수에 함수를 집어넣고 싶습니다.

// 숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다.

// 이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면

// 1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.

// 2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.

// 3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다.

// 이 함수는 어떻게 만들면 될까요?

// 둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.
//  */

// const practiceFunc = (a: string, b: aliasFunc, c: aliasFunc2) => {
//   console.log(removeDash(cutZero(a)));
// };

// // practiceFunc('010-1111-2222', cutZero, removeDash)

// /***********************************************************************/

// /**
//  * (숙제1) 버튼을 누르면 이미지를 바꿔봅시다.
//  */

// // let changeImage = document.querySelector('#image');
// // if(changeImage instanceof HTMLImageElement) changeImage.src = 'new.jpg';
// /**
//  *
//  * (숙제2) 바꾸고 싶은 html 요소가 많습니다.
//  * 3개의 링크가 있는데 이 요소들의 href 속성을 전부 https://kakao.com으로 바꾸고 싶은 겁니다.
// 자바스크립트 코드를 어떻게 짜야할까요?
//  */

// // let changeLink = document.querySelectorAll('.naver');
// // changeLink.forEach(ele => {
// //   if(ele instanceof HTMLAnchorElement) ele.href = 'https://kakao.com';
// // })

// /***********************************************************************/

// /**
//  * (숙제1) Car 클래스를 만들고 싶습니다.

// 1. 대충 { model : '소나타', price : 3000 } 이렇게 생긴 object를 복사해주는 class를 만들어보십시오.

// 2. 그리고 복사된 object 자료들은 .tax() 라는 함수를 사용가능한데 현재 object에 저장된 price의 10분의1을 출력해주어야합니다.

// 3. model과 price 속성의 타입지정도 알아서 잘 해보십시오. tax() 함수의 return 타입도요.
//  */

// class Car {
//   model: string;
//   price: number;
//   constructor(model: string, price: number) {
//     this.model = model;
//     this.price = price;
//   }
//   tax(): number {
//     return this.price / 10;
//   }
// }

// let a = new Car('소나타', 10000);

// // console.log(a.tax())

// /**
//  * (숙제2) class인데 파라미터가 잔뜩 들어가는 class Word를 만들어봅시다.

// 1. object 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면

// 2. 숫자는 전부 object 안의  num 속성 안에 array 형태로 저장되고

// 3. 문자는 전부 object 안의 str 속성 안에 array 형태로 저장되는 class를 만들어봅시다.

// 4. class 만들 때 넣을 수 있는 숫자와 문자 갯수는 일단 제한은 없습니다. 그리고 타입 빼먹지 마셈

// (동작 예시)

// let obj = new Word('kim', 3, 5, 'park');
// console.log(obj.num) //[3,5]
// console.log(obj.str) //['kim', 'park']
//  */

// class Word {
//   str: string[] = [];
//   num: number[] = [];

//   constructor(...rest: (string | number)[]) {
//     rest.forEach((ele) => {
//       if (typeof ele === 'string') this.str.push(ele);
//       else this.num.push(ele);
//     });
//   }
// }

// // let obj = new Word('kim', 3, 5, 'park');
// // console.log(obj.num) //[3,5]
// // console.log(obj.str) //['kim', 'park']

// /***********************************************************************/
// /*
// (숙제1) interface 이용해서 간단하게 타입을 만들어봅시다

// let 상품 = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }
// 이런 변수가 있는데 interface 키워드로 타입지정 이쁘게 하고 싶습니다. 어떻게 코드를 짜면 될까요?

// 무슨 타입일지는 알아서 기입합시다.
// */

// interface PracticeInterface {
//   brand: string;
//   serialNumber: number;
//   model: string[];
// }
// let 상품: PracticeInterface = { brand: 'samsung', serialNumber: 1360, model: ['TV', 'phone'] };

// /*
// (숙제2) array 안에 object 여러개가 필요합니다.

// 쇼핑몰 장바구니를 구현하려고 하는데

// let 장바구니 = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ]
// 이렇게 생긴 object들이 잔뜩 들어갈 수 있는 array는 어떻게 타입을 지정해야할까요?

// 오늘 배운 interface 문법을 써봅시다.
// */

// interface Practice2Interface {
//   product: string;
//   price: number;
// }

// let 장바구니: Practice2Interface[] = [
//   { product: '청소기', price: 7000 },
//   { product: '삼다수', price: 800 },
// ];

// /*
// (숙제3) 위에서 만든 타입을 extends 해봅시다.

// 갑자기 서비스가 업데이트되어서 일부 상품은 card 속성이 들어가야합니다.

// { product : '청소기', price : 7000, card : false }
// 위에서 만든 interface를 extends 해서 이 object의 타입을 만들어보십시오.
// */
// interface Practice3Interface extends Practice2Interface {
//   card: boolean;
// }
// let 장바구니2: Practice3Interface[] = [{ product: '청소기', price: 7000, card: false }];

// /*
// (숙제4) object 안에 함수를 2개 넣고 싶은데요

// 1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다.

// 2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다.

// 이 object 자료를 어떻게 만들면 될까요?

// interface를 이용해서 object에 타입지정도 해보십시오.
// */

// interface Practice4Interface {
//   plus: (a: number, b: number) => number;
//   minus: (a: number, b: number) => number;
// }

// let obj: Practice4Interface = {
//   plus(a, b) {
//     return a + b;
//   },
//   minus(a, b) {
//     return a - b;
//   },
// };

/***********************************************************************/

/**
let person = { student : true, age : 20 }

function 함수({student, age}){
  console.log(student, age)
}
함수({ student : true, age : 20 })
 * Q. 위의 함수 파라미터에 타입지정해보도록 합시다 어떻게 하게요

힌트는 object처럼 생긴건 항상 object처럼 타입지정하면 됩니다. 알아서 해보십시오
 */

// let person = { student: true, age: 20 };

// function 함수({ student, age }: { student: boolean; age: number }) {
//   console.log(student, age);
// }
// // 함수({ student: true, age: 1 });

// /**
//  * (숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.

// 최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다.

// (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.

// (조건2) Math.max() 사용금지 반복문이나 쓰셈
//  */

// const maxReturnFunc = (...params: number[]): number => {
//   return Math.max(...params);
// };

// // console.log(maxReturnFunc(6, 3, 7, 2));

// /**
//  * (숙제2) 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.
//  * 함수( { user : 'kim', comment : [3,5,4], admin : false } )
//  */

// const 함수ParamsObject = ({ user, comment, admin }: { user: string; comment: number[]; admin: boolean }) => {
//   console.log(user, comment, admin);
// };

// // 함수ParamsObject({ user: 'kim', comment: [3, 5, 4], admin: false });

// /**
// (숙제3) 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.
// 함수( [40, 'wine', false] )

// (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.

// (조건2) 함수실행시 입력한 파라미터들을 전부 콘솔창에 출력해줘야합니다.
//  */

// type practice4Arr = (number | string | boolean)[];

// const practice4Func = ([a, b, c]: practice4Arr) => {
//   console.log([a, b, c]);
// };

// practice4Func([40, 'wine', false]);

/***********************************************************************/

/**
 * (숙제1) 다음 x, y, z 속성의 특징을 설명해보십시오.
 class User {
  private static x = 10;
  public static y = 20;
  protected z = 30;
}
 */

//* x : private static 속성으로 User 클래스 내에서만 수정할 수 있으며, User 자식 클래스에서는 사용할 수 없고, User.x 로 접근 가능하다.
//* y : public static 속성으로 User 클래스 뿐만 아니라 외부에서도 수정할 수 있으며, User 자식 클래스에서는 사용할 수 없고, User.y 로 접근 가능하다.
//* z : protected 속성으로 User 클래스 내에서 사용할 수 있으며, User 클래스에서 확장된 자식 클래스에서도 사용 가능하다.

/**
 * (숙제2) x 속성에 숫자를 더해주는 함수가 필요합니다.
 class User {
  private static x = 10;
  public static y = 20;
}
User.addOne(3) //이렇게 하면 x가 3 더해져야함
User.addOne(4) //이렇게 하면 x가 4 더해져야함
User.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함
 */

// class User {
//   private static x = 10;
//   public static y = 20;
//   static addOne = (a: number) => {
//     return User.x += a;
//   }
//   static printX = () => {
//     return console.log(User.x);
//   }
// }

// User.addOne(5);
// User.printX();

/**
 * (숙제3) 이런거 어떻게 만들게요
 let 네모 = new Square(30, 30, 'red');
네모.draw()
네모.draw()
네모.draw()
네모.draw()
이렇게 네모.draw()를 할 때마다

index.html에 가로 30px, 세로 30px, 배경색이 'red' 의 <div> 박스가

가로 400px 세로 400px 공간 안에 무작위로 배치되어야합니다.
 */

// class Square {
//   x: number;
//   y: number;
//   color: string;
//   constructor(x: number, y: number, color: string) {
//     this.x = x;
//     this.y = y;
//     this.color = color;
//   }
//   draw = () => {
//     let randomNumber = Math.random();
//     let x = this.x;
//     let y = this.y;
//     let color = this.color;

//     let result = `
//     <div style="position:relative;
//       top:${randomNumber * 400}px;
//       left:${randomNumber * 400}px;
//       width:${x}px;
//       height : ${y}px;
//       background:${color}"></div>
//     `;
//     // document.body.insertAdjacentHTML('beforeend', result);
//   }
// }
// class Square {
//   constructor(public width: number, public height: number, public color: string) {
//   }
//   draw() {
//     let a = Math.random();
//     let square = `<div style="position:relative;
//       top:${a * 400}px;
//       left:${a * 400}px;
//       width:${this.width}px;
//       height : ${this.height}px;
//       background:${this.color}"></div>`;
//     document.body.insertAdjacentHTML('beforeend', square);
//   }
// }


// let 네모 = new Square(30, 30, 'red');
// 네모.draw()
// 네모.draw()
// 네모.draw()
// 네모.draw()

/***********************************************************************/

/**
 * (숙제1) Car 그리고 Bike 타입을 만들었는데 너무 길어요
 *
(index.ts)

type Car = {
  wheel : number,
  model : string
}
interface Bike {
  wheel : 2,
  model : string
}

빨리 위 코드를 다른 파일 아무데나 저장하신 후 index.ts에서 가져와서 변수만들 때 사용해보십시오.
 */

//* (test.ts)
/*
 * export type Car = {
 *  wheel: number,
 *  model: string
 * }
 * export interface Bike {
 *  wheel: 2,
 *  model: string
 * }
 */

//* (index.ts)
/*
 * import { Car, Bike } from './test'
 * let 자동차: Car = {
 *   wheel: 4,
 *   model: 'avante'
 * }

/**
(숙제2) 너무 자주만들어 쓰는 함수가 하나 있습니다

이 함수는 파라미터로 object자료 하나를 선택적으로 집어넣을 수 있고

아무것도 return 해주지 않아야합니다.

함수 만들 때마다 여기에 타입 일일이 붙이기 귀찮아서 그런데

이 타입을 다른 파일에 저장해두고 import 해와서 함수 만들 때마다 쓰려면 어떻게 코드를 짜야할까요
 */

//* (test.ts)
/*
 * export type TypeFunc = (x? : object) => void
 */

/**
 * (숙제3) 타입 중복이 너무 많이 발생합니다.
type Dog = string;
interface Dog { name : string };

let dog1 :Dog = 'bark';
let dog2 :Dog = { name : 'paw' }
위 코드에서 에러를 없애야합니다. 어떻게 코드를 짜면 될까요?

(조건) type Dog, interface Dog의 타입이름 변경 금지, 파일 분할 금지
 */

//* (test.ts)

/*
 * namespace practiceNs1 {
 *  export type Dog = string;
 * }
 * namespace practiceNs2 {
 *  export interface Dog = {name : string};
 * }
 *
 * let dog1 : practiceNs1 = 'bark';
 * let dog2 : practiceNs2 = {name : 'paw'};
 */

/**
 * (숙제1) 문자를 집어넣으면 문자의 갯수, array를 집어넣으면 array안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까요?
 * (동작 예시)

함수<string>('hello') 이렇게 사용하면 콘솔창에 5가 나와야합니다.

함수<string[]>( ['kim', 'park'] ) 이렇게 사용하면 콘솔창에 2가 나와야합니다.
 */

// const 함수 = <T extends string | string[]>(params: T): void => {
//   console.log(params.length);
// }

// 함수<string>('hello')
// 함수<string[]>(['kim', 'park'])

// /**
//  * (숙제2) Animal 이라는 타입이 있습니다.
//  * interface Animal {
//   name : string;
//   age : number
// }

// let data = '{"name" : "dog", "age" : 1 }'
// 그리고 data라는 변수도 있습니다. object처럼 생겼지만 따옴표 쳐진 JSON 자료입니다.

// data라는 JSON 자료를 object { } 자료로 변환을 해서 return 해주는 함수를 만들어보십시오.

// 근데 변환된 object의 타입은 Animal이 되었으면 좋겠는데 어떻게 코드를 짜면 될까요?

// 오늘 배운 Generic을 이용해서 구현해보도록 합시다.

// (동작 예시)

// 함수<Animal>(data) 이렇게 쓰면 이 자리에 { name : 'dog' , age : 1 } 이런 object 자료가 남아야합니다. 근데 타입은 Animal임
//  */

// interface Animal {
//   name: string;
//   age: number
// }

// let data = '{"name" : "dog", "age" : 1 }'

// const jsonToObj = <T>(params: string): T => {
//   return JSON.parse(params);
// }

// const result = jsonToObj<Animal>(data);
// console.log(result)

// /**
//  * class 를 수정해봅시다.
// class Person {
//   name;
//   constructor(a){
//     this.name = a;
//   }
// }
// let a = new Person('어쩌구');
// a.name //any 타입이 되었넹

// 지금 만든 class는 new Person('어쩌구') 라고 분명 문자를 집어넣었는데 any 타입이 name 속성에 부여됩니다.

// 이게 싫어서 파라미터에 string을 집어넣으면 string 타입

// number를 집어넣으면 number 타입

// string[]을 집어넣으면 string[] 타입이 되게 하려면 위의 코드를 어떻게 수정해야할까요?

// 오늘 배운 Generic을 이용해봅시다.
//  */

// class Person<T> {
//   name: T;
//   constructor(a: T) {
//     this.name = a;
//   }
// }
// let a = new Person([1, 2, 3]);
// a.name //any 타입이 되었넹 

/***********************************************************************/


// /**
//  * (숙제1) 여러분이 최근에 사먹은 음식의 1. 이름 2. 가격 3. 맛있는지여부를 array 자료에 담아보고 타입지정까지 해보십시오.

// 오늘 배운 tuple 타입으로 타입지정합시다. 

// 쉬워서 답은 생략합니다. 



// (예시) [ '동서녹차', 4000, true ] 이런 자료 만들고 타입지정하라는 소리입니다.
//  */

// const arr: [string, number, boolean] = ['동서녹차', 4000, true];

// /**
//  * (숙제2) 이렇게 생긴 자료는 타입지정 어떻게 해야할까요?

// let arr = ['동서녹차', 4000, true, false, true, true, false, true]
// 몇개인지는 모르겠지만 true와 false가 셋째 자료부터 잔뜩 들어올 수 있다고 합니다. 

// tuple 타입과 spread 연산자를 써보도록 합시다. 
//  */

// const arr2: [string, number, ...boolean[]] = ['동서녹차', 4000, true, false, true, true, false]

// /**
//  * (숙제3) 함수에 타입지정을 해보도록 합시다.

// function 함수(){

// }
// 1. 이 함수의 첫째 파라미터는 문자,

// 2. 둘째 파라미터는 boolean,

// 3. 셋째 파라미터부터는 숫자 또는 문자가 들어와야합니다. 

// 그럼 함수에 파라미터를 어떻게 만들고 타입지정은 또 어떻게 해야할까요? 

// 오늘 배운 tuple 타입과 rest parameter를 사용해봅시다.
//  */

// function 함수(a: string, b: boolean, ...c: (string | number)[]) {
//   console.log(a, b, ...c)
// }

// 함수('a', true, 6, 3, '1', 4)

// /**
//  * (숙제4) 다음과 같은 문자/숫자 분류기 함수를 만들어보십시오.

// 파라미터 중 문자만 모아서 [] 에 담아주고, 숫자만 모아서 [] 에 담아주는 함수가 필요합니다.

// 문자 숫자 외의 자료는 입력불가능하고 파라미터 갯수 제한은 일단 없습니다. 

// 함수 만들어보시고 함수의 파라미터/return 타입지정도 확실하게 해봅시다. 



// (동작예시)

// 함수('b', 5, 6, 8, 'a') 이렇게 사용할 경우 이 자리에 [ ['b', 'a'], [5, 6, 8] ] 이 return 되어야합니다.
//  */

// const practiceFunc = (...params: (string | number)[]): [string[], number[]] => {
//   const stringArr: string[] = [];
//   const numberArr: number[] = [];

//   params.forEach(param => {
//     if (typeof (param) === 'string') stringArr.push(param);
//     else numberArr.push(param);
//   })

//   return [stringArr, numberArr];
// }

// console.log(practiceFunc('b', 5, 6, 8, 'a'))

/***********************************************************************/

// /**
//  * 다음 자료의 타입을 지정해보십시오.
//  let obj = {
//    model: 'k5',
//    brand: 'kia',
//    price: 6000,
//    year: 2030,
//    date: '6월',
//    percent: '5%',
//    dealer: '김차장',
//  }
//  */

// interface practiceType {
//   [key: string]: string | number
// }

// let obj: practiceType = {
//   model: 'k5',
//   brand: 'kia',
//   price: 6000,
//   year: 2030,
//   date: '6월',
//   percent: '5%',
//   dealer: '김차장',
// }

// /**
//  * 다음 object 자료의 타입을 interface 써서 만들어보십시오.
//  let obj = {
//    'font-size' : 10,
//    'secondary' : {
//      'font-size' : 12, 
//      'third' : {
//        'font-size' : 14
//      }
//    }
//  }
//  */

// interface practiceType2 {
//   'font-size': number,
//   [key: string]: practiceType2 | number
// }

// let obj2: practiceType2 = {
//   'font-size': 1,
//   'secondary': {
//     'font-size': 12,
//     'third': {
//       'font-size': 14
//     }
//   }
// }

/***********************************************************************/

// /**
//  * 다음 타입을 변환기를 돌려보아라.
//  type Bus = {
//    color :string,
//    model :boolean,
//    price :number,
//  }
//  * 모든 속성은 전부 string 또는 number 타입이어야 함
//  * 변환기를 만들어 기존 Bus 타입을 변환기 돌려서 조건을 충족하는
//  * 새로운 타입을 하나 만들어라.
//  */

// type Bus = {
//   color: string,
//   model: boolean,
//   price: number,
// }

// type TypeChanger<T> = {
//   [key in keyof T]: string | number;
// }

// type NewBus = TypeChanger<Bus>;

// let obj: NewBus = {
//   color: '노랑',
//   model: '444',
//   price: 1234,
// }

// /**
//  * object 안에 들어있는 모든 속성을
//  * string, number 이렇게 고정된 타입으로 변환해주는게 아니라
//  * 내가 원하는 타입을 입력하면 그걸로 변환해주는
//  * 범용성 좋은 변환기를 만들어라.
//  */

// type TypeChanger2<T, N> = {
//   [key in keyof T]: N;
// };

// type NewBus2 = TypeChanger2<Bus, string>;
// type NewBus3 = TypeChanger2<Bus, string[]>;

// let obj2: NewBus2 = {
//   color: "",
//   model: "",
//   price: ""
// }

// let obj3: NewBus3 = {
//   color: [],
//   model: [],
//   price: []
// }

/***********************************************************************/

/**
 * 파라미터로 array 자료를 입력하면 array 의 첫 자료의 타입을 그대로 남겨주고, 
 * array 자료가 아니라 다른걸 입력하면 any 타입을 남겨주는 타입은 어떻게 만들면 될까. 
 * 
 * let age1: FirstItem<string[]>;
 * let age2: FirstItem<number>;
 * 
 * 이러면 age1 의 타입은 string, age2 의 타입은 any 가 되어야 한다. 
 * FirstItem 이라는 타입을 알아서 만들어본다. 
 */

type FirstItem<T> = T extends any[] ? T[0] : any;

let age1: FirstItem<string[]>;
let age2: FirstItem<number>;

/**
 * 타입파라미터로 
 * 1. array 타입을 입력하면 
 * 2. array 의 첫 자료가 string 이면 string 타입을 그대로 남겨주고
 * 3. array 의 첫 자료가 string 이 아니면 unknown 을 남겨주려면 어떻게 타입을 만들까
 * 
 let age1: Age<[string, number]>;
 let age2: Age<[boolean, number]>;
 */

type Age<T> = T extends [string, ...any] ? T[0] : unknown;

let age3: Age<[string, number, string, string]>;
let age4: Age<[boolean, number]>;

/**
 * 함수 파라미터의 타입을 뽑아주는 기계를 만들어라.
 타입뽑기<(x: number) => void> // 이러면 number 가 남음
 타입뽑기<(x: string) => void> // 이러면 string 이 남음
 */

type 타입뽑기<T> = T extends (x: infer R) => void ? R : any;

type a = 타입뽑기<(x: number) => void>
type b = 타입뽑기<string>
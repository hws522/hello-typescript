var myName = 'string';
var myAge = 123;
var myCountry = 'korea';
var group = {
    name: '123',
    age: 123,
};
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
var 어레이 = [1, '2', 3];
var 오브젝트 = { data: '123' };
var user = 'kim';
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John',
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
/***********************************************************************/
var nameFunc = function (name) {
    if (typeof name === 'string')
        console.log("hi ".concat(name));
    console.log('no name.');
};
var toStringFunc = function (x) {
    if (typeof x === 'string')
        console.log(x.length);
    console.log(x.toString().length);
};
var marryPossibleFunc = function (money, home, charm) {
    var result = 0;
    result += money;
    if (home)
        result += 500;
    if (charm === '상')
        result += 100;
    if (result >= 600)
        return '결혼가능';
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
var cleaning = function (cleanArr) {
    return console.log(cleanArr.map(function (ele) { return Number(ele); }));
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
var subjectFunc = function (subjectObj) {
    if (typeof subjectObj.subject === 'string')
        return subjectObj.subject;
    else if (typeof subjectObj.subject === 'object')
        return subjectObj.subject.pop();
};
var 철수쌤 = { subject: 'math' };
var 영희쌤 = { subject: ['science', 'english'] };
var 민수쌤 = { subject: ['science', 'art', 'korean'] };
var 길동쌤 = { object: 'korean' };
var numbers = { test1: 'sdf', test2: '234', test3: 123 };
var 테스트용변수 = {
    size: 123,
    position: [1, 2, 3],
};
var User = {
    name: '123',
    phone: 123,
    over20: true,
};
var 회원정보 = {
    name: 'kim',
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log('안녕');
    }
};
var cutZero = function (a) {
    return a.indexOf('0') !== -1 ? a.substring(1) : a;
};
// console.log(cutZero('0123'));
var removeDash = function (a) {
    return a.indexOf('-') !== -1 ? Number(a.replace(/-/g, "")) : Number(a);
};
// console.log(removeDash('123-1'));
/**
 * (숙제3) 함수에 함수를 집어넣고 싶습니다.

숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다.

이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면

1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.

2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.

3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다.

이 함수는 어떻게 만들면 될까요?

둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.
 */
var practiceFunc = function (a, b, c) {
    console.log(removeDash(cutZero(a)));
};
// practiceFunc('010-1111-2222', cutZero, removeDash)
/***********************************************************************/
/**
 * (숙제1) 버튼을 누르면 이미지를 바꿔봅시다.
 */
// let changeImage = document.querySelector('#image');
// if(changeImage instanceof HTMLImageElement) changeImage.src = 'new.jpg';
/**
 *
 * (숙제2) 바꾸고 싶은 html 요소가 많습니다.
 * 3개의 링크가 있는데 이 요소들의 href 속성을 전부 https://kakao.com으로 바꾸고 싶은 겁니다.
자바스크립트 코드를 어떻게 짜야할까요?
 */
// let changeLink = document.querySelectorAll('.naver');
// changeLink.forEach(ele => {
//   if(ele instanceof HTMLAnchorElement) ele.href = 'https://kakao.com';
// })
/***********************************************************************/
/**
 * (숙제1) Car 클래스를 만들고 싶습니다.

1. 대충 { model : '소나타', price : 3000 } 이렇게 생긴 object를 복사해주는 class를 만들어보십시오.

2. 그리고 복사된 object 자료들은 .tax() 라는 함수를 사용가능한데 현재 object에 저장된 price의 10분의1을 출력해주어야합니다.

3. model과 price 속성의 타입지정도 알아서 잘 해보십시오. tax() 함수의 return 타입도요.
 */
var Car = /** @class */ (function () {
    function Car(model, price) {
        this.model = model;
        this.price = price;
    }
    Car.prototype.tax = function () { return this.price / 10; };
    ;
    return Car;
}());
var a = new Car('소나타', 10000);
// console.log(a.tax())
/**
 * (숙제2) class인데 파라미터가 잔뜩 들어가는 class Word를 만들어봅시다.

1. object 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면

2. 숫자는 전부 object 안의  num 속성 안에 array 형태로 저장되고

3. 문자는 전부 object 안의 str 속성 안에 array 형태로 저장되는 class를 만들어봅시다.

4. class 만들 때 넣을 수 있는 숫자와 문자 갯수는 일단 제한은 없습니다. 그리고 타입 빼먹지 마셈

 

(동작 예시)

 

let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num) //[3,5]
console.log(obj.str) //['kim', 'park']
 */
var Word = /** @class */ (function () {
    function Word() {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        var _this = this;
        this.str = [];
        this.num = [];
        rest.forEach(function (ele) {
            if (typeof (ele) === 'string')
                _this.str.push(ele);
            else
                _this.num.push(ele);
        });
    }
    return Word;
}());
// let obj = new Word('kim', 3, 5, 'park');
// console.log(obj.num) //[3,5]
// console.log(obj.str) //['kim', 'park']
/***********************************************************************/
/*
(숙제1) interface 이용해서 간단하게 타입을 만들어봅시다

let 상품 = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }
이런 변수가 있는데 interface 키워드로 타입지정 이쁘게 하고 싶습니다. 어떻게 코드를 짜면 될까요?

무슨 타입일지는 알아서 기입합시다.
*/
/*
(숙제2) array 안에 object 여러개가 필요합니다.

쇼핑몰 장바구니를 구현하려고 하는데

let 장바구니 = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ]
이렇게 생긴 object들이 잔뜩 들어갈 수 있는 array는 어떻게 타입을 지정해야할까요?

오늘 배운 interface 문법을 써봅시다.
*/
/*
(숙제3) 위에서 만든 타입을 extends 해봅시다.

갑자기 서비스가 업데이트되어서 일부 상품은 card 속성이 들어가야합니다.

{ product : '청소기', price : 7000, card : false }
위에서 만든 interface를 extends 해서 이 object의 타입을 만들어보십시오.
*/
/*
(숙제4) object 안에 함수를 2개 넣고 싶은데요

1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다.

2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다.

이 object 자료를 어떻게 만들면 될까요?

interface를 이용해서 object에 타입지정도 해보십시오.
*/ 

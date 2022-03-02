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
// console.log(User);

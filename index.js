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
console.log(marryPossibleFunc(700, false, '중'));
console.log(marryPossibleFunc(100, false, '상'));

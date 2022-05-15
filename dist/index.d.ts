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
/***********************************************************************/
/**
 * (숙제1) 다음 x, y, z 속성의 특징을 설명해보십시오.
 class User {
  private static x = 10;
  public static y = 20;
  protected z = 30;
}
 */
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
/**
 * (숙제3) 타입 중복이 너무 많이 발생합니다.
type Dog = string;
interface Dog { name : string };

let dog1 :Dog = 'bark';
let dog2 :Dog = { name : 'paw' }
위 코드에서 에러를 없애야합니다. 어떻게 코드를 짜면 될까요?

(조건) type Dog, interface Dog의 타입이름 변경 금지, 파일 분할 금지
 */
/**
 * (숙제1) 문자를 집어넣으면 문자의 갯수, array를 집어넣으면 array안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까요?
 * (동작 예시)

함수<string>('hello') 이렇게 사용하면 콘솔창에 5가 나와야합니다.

함수<string[]>( ['kim', 'park'] ) 이렇게 사용하면 콘솔창에 2가 나와야합니다.
 */
/***********************************************************************/
/**
 * (숙제1) 여러분이 최근에 사먹은 음식의 1. 이름 2. 가격 3. 맛있는지여부를 array 자료에 담아보고 타입지정까지 해보십시오.

오늘 배운 tuple 타입으로 타입지정합시다.

쉬워서 답은 생략합니다.

 

(예시) [ '동서녹차', 4000, true ] 이런 자료 만들고 타입지정하라는 소리입니다.
 */
declare const arr: [string, number, boolean];
/**
 * (숙제2) 이렇게 생긴 자료는 타입지정 어떻게 해야할까요?

let arr = ['동서녹차', 4000, true, false, true, true, false, true]
몇개인지는 모르겠지만 true와 false가 셋째 자료부터 잔뜩 들어올 수 있다고 합니다.

tuple 타입과 spread 연산자를 써보도록 합시다.
 */
declare const arr2: [string, number, ...boolean[]];
/**
 * (숙제3) 함수에 타입지정을 해보도록 합시다.

function 함수(){
  
}
1. 이 함수의 첫째 파라미터는 문자,

2. 둘째 파라미터는 boolean,

3. 셋째 파라미터부터는 숫자 또는 문자가 들어와야합니다.

그럼 함수에 파라미터를 어떻게 만들고 타입지정은 또 어떻게 해야할까요?

오늘 배운 tuple 타입과 rest parameter를 사용해봅시다.
 */
declare function 함수(a: string, b: boolean, ...c: (string | number)[]): void;
/**
 * (숙제4) 다음과 같은 문자/숫자 분류기 함수를 만들어보십시오.

파라미터 중 문자만 모아서 [] 에 담아주고, 숫자만 모아서 [] 에 담아주는 함수가 필요합니다.

문자 숫자 외의 자료는 입력불가능하고 파라미터 갯수 제한은 일단 없습니다.

함수 만들어보시고 함수의 파라미터/return 타입지정도 확실하게 해봅시다.

 

(동작예시)

함수('b', 5, 6, 8, 'a') 이렇게 사용할 경우 이 자리에 [ ['b', 'a'], [5, 6, 8] ] 이 return 되어야합니다.
 */
declare const practiceFunc: (...params: (string | number)[]) => [string[], number[]];

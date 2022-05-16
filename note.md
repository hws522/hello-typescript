# NOTE

<br>

- 모든 변수에 타입을 지정해줄 필요는 없다. 자동으로 부여해줌.(array, object 포함)

<br>

- 변수에 정의된 Union 타입은 할당과 동시에 OR 역할이 사라진다.

  - array, object에 정의된 Union 타입은 OR 연산자가 유지된다.

<br>

- unknown 타입엔 모든 자료 다 집어넣을 수 있다. 자료집어넣어도 타입은 그대로 unknown.

<br>

- 타입스크립트는 확실한 걸 좋아해서, 지금 변경하려는 변수의 타입이 확실해야 연산을 수행한다.

  - -1 같은 경우, number 타입만 가능하다. unknown은 number타입이 아니다.

  - string|number 이것도 number 타입이 아니다. (union type은 새로운 타입을 하나 만든 거)

<br>

- 타입스크립트의 함수는 총 두 군데 타입지정이 가능하다.

  1. 함수로 들어오는 자료 (parameter)

  2. 함수에서 나가는 자료 (return)

     <br>

     ```ts
     function 내함수(x: number): number {
       return x * 2;
     }
     ```

  - 함수로 들어오는 파라미터 타입지정은 파라미터 옆에 적으면 된다.

  - 함수가 실행된 후 남는 값 (return 우측에 있는 값) 타입지정하고 싶으면 함수명() 우측에 적으면 된다.

  - 파라미터에 타입을 지정하면 필수 파라미터가 된다.

<br>

- 함수는 void 타입이 있다.

  - return 할 자료가 없는 함수의 타입에 사용한다.

    <br>

    ```ts
    function 내함수(x: number): void {
      return x * 2; //여기서 에러남
    }
    ```

<br>

- 파라미터가 옵션일 경우, 미리 정의해주어야 에러가 나지 않는다.

  ```ts
  function 내함수(x?: number) {}
  내함수(); //가능
  내함수(2); //가능
  ```

  - x : number | undefined 이거랑 똑같은 의미다.

  - 자바스크립트에서는 파라미터정의가 안되면 undefined 로 들어오기 때문이다.

<br>

- `Type Narrowing` 은 if문 등으로 타입을 하나로 정해주는 것을 뜻한다.

  ```ts
  function 내함수(x: number | string) {
    if (typeof x === 'number') {
      return x + 1;
    } else if (typeof x === 'string') {
      return x + 1;
    } else {
      return 0;
    }
  }
  ```

  - 타입스크립트는 타입이 애매한걸 싫어해서 귀찮아도 해야한다. 타입이 확실하지 않을 때 생길 수 있는 부작용을 막는 장치.
    이것을 'defensive 하게 코딩한다' 라고 함.

  - 함수 마지막에 else 가 없으면 에러가 나기도 한다. return 하지않는 조건문이 있다면 나중에 버그가 생길 수 있어서 에러를 내주는 것이다.

  - 꼭 `typeof` 를 쓸 필요는 없고, 타입을 하나로 확정지을 수 있는 코드라면 어떤 것도 `Narrowing` 역할을 할 수 있다.

  - `in`, `insteadof` 키워드도 가능하다.

<br>

- `Type Assertion` : 타입을 간단히 assert 할 수도 있다. (비추)

  ```ts
  변수명 as string;
  // 위와 같은 모양으로 사용하면 변수를 string 타입으로 덮어씌운다.
  ```

  ```ts
  function 내함수(x: number | string) {
    return (x as number) + 1;
  }
  console.log(내함수(123));
  ```

  - 변수명 as number 라고 쓰면 "나는 이 변수를 number 라고 주장하겠다" 라는 뜻이며 실제로 그렇게 타입을 변경해준다. 그래서 무조건 as 로 변경한 타입이 들어올것이라는 사실을 알고있어야 안전하게 쓸 수 있다.

  - as 키워드는 `union type` 같은 복잡한 타입을 하나의 정확한 타입으로 줄이는 역할을 수행한다. (number 타입을 as string 으로 바꾸려고 하면 에러)

  - 그냥 타입실드 임시 해제용입니다. 실제 코드 실행결과는 as 있을 때나 없을 때나 거의 동일. as 를 사용하면 변수를 숫자로 `가정` 하고 사용 가능하다.

  - as는 그냥 주장만 하는거지 실제로 타입을 바꿔주는건 아니기 때문에, 위 `내함수('123')` 처럼 숫자 대신 문자를 넣으면 '1231' 이 출력된다. 그저 에러가 안날 뿐이다.

    ```
    그래서 as 문법은 이럴 때 쓰자.

    1. 왜 타입에러가 나는지 정말 모르겠는 상황에 임시로 에러해결용.

    2. 내가 어떤 타입이 들어올지 정말 확실하게 알고 있는데 컴파일러 에러가 방해할 때.

    물론 대부분의 상황에선 as 보다 훨씬 엄격하고 좋은 type narrowing으로 해결할 수 있다.
    ```

<br>

- Type Aliases (별칭)

  - 길고 복잡하게 타입을 나열하는 경우, 재사용이나 깔끔한 코드를 원한다면 변수에 담아 쓰면 된다.

  - 변수만드는 것처럼 `type` 이라는 키워드를 쓰면 된다.

  - `type` 키워드를 사용하는 것을 `type alias` 라고 한다.

    ```ts
    type Animal = string | number | undefined;
    let 동물: Animal;
    ```

  - 관습적으로 대문자로 시작한다.

  - `object` 타입도 가능하다.

    ```ts
    type 사람 = {
      name: string;
      age: number;
    };

    let teacher: 사람 = { name: 'john', age: 20 };
    ```

  - `readonly` 로 잠그기가 가능하다.

  - `const` 변수는 본래 재할당이 불가능하도록 하지만, `object` 데이터는 `const` 에 집어넣어도 변경이 가능하다는 단점이 있다. `const` 변수는 재할당만 막아줄 뿐이지 그 안에 있는 `object` 속성 바꾸는 것 까지 관여하지 않기 때문이다.

  - `readonly` 키워드는 속성 왼쪽에 붙일 수 있으며 특정 속성을 변경불가능하게 잠궈준다.

    ```ts
    type Girlfriend = {
      readonly name: string;
    };

    let 여친: Girlfriend = {
      name: 'test',
    };

    여친.name = '123'; //readonly라서 에러남
    ```

  - 물론 `readonly는` 컴파일시 에러를 내는 것일 뿐, 변환된 js 파일 보면 잘 바뀐다.

  - 속성들이 선택사항이라면 함수처럼 `?` 를 사용하면 된다.

    ```ts
    type Square = {
      color?: string;
      width: number;
    };

    let 네모2: Square = {
      width: 100,
    };
    ```

  - `?` 는 `undefined` 를 포함하는 것이라는 걸 다시한번 기억한다.

  - `type` 키워드 여러개를 합칠 수 있다.

    ```ts
    type Name = string;
    type Age = number;
    type NewOne = Name | Age;
    ```

  - `object` 타입도 합칠(extend) 수 있다. 물론 `Type alias & { name : string }` 도 가능하다.

    ```ts
    type PositionX = { x: number };
    type PositionY = { y: number };
    type XandY = PositionX & PositionY;
    let 좌표: XandY = { x: 1, y: 2 };
    ```

  - `type` 키워드는 재정의가 불가능하다. (`interface` 키워드를 쓰면 재정의 가능)

- `Literal Type` 은 어떠한 변수가 미리 골라놓은 데이터만 가질 수 있게 도와준다.

  - string, number 말고도 일반 글자같은 것도 타입이 될 수 있다.

    ```js
    let john: '대머리';
    let kim: '솔로';

    //john 변수는 '대머리' 라는 글자만 할당 가능.
    //kim 변수는 '솔로' 라는 글자만 할당 가능.
    ```

  - 이렇게 특정 글자나 숫자만 가질 수 있게 제한을 두는 타입을 `literal type` 이라 부른다.

  - or 기호를 사용해도 된다.

    ```js
    let 방향: 'left' | 'right';
    방향 = 'left';
    ```

  - 함수도 똑같다. 파라미터 타입을 선언할 때 글자나 숫자를 집어 넣으면 그 것만 파라미터로 넣을 수 있고 return 타입 선언에도 글자나 숫자를 집어 넣으면 그 값만 return 할 수 있다.

    ```js
    function 함수(a: 'hello'): 1 | 0 | -1 {
      return 1;
    }

    함수('hello');
    ```

  - `literal type` 은 `const` 변수의 업그레이드 버전이라고 보면 된다. `const` 변수는 값을 바꿀 수 없는 변수다.

    ```js
    const 변하면안되는변수 = 123;
    ```

  - 그래서 중요한, 변하지 않는 정보를 저장하고 싶을 때 `const` 를 자주 쓰는데 가끔 변하는 중요한 정보를 저장하고 싶을 땐 무쓸모다. 'kim' 이나 'park' 만 가질 수 있는 변수는 못만든다. 그럴 때 쓰면 된다.

    ```js
    const 이름 = 'kim' | 'park';
    ```

- `as const` 는 타입을 object 의 value 로 바꿔준다. 그리고 object 안에 있는 모든 속성을 readonly 로 바꿔준다. => object 를 잠그고 싶으면 as const 를 활용해보도록 하자.

  ```js
  var 자료 = {
    name : 'kim'
  } as const;

  function 내함수(a : 'kim') {

  }
  내함수(자료.name)

  // as const 가 없을 시, 여기서는 에러가 난다.
  // 내함수안에 들어갈 파라미터는 타입이 'kim' 인데 자료.name 은 값이 'kim' 인 string 타입이기 때문이다.
  ```

- function, methods에 type alias 지정하는 법

  - function type 도 저장가능

    숫자 2개를 파라미터로 입력가능하고, 숫자를 return 하는 함수를 별명을 지어 사용하려면,

    ```ts
    type NumOut = (x: number, y: number) => number;
    ```

  - 이걸 함수 만들 때 사용하려면 `function 함수이름 :NumOut (){}` 이런 식은 불가능하다. function 키워드에는 () 이거 내부랑 오른쪽에만 타입지정이 가능하기 때문이다.

  - 그래서 이렇게 사용해야 한다.

    ```ts
    type NumOut = (x: number, y: number) => number;
    let ABC: NumOut = function (x, y) {
      return x + y;
    };

    // let 함수명 = function(){} 이렇게 해도 되니까
    // 함수명 오른쪽에 함수명 : 타입별명
    // 이렇게 지정해서 사용하는 것.
    // 이렇게 하기 싫으면 함수 만들 때 타입지정하면 된다.
    ```

  - methods 안에 타입지정하기

    object 자료 안에 함수도 맘대로 집어넣을 수 있다.

    ```ts
    let 회원정보 = {
      name: 'kim',
      age: 30,
      plusOne(x) {
        return x + 1;
      },
      changeName: () => {
        console.log('안녕');
      },
    };
    회원정보.plusOne(1);
    회원정보.changeName();

    //plusOne 그리고 changeName 함수를 object 자료에 집어넣었다.
    //arrow function, 일반함수 전부 object 안에 맘대로 집어넣을 수 있다.
    //넣은 함수들은 똑같이 점찍어서 사용가능.
    ```

- TypeScript 로 HTML 제어

  - `"strictNullChecks": true` 옵션을 활성화 하고 작업을 진행한다.

  - 제목을 변경해본다.

    ```js
    let 제목 = document.querySelector('#title');
    제목.innerHTML = '반갑소';

    //자바스크립트에서는 작동하지만 타입스크립트에서는 에러.
    ```

  - "제목이라는 변수가 null일 수 있습니다" 라는 에러가 뜨는데 아까 켜놨던 strict 옵션 덕분이다. 이유는 셀렉터로 html을 찾으면 타입이 Element | null 이기 때문에 그렇다. (html을 못찾을 경우 null)

  - 해결방법은 Narrowing.

    ```ts
    if (제목 != null) {
      제목.innerHTML = '반갑소';
    }

    or;

    if (제목 instanceof HTMLElement) {
      제목.innerHTML = '반갑소';
    } // 추천.

    or;

    let 제목 = document.querySelector('#title') as HTMLElement;
    제목.innerHTML = '반갑소';

    or;

    if (제목?.innerHTML != undefined) {
      제목.innerHTML = '반갑소';
    } // optional chaining 연산자사용(?.)
    ```

  - `<a>` 태그의 경로를 변경해본다.

    ```js
    let 링크 = document.querySelector('#link');
    if (링크 instanceof HTMLElement) {
      링크.href = 'https://kakao.com';
    }
    //에러

    let 링크 = document.querySelector('#link');
    if (링크 instanceof HTMLAnchorElement) {
      링크.href = 'https://kakao.com';
    }
    //에러 X
    ```

  - html 태그 종류별로 정확한 타입명칭이 있다. `<a>` 태그는 `HTMLAnchorElement`, `<img>` 태그는 `HTMLImageElement`, `<h4>` 태그는 `HTMLHeadingElement` 등등 잘 찾아서 narrowing 해야 한다.

  - 이벤트리스너를 추가해본다.

    ```js
    let 버튼 = document.getElementById('button');
    버튼.addEventListener('click', function () {
      console.log('안녕');
    });
    //에러

    let 버튼 = document.getElementById('button');
    버튼?.addEventListener('click', function () {
      console.log('안녕');
    });
    //에러 X
    ```

- `Class` 만들 때 타입 지정

  - ### `필드` 값 타입 지정.

  - `class` 내부에는 모든 자식 `object` 들이 사용가능한 속성따위를 만들 수 있다.

  - 모든 `Person` 클래스의 자식들에게 `data` 라는 속성을 부여해주고 싶으면,

    ```ts
    class Person {
      data = 0;
    }

    let john = new Person();
    let kim = new Person();

    console.log(john.data);
    console.log(kim.data);
    ```

    이렇게 클래스 중괄호 안에다 변수처럼 만들면 된다. class 안에 이렇게 대충 만드는 것을 `필드`라고 한다.

  <br>

  - ### `constructor` 타입 지정.

  - `class` 는 쉽게 말하면 `object 복사 기계`라고 했다.
    ES6 신문법에선 `constructor` 함수를 쓰면 된다.

    ```ts
    class Person {
      constructor() {
        this.name = 'kim';
        this.age = 20;
      }
    }

    // 타입스크립트에선 이 문법이 맞지 않는다.
    // Error : Property 'name' does not exist on type 'Person'
    ```

    ```ts
    class Person {
      name;
      age;
      constructor() {
        this.name = 'kim';
        this.age = 20;
      }
    }

    //필드 값으로 name, age가 미리 정의되어있어야 constructor 안에서도 사용가능하다.
    ```

    ```ts
    class Person {
      name;
      age;
      constructor(a: string) {
        this.name = a;
        this.age = 20;
      }
    }

    //constructor 함수 안에는 변수를 집어 넣을 수 있다고 했다.
    //위 처럼 파라미터에 string 으로 타입지정을 해놓으면 name 에는 string 만 들어갈 수 있게 된다.

    class Person {
      name;
      age;
      constructor(a = 'kim') {
        this.name = a;
        this.age = 20;
      }
    }

    //혹은 위처럼 default parameter 로 지정 가능하다.
    ```

  - 참고로 `constructor` 함수는 `return` 타입지정을 하면 안된다. `constructor` 에 의해서 항상 `object` 자료가 생산되기 때문에 생각해보면 의미가 없다.

  - 필드값이랑 `constructor` 랑 같은 역할을 하지만, 생성하는 class 에 파라미터로 뭔가를 집어 넣고 싶으면 `constructor` 를 사용해야 한다.

  <br>

  - ### `methods` 타입 지정.

  - class 내부엔 함수를 입력할 수 있다.

  - `함수명(){}` 이거 넣으면 끝인데, 이 함수는 `Person` 이라는 클래스의 `prototype` 에 추가된다.

    ```ts
    class Person {
      add(숫자: number) {
        console.log(숫자 + 1);
      }
    }

    // 이러면 모든 Person의 자식들은 add 라는 함수를 이용 가능하다.
    ```

<br>

- ### `Object` 에 타입지정

  - `object` 에 사용할 수 있는 `interface` 문법

  - `interface` 문법을 쓰시면 `object` 자료형의 타입을 보다 편리하게 지정가능하다.

    ```ts
    interface Square {
      color: string;
      width: number;
    }

    let 네모: Square = { color: 'red', width: 100 };

    //interface는 object랑 비슷한 모습으로 작성하면 된다.
    //type alias와 용도와 기능이 똑같다.
    //1. 대문자로 작명하고 2. { } 안에 타입을 명시해주면 끝.
    //만들어두면 앞으로 object자료 만들 때 interface 만든걸 집어넣으면 간편하게 타입지정이 가능하다.
    ```

  - interface 장점은 `extends`

    ```ts
    interface Student {
      name: string;
    }
    interface Teacher extends Student {
      age: number;
    }
    ```

  - `type` 키워드와의 차이점

    ```ts
    type Animal = {
      name: string;
    };
    type Cat = Animal & { legs: number };
    ```

  - `interface` 도 `type` 처럼 `&` 기호를 이용해도 복사가능

    ```ts
    interface Student {
      name: string;
    }
    interface Teacher {
      age: number;
    }

    let 변수: Student & Teacher = { name: 'kim', age: 90 };
    ```

  - & 기호 쓰는걸 intersection이라고 부르는데 extends 와 유사하게 사용가능하다.

  - 타입이름 중복 선언 시,

    ```ts
    interface Animal {
      name: string;
    }
    interface Animal {
      legs: number;
    }

    /*
    interface의 경우 타입이름 중복선언을 허용해주며 중복시 extends 한 것이랑 동일하게 동작한다. 
    
    이러면 Animal 타입은 name, legs 속성을 가질 수 있다. 
    
    (장점) type 선언을 자주 쓰는 외부 라이브러리 이용시 type 선언을 내가 덮어쓰기, override 하기 편리.
    */
    ```

  - type의 경우 중복선언을 허용하지 않습니다. 에러남

  - 그래서 일반적인 상황에선 `type` 키워드 자주 활용하면 되는데

    다른 사람이 내 코드를 이용하는 상황이 많으면 `interface`로 유연하게 만드는게 좋다.

    그래서 타입스크립트로 작성된 라이브러리들은 `interface`로 타입정해놓은 곳이 많다.

    혹은 object 자료형은 전부 `interface`로 만들고 다른 자료형은 `type` 키워드로 만들고 이런 것들도 괜찮다.

    `type`과 `interface` 문법을 잘 알고 있으면 기준은 정하기 나름.

  - extend 할 때 object 안의 속성이 중복될 경우,

    ```ts
    interface Animal {
      name: string;
    }
    interface Dog extends Animal {
      name: number;
    }

    //ERROR
    ```

    ```ts
    interface Animal {
      name: string;
    }
    interface Dog {
      name: number;
    }

    let 변수: Dog & Animal = { name: '멍멍' };
    /*
    & 연산자로 Dog, Animal을 합침.
    
    근데 name 속성이 중복된다면 에러남. 끝
    
    interface 말고도 type 키워드도 똑같은 현상이 일어난다. 
    
    (주의) 근데 name : string , name : number 라서 에러가 나는 것이지
    
    둘다 name : string 타입이면 에러가 안남. 하나로 합쳐줌 
    */
    ```

    <br>

- rest 파라미터 타입지정.

  ```ts
  function 전부더하기(...a: number[]) {
    console.log(a);
  }
  전부더하기(1, 2, 3, 4, 5);

  // [1,2,3,4,5]
  ```

  rest 파라미터는 `항상 배열 안에 담겨오기 때문에` 타입지정도 `array` 처럼 해주면 된다.

  - Spread operator 와 다르다.

  - Spread 연산자는 array 혹은 object 괄호를 벗기고 싶을 때! 왼쪽에 사용한다.

    ```ts
    let arr = [3, 4, 5];
    let arr2 = [1, 2, ...arr];
    console.log(arr2);

    // [1,2,3,4,5]
    ```

  - 괄호벗겨주는 `...(spread operator)`는 array, object 자료 왼쪽에, 여러개의 파라미터를 의미하는 `...(rest)`는 함수선언할 때 소괄호 안에 출몰한다.

  <br>

- Destructuring 문법도 함수 파라미터에 사용가능

  ```js
  // 구조분해할당 안했을 때,
  let person = { student: true, age: 20 };

  function 함수(a, b) {
    console.log(a, b);
  }
  함수(person.student, person.age);

  // 구조분해할당 했을 때,
  let person = { student: true, age: 20 };

  function 함수({ student, age }) {
    console.log(student, age);
  }
  함수({ student: true, age: 20 });
  ```

  파라미터 변수만들 때 { student, age } 라고 쓰면 파라미터로 들어오는 { student : 어쩌구 }는 student 라는 변수에 저장해주세요~

  파라미터로 들어오는 { age : 어쩌구 }는 age 라는 변수에 저장해주세요~ 라는 뜻이다.

  (object 자료니까 변수 작명할 때 object 속성명으로 잘 작명해야함)

  항상 같은 모습의 object, array 자료가 들어올 때 쓰는 문법이라고 보면 된다.

<br>

- 추가적인 Narrowing 방법.

  - `&&` 논리연산자를 이용한 Narrowing 축약

    ```ts
    function printAll(strs: string | undefined) {
      if (strs && typeof strs === 'string') {
        console.log(s);
      }
    }
    ```

    축약해서 쓸 수 있지만 알아볼 수 없다면 사용하지 않는게 좋다. 짧다고 다 좋은게 아니니까.

    <br>

  - `in` 연산자로 `object` 자료 narrowing

    파라미터로 `object` 가 2개 들어올 수 있다고 타입지정을 해놓은 상태.

    서로 다른 유니크한 속성들을 가지고 있다면, `if(이 파라미터가 a 라는 속성을 안에 가지고 있냐)` 이런식으로 if 문을 사용해도 narrowing 이 가능하다.

    ```ts
    type Fish = { swim: string };
    type Bird = { fly: string };
    function 함수(animal: Fish | Bird) {
      if ('swim' in animal) {
        return animal.swim;
      }
      return animal.fly;
    }
    ```

    서로 배타적인, 다른 속성을 가져와야 narrowing 이 가능하다.

    <br>

  - `class` 로부터 생산된 `object` 라면 `instanceof` 로 narrowing

    ```ts
    let 날짜 = new Date();
    if (날짜 instanceof Date) {
      console.log('참이에요');
    }
    ```

    클래스로부터 `new` 키워드로 생산된 `object` 들은 `instanceof` 키워드를 붙여서 부모 클래스가 누군지 검사할 수 있기 때문에 이것으로 narrowing 이 가능하다.

    이 변수가 `Date()` 로 부터 생성된 `object` 자료인지, 아니면 다른 애로부터 생성된 자료인지 이런걸 구분가능하기 때문이다.

    <br>

  - `literal type` 이 있으면 narrowing 쉬움

    ```ts
    type Car = {
      wheel : '4개',
      color : string
    }
    type Bike = {
      wheel : '2개',
      color : string
    }

    function 함수(x : Car | Bike){
      if (x가 Car타입이면요){
        console.log('이 차는 ' + x.color)
      } else {
        console.log('이 바이크는 ' + x.color)
      }
    }
    ```

    if 안에 들어갈 조건은 `typeof` 연산자를 사용해도 `object` 라고만 나타날 것이다.

    `typeof 연산자는 string, number, object 정도만 구분해주기 때문이다.`

    Car, Bike 둘 다 배타적인 속성이 없으므로, `in` 문법도 사용하지 못한다.

    위처럼 `literal type` 으로 지정한 wheel 은 Car 타입은 무조건 '4개', Bike 타입은 무조건 '2개' 가 나온다.

    그래서 if 조건에 `x.wheel === '4개'` 를 넣으면 Car 타입인지를 알 수 있고, narrowing 이 가능해진다.

<br>

- 함수에 사용하는 `never` 타입

  - 함수에 붙이는 return type 으로 사용가능하다.

    - 절대 return 하지 않아야 하고,

    - 함수 실행이 끝나지 않아야 한다.(endpoint 가 없어야 함)

    위 두 조건은 같은 소리인데, 그 이유는 모든 자바스크립트 함수 맨 밑엔 `return undefined` 라는 숨겨진 코드가 있기 때문이다.

    ```ts
    function 함수(): never {
      while (true) {
        console.log(123);
      }
    }
    ```

    이렇게 무한히 실행되는 함수에는 `never` 타입을 사용할 수 있다.

    ```ts
    function 함수(): never {
      throw new Error('에러메세지');
    }
    ```

    이렇게 강제로 에러를 발생시키면, 코드실행이 중단되기 때문에 2번조건을 충족시키므로 `never` 타입을 사용할 수 있다.

  - 이렇게 두번째 조건을 만족하는 함수를 만들 일이 거의 없기 때문에 `never` 타입은 쓸 일이 없다.

  - 무언가를 return 하고 싶지 않을 때에는 `void` 를 사용하면 된다.

  - 그럼에도 알아야하는 이유는 `코드를 이상하게 짜면` 자동으로 등장하기 때문이다.

    ```ts
    function 함수(parameter: string) {
      if (typeof parameter === 'string') {
        parameter + 1;
      } else {
        parameter;
      }
    }
    ```

    위 함수처럼 파라미터가 string 밖에 들어오지 못하는데도 else 문을 사용한 것처럼 잘못된, 불필요한 narrowing 을 사용했을 때 `never` 타입이 뜬다.

    이런건 있을 수 없다, 일어나면 안된다고 알려주는 느낌이다.

    그러니 `never` 타입이 뜬다면 코드를 수정하자.

    <br>

    ```ts
    function 함수() {
      // 함수 선언문.
    }

    let 함수2 = function () {
      // 함수 표현식.
    };
    ```

    `함수 선언문`에서 아무것도 return 하지 않고, 끝나지도 않을 경우 `void` 타입이 자동으로 return 타입으로 할당된다.

    `함수 표현식`에서 아무것도 return 하지 않고, 끝나지도 않을 경우 `never` 타입이 자동으로 return 타입으로 할당된다.

  - `tsconfig.json` 에서 `strict` 옵션을 켜둘 경우, 함부로 `any` 타입을 지정해주지 않는 경우가 있는데 그럴 때 배열의 타입을 지정하지 않으면 `any[]` 이렇게 타입을 가질 수 없기 때문에 `never[]` 타입이 발견되기도 한다.

  - `never` 타입이 보인다면 코드의 상태를 의심해보자.


<br>

- `class` 에서 사용가능한 `public`, `private` 키워드

  - 타입스크립트는 class 안에서 `public` 키워드를 사용가능하다. 원하는 속성 왼쪽에 붙이면 그 속성은 아무데서나 수정이 가능함.

    ```ts
    class User {
      public name: string;

      constructor(){
        this.name = 'kim';
      }
    }

    let 유저1 = new User();
    유저1.name = 'park';  //가능
    ```

  - `public` 을 붙이지 않아도 필드값 같은 걸 만들면 자동으로 `public` 이 숨겨진 상태로 부여되기때문에 똑같다.

  - `private` 을 붙이면 수정이 불가능해진다.

    무조건 `class{...}` 안에서만 수정 및 사용가능하다.

    심지어, class 로 부터 생산된 자식 object 에서도 private 붙은건 사용도 불가능하다.

    ```ts
    class User {
      public name :string;
      private familyName :string;  

      constructor(){
        this.name = 'kim';
        let hello = this.familyName + '안뇽'; //가능
      }
    }

    let 유저1 = new User();
    유저1.name = 'park';  //가능
    유저1.familyName = 456; //에러남
    ```

    오리지널 자바스크립트에서는 속성 옆에 `#` 을 붙이면 private 속성이 된다. 

  - `private` 이 부여된 속성을 class 밖에서 수정해야 할 경우

    private 속성을 수정하는 함수를 class 안에 만들어서 실행시키면 된다. 

    ```ts
    class User {
      public name :string;
      private familyName :string;

      constructor(){
        this.name = 'kim';
        let hello = this.familyName + '안뇽';
      }
      changeSecret(){
        this.familyName = 'park';
      }
    }

    let 유저1 = new User();
    유저1.familyName = 'park';  //에러남
    유저1.changeSecret()        //가능
    ```

  - `private` 을 어디다 쓸까??

    개발을 하다보면 수정이 되면 안되는, 수정된다면 큰일날거같은 변수나 속성들이 생긴다. 

    이걸 외부에서 실수로 수정하지 않도록 private 을 붙여주면, 함수를 만들어 사용하거나 수정해야 하므로 약간의 안전장치를 더해서 개발이 가능하다. 

    개발이 귀찮아지지만 버그를 예방해주는 키워드이며, `react-redux` 에서 매번 보게 될 패턴이다. 

  - `public, private` 키워드를 사용하면 constructor 안에서 `this.name = name` 이런걸 생략할 수 있다.

    ```ts
    class Person { 
      name;
      constructor ( name :string ){  
        this.name = name;
      } 
    }
    let 사람1 = new Person('john')


    class Person { 
      constructor ( public name :string ){  
      
      } 
    }
    let 사람1 = new Person('john')
    ```

    위 두개의 코드는 같은 코드이고, `constructor 파라미터에 public 을 붙이면, this.name = name 이 생략가능하다` 라는 걸 참고하면 된다. 

<br>

- `class` 에서 사용가능한 `protected`, `static` 키워드

  - `class` 는 `extends` 로 복사가 가능하다.

    ```ts
    class NewUser extends User {
      ~~ 어쩌구
    }

    // 이러면 새로운 NewUser class 만들 때 User에 있던거 저기다가 복붙해준다. 끝! 
    // 기존 class와 비슷한 class를 많이 만들어야할 때 사용한다. 
    ```

  - `class` 안에서 쓰는 `protected` 키워드

  - `protected` 는 `private` 과 비슷한 키워드인데, `private` 에서 약간 보안은 풀고 싶을 때 사용한다.

  - `protected` 를 사용하면, `extends` 된 클래스에서도 사용할 수 있다. 

    ```ts
    class User {
      protected x = 10;
    }

    // User 라는 클래스의 x 속성은 protected 이다.
    // 그럼 private 와 동일하게 클래스 내부에서만 사용가능하며, User 의 자식들도 함부로 사용이 불가능하다.

    class NewUser extends User {
      doThis(){
        this.x = 20;
      }
    }

    // User 를 extends 하는 NewUser 클래스를 만들었다. 
    // NewUser 클래스는 this.x 이런식으로 x 를 가져다 쓸 때 protected 속성이기 때문에 에러가 나지 않는다. 
    ```

  - 그래서 class 여러개 만들 때 `class 끼리 공유할 수 있는 속성을 만들고 싶으면 protected`, class 하나 안에서만 쓸 수 있는 속성을 만들고 싶으면 private 을 쓰도록 한다. 

  - class 여러개 만들 일이 없으면 쓸모가 없다. 

  <br>

  - `class` 안에서 쓰는 `static` 키워드

  - 우리가 `class{...}` 안에 집어넣는 변수, 함수 이런건 전부 `class` 로 부터 새로 생성되는 `object (일명 instance)` 에 부여된다. 근데 `class` 에 직접 변수나 함수를 부여하고 싶으면 `static` 키워드를 왼쪽에 붙여주면 된다.

    ```ts
    class User {
      x = 10;
      y = 20;
    }

    let john = new User();
    john.x //가능
    User.x //불가능
    ```

    이런 x와 y같은 변수들은 User로 부터 생성된 `object`들만 사용가능하다.

    근데 `static` 키워드를 붙이면,

    ```ts
    class User {
      static x = 10;
      y = 20;
    }

    let john = new User();
    john.x //불가능
    User.x //가능 
    ```

    john은 사용불가능하고 User는 직접 사용가능. 

    - 함수도 static 붙이기 가능

    - extends 로 class를 복사할 경우 static 붙은 것들도 따라온다.

  - 참고로, `static`은 `private, protected, public` 키워드와 동시 사용가능하다.

  <br>

  - static 이런걸 언제 씁니까

  - 주로 `class` 안에 간단한 메모를 하거나, 기본 설정값을 입력하거나, `class`로 부터 생성되는 `object`가 사용할 필요가 없는 변수들을 만들어놓고 싶을 때 사용한다.

    ```ts
    class User { 
      static skill = 'js'; 
      intro = User.skill + '전문가입니다'
    }
    var 철수 = new User();
    console.log(철수)
    ```   

    1. User 클래스를 만들었다.

    2. 근데 자식들에게 { intro : 'js 전문가입니다' } 이걸 복사해주고 싶음.   

    3. 근데 여기서 js 라는 단어가 중요할 것 같아서 static skill 이 곳에다가 메모해놓고 그걸 사용함. 

    4. 이제 자식들은 철수.intro 이렇게 사용할 때 마다 'js 전문가입니다~' 를 출력해준다.

    <br>

    5. 근데 갑자기 skill을 좀 변경하고 싶다.

    6. 철수 이후로 생산되는 자식들은 'js 전문가입니다~'가 아니라 'python 전문가입니다' 를 달고 나오게 하고 싶은 것임  

    7. 그럴 때 class 내부를 직접 js -> python 이렇게 수정해도 되지만 class가 멀리 떨어져있거나 다른 파일에 있을 경우 귀찮다.

    8. 다행히 static 키워드로 만들어놨기 때문에 그걸 수정해버려도 된다.

      ```ts
      class User { 
      static skill = 'js'; 
      intro = User.skill + '전문가입니다'
    }

    var 철수 = new User();
    console.log(철수);

    User.skill = 'python';
    var 민수 = new User();
    console.log(민수);

    // 이런 식으로 쓸 수 있다고 보여드린 것일 뿐. 
    // 실은 class 내부의 기본 변수같은걸 저렇게 수정할 일은 별로 없다. 
    ```
  
  <br>

  - `수정하고 싶으면 private 쓰고 그 다음에 수정함수를 만들어서 사용하는게 더 안전한 방법이다.`

  <br>

- type import, export 그리고 namespace

  - 만든 타입변수를 다른 파일에서 사용하고 싶은 경우, 자바스크립트 import export 문법 그대로 사용가능하다.

    ```ts
    (a.ts)

    export var 이름 = 'kim';
    export var 나이 = 30;

    (b.ts)

    import {이름, 나이} from './a'
    console.log(이름)
    
    // 이렇게 사용하면 된다.

    // 1. 우선 변수를 다른 파일에서 쓰이게 내보내고 싶으면 export 문법으로 내보내야하고
    // 2. export된 변수를 가져와서 쓰고 싶으면 import 문법으로 가져와야한다.
    ```
   
    `export` 하고 싶으면 변수나 함수 정의부분 왼쪽에 `export` 키워드 붙이면 되고 

    `import` 하고 싶으면 `import {변수명} from 파일경로` 이렇게 쓰면 된다. 
    
    경로는 `./` 부터 시작해야합니다. 현재경로라는 뜻이고 ts 파일 확장자는 안붙여야합니다.

    ```ts
    import * from './a';
    console.log(이름);
    console.log(나이);

    // 변수명 사용하기 귀찮을 땐 * 사용하면 된다. 
    // 그 파일에서 export된 변수를 전부 import 해오는 문법이다.
    ```

    <br>

  - a.ts -> b.ts 이렇게 정의된 타입을 가져다 쓰고 싶은 경우

    ```ts
    (a.ts)

    export type Name = string | boolean;
    export type Age = (a :number) => number;
    
    (b.ts)

    import {Name, Age} from './a'
    let 이름 :Name = 'kim';
    let 함수 :Age = (a) => { return a + 10 }

    // 타입도 똑같이 사용하면 된다.
    ```  

  - 과거엔 `namespace` 를 썼다.

    ```ts
    (a.ts)

    namespace MyNamespace {
      export interface PersonInterface { age : number };
      export type NameType = number | string;
    }

    // 중요한 타입정의들을 다른 파일들에서 쓰고 싶으면 안전하게 namespace 안에 써서 export 해줬다. 

    (b.ts)

    /// <reference path="./a.ts" />

    let 이름 :MyNamespace.NameType = '민수';
    let 나이 :MyNamespace.PersonInterface = { age : 10 };

    // 그러면 ts 파일은 이상한 <reference/> 라는 태그를 이용해서 다른 파일을 import해올 수 있다.
    // 이제 그 파일에 있던 namespace를 사용가능하다.
    // 네임스페이스명.타입명 
    // 이렇게 쓰면 다른 파일에 있던 타입변수를 자유롭게 쓸 수 있다.
    
    type NameType = boolean; //사용 가능
    interface PersonInterface {} //사용 가능 

    // 점찍어서 써야하기 때문에 다른 변수명을 오염시키지 않아서 변수명 중복선언문제를 방지할 수 있어서 유용하다. 
    // 근데 자바스크립트 es6 버전이 나온 이후로 import as 키워드로 나름 namespace 와 유사하게 중복문제를 해결가능해서 namespace는 그렇게 많이 쓰이진 않는다.
    ``` 

  <br>
  
- `type` 을 파라미터로 사용하는 `Generic`

  - 함수를 만들 때 `(...)` 여기에 파라미터를 입력한다. 근데 타입스크립트를 쓰면 파라미터로 타입을 입력할 수도 있다. `<>` 여기에 집어넣으면 된다.
  
  - 함수 리턴 값이 애매하면,

    예를 들어 
    
    1. 아무렇게나 생긴 array 자료를 입력하면 
    
    2. array의 첫 자료를 그대로 출력해주는 함수를 만들었다고 하자.

    ```ts
    function 함수(x: unknown[]) {
      return x[0];
    }

    let a = 함수([4,2])
    console.log(a)  

    // 이러면 콘솔창에 4가 출력됨.
    ```

    근데 마우스 올려서 a의 타입을 확인해보면 숫자는 아니고 `unknown` 타입이다.

    왜냐면 지금 입력하는 `array`도 `unknown` 타입이라서 그렇다. 

    여기서 중요포인트는 `타입스크립트는 타입을 알아서 변경해주지 않는다는 것.`

    그래서 이러한 연산도 에러가 난다.

    ```ts
    function 함수(x: unknown[]) {
      return x[0];
    }

    let a = 함수([4,2])
    console.log(a + 1)
    
    // a는 사람이 보기에 분명히 숫자가 맞지만 아직 타입은 unknown 타입이기 때문.

    // 함수의 return 타입지정을 :number 이런 걸로 강제로 바꾸기 전까지는 number 타입으로 변하지 않는다.  
    ```

  - 그래서 함수에 불확실한 `unknown, any, union` 타입을 입력하면 나오는 값도 `unknown, any, union` 타입이고, 이 때문에 일어나는 문제들이 많다. 

  - 예를 들면 "함수가 10을 return 하는데 타입이 unknown 이라서 맘대로 조작을 못하네" 같은 문제.  

  - 해결책은 
    
    1. `narrowing` 잘 하면 해결됨. 근데 귀찮음

    2. 그냥 애초에 타입을 파라미터로 함수에 미리 입력하는 방법도 있다. 그럼 원하는 곳에 가변적으로 타입지정 가능
    
    2번을 Generic 이라고 부른다.

    <br>

  - Generic 적용한 함수만들기

  - 함수에 `<>` 이런 괄호를 열면 파라미터를 또 입력할 수 있다. 

    근데 여기 안엔 타입만 입력할 수 있다. 타입파라미터 문법임

    ```ts
    function 함수<MyType>(x: MyType[]) :MyType {
      return x[0];
    }

    let a = 함수<number>([4,2])
    let b = 함수<string>(['kim', 'park'])
    ```

  - 그럼 이제 함수를 사용할 때도 `<>` 안에 파라미터처럼 타입을 입력할 수 있다.

    `함수<number>(...)` 이렇게 쓰는 순간 `MyType` 이라는 변수에 `number` 라는게 들어간다고 보면 된다. 

    그렇게 하면, `함수( x : number[] ) :number {...}` 이것과 똑같이 동작한다.

  - 결론은 `Generic` 을 쓰면 여러분이 정한 타입을 `return` 값으로 뱉는 함수를 제작가능하다는 것.

    `<>` 문법만 잘 쓰면 된다.

    ```ts
    function 함수<MyType>(x: MyType[]) :MyType {
      return x[0];
    }

    let a = 함수([4,2])
    let b = 함수(['kim', 'park'])

    // 함수를 정의한 뒤 사용할 때, <> 를 꼭 쓰지 않아도 알아서 기본 타입을 유추해서 넣어준다.
    ```

  - 타입파라미터는 자유작명가능. 보통 `<T>` 이런걸로 많이 한다. 

  - 일반 함수파라미터 처럼 2개 이상 넣기도 가능.

  <br>

  - -1 은 왜 에러가 날까

    ```ts
    function 함수<MyType>(x: MyType) {
      return x - 1
    }

    let a = 함수<number>(100)

    // 예상대로라면 계산이 되어야 하지만, 에러가 난다.
    ```  

  - `<MyType>` 이라는 곳에 `number` 말고도 다른 타입을 집어넣을 수 있으니까 저런 - 1 연산을 미리 방지해주는 것. 

  - 그래서 `narrowing` 을 해도 되고, `MyType` 에 집어넣을 수 있는 타입을 미리 제한하는 것도 하나의 해결책이다.

  <br>

  - `Generic` 타입 제한하기(constraints)

  - `extends` 문법을 쓰면 넣을 수 있는 타입을 제한할 수 있다. 

    그래서 `MyType extends number` 라고 쓰면 타입 파라미터에 넣을 수 있는 타입을 제한가능하다. 

    `interface` 문법에 쓰는 `extends` 와는 살짝 다른 느낌.

    그 `extends` 는 복사인데 이번 `extends` 는 `number` 와 비슷한 속성을 가지고 있는지 `if 문으로 체크하는 문법`이라고 보면 된다.

    ```ts
    function 함수<MyType extends number>(x: MyType) {
      return x - 1
    }

    let a = 함수<number>(100) // 잘됨.

    // return 타입지정을 안한 이유는 '숫자 - 숫자'를 했으니 알아서 number 타입이 되기때문.
    ```

    <br>

  - 언제나 커스텀 타입도 `extends` 가능

  - 예를 들어서 문자로 파라미터를 넣으면 자릿수를 세어서 출력해주는 함수를 `Generic` 으로 만들고 싶다.

    ```ts
    function 함수<MyType>(x: MyType) {
      return x.length
    }

    let a = 함수<string>('hello')

    // 역시 아까와 마찬가지로 string 말고 number 같은 타입이 올 수도 있으므로 에러가 난다.
    ```

    <br>

    ```ts
    interface lengthCheck {
      length : number
    }
    function 함수<MyType extends lengthCheck>(x: MyType) {
      return x.length
    }

    let a = 함수<string>('hello')  //가능
    let a = 함수<number>(1234) //에러남
    ```

    1. `length` 속성을 가지고 있는 타입을 하나 만들고 이름은 `lengthCheck` 로 지정. 

    2. 그걸 `extends` 해주면 `MyType` 도 `length` 속성을 복사해서 가짐. 

    3. 그래서 `MyType` 은 `length` 가 분명히 있기 때문에 맘대로 `MyType` 을 부여받은 x는 `.length` 조작이 가능. 

  - (참고) `class` 도 `class <MyType> {...}` 이런 식으로 만들면 `new` 로 뽑을 때 타입파라미터를 집어넣을 수 있다. 

    `type Age<MyType> = MyType` 이런 식으로 타입변수에도 사용가능

  <br>

- `array` 자료에 붙일 수 있는 `tuple type`

  - array 자료에 타입을 지정하고 싶으면 `string[]` 이렇게 기입한다.

    하지만, 보다 구체적으로 타입지정하고싶을 때가 있다.

    "첫 자료는 무조건 string, 둘째 자료는 무조건 number인 array"

    이런 것도 가능하다. `tuple` 타입 쓰면 된다.

  <br>

  - `Tuple` 타입

  - tuple type은 array에 붙일 수 있는 타입인데

    자료의 위치까지 정확히 지정할 수 있는 타입이다.

    ```ts
    let 멍멍이 :[string, boolean];
    멍멍이 = ['dog', true];

    // 괄호 안에 타입을 적으면 Tuple 타입이 된다.
    // [] 안에 차례로 타입을 기입하면 된다.
    ```      

  <br>

  - `Tuple` 응용 : rest parameter

    ```ts
    function 함수(...x :string[]){
      console.log(x)
    }

    // x 자리에 입력한 파라미터들은 array에 담겨오기 때문에 array 처럼 타입지정을 해주는게 일반적. 
    // 근데 tuple을 이용해서 타입지정을 해주는 것도 가능
    ```

    ```ts
    function 함수(...x :[string, number] ){
      console.log(x)
    }
    함수('kim', 123)  //가능
    함수('kim', 123, 456)  //에러
    함수('kim', 'park')  //에러

    // rest parameter를 엄격하게 사용가능. 

    // 일반 파라미터 2개 넣는 것과 기능상 다를 바는 없는데 

    // 차이는 rest parameter 쓰면 파라미터가 전부 array에 담겨서 오는게 차이. 
    ```

  <br>

  - tuple 안에도 옵션 가능

    ```ts
    type Num = [number, number?, number?];
    let 변수1: Num = [10];
    let 변수2: Num = [10, 20];
    let 변수3: Num = [10, 20, 10];
    
    //물음표 넣어서 옵션이라고 표현가능. 
    ```

    ```ts
    type Num = [number, number?, number];

    // 중간에 하나가 들어올 수도 있고 없을 수도 있고.. 논리적으로도 이상함.
    // 그래서 ? 옵션기호는 뒤에만 붙일 수 있다.
    // 물음표 2개 쓰고 싶으시면 뒤에서 2개만 붙일 수 있음
    // 물음표 100개 쓰고 싶으시면 뒤에서 100개만 붙일 수 있음
    ```
  
  <br>

  - array 두개를 spread 연산자로 합치는 경우 타입지정은?

    ```ts
    let arr = [1,2,3]
    let arr2 = [4,5, ...arr]
    
    // arr 자리에 자료 몇개가 들어올지도 모르는 상황이라면, arr2 타입지정은 어떻게 해야할까. tuple 타입으로. 

    let arr = [1,2,3]
    let arr2 :[number, number, ...number[]] = [4,5, ...arr]

    // tuple 타입에 점3개 붙이면 된다.
    ```

  <br>

- `declare & ambient module`

  - 타입스크립트에서 외부 자바스크립트 파일을 이용한다면 타입지정이 되어 있지 않기 때문에 무수한 에러가 생긴다.

  - 예를 들어서 `data.js` 라는 파일이 있다고 치고, `index.ts` 파일에서 저기 있던 a라는 변수를 쓰고싶으면 어떻게 할까.

    ```js
    // (data.js)
    var a = 10;
    var b = {name :'kim'};
    ```

    ```ts
    // (index.ts)
    console.log(a + 1);
    ```
  
  <br>

  - 간단한 `html css js` 개발시엔 `index.html`에 저 파일 두개를 첨부하면 된다. 

    ```html
    <!--(index.html) -->
    <script src="data.js"></script>
    <script src="index.js"></script>  <!-- index.ts에서 변환된 js 파일 -->
    ```

  - 콘솔창엔 11 이 잘 나오지만, 타입스크립트 파일에서는 에러가 난다.

  - 왜냐면 저거 `<script>` 태그로 자바스크립트 파일 2개를 연결해서 쓰는건 `html` 입장이고 `ts` 입장에서는 a라는 변수를 `import` 해온 적이 없기 때문에 에러가 나는 것.

  <br>

  - `declare` 키워드로 재정의하기

  - declare 쓰면 이미 정의된 변수나 함수를 재정의할 수 있다. 물론 타입도 포함해서 재정의가 가능하다.

    ```js
    // (data.js)

    var a = 10;
    var b = {name :'kim'};  
    ```

    ```ts
    // (index.ts)

    declare let a :number;
    console.log(a + 1);

    /*
    declare 우측에 let a 같은 변수 정의 집어넣으면 된다.

    "a 라는 변수를 이 파일에서 잠깐 정의해주세요" 라는 뜻. 

    "a 라는 변수는 분명 어딘가에 있긴 하니까 그만 징징대세요" 라는 뜻이 더 맞다. 

    그래서 js파일 변수를 가져다 쓰는데 '타입에러나 변수없다는 에러'를 방지하고 싶으면 

    징징대는걸 막을 수 있는 공갈젖꼭지 declare 키워드를 쓴다. 

    (특징) declare 이게 붙은 코드들은 js로 변환되지 않는다.

    그냥 컴파일러에게 힌트를 주는 역할의 코드라서 그렇다. 
    */
    ```

  - 그래서 자바스크립트로만 작성된 외부 라이브러리들을 쓸 때도 나름 유용하다.

    타입스크립트 버전이 없다면 직접 `declare`로 타입작성하면 된다. 

    ts 파일들은 변수만들 때 타입까먹어도 자동으로 타입지정이 되어있으니 굳이 쓸 이유는 없다.

    `tsconfig.json` 안에 `allowJs` 옵션을 `true`로 켜두면, js파일도 타입지정이 알아서 `implicit` 하게 된다. 

    리액트 같은 프로젝트에서 유용
  
  <br>

  - ts 파일에 있던 변수를 다른 ts 파일에서 쓰려면 그냥 `import export` 하면 된다.

  <br>

  - `Ambient Module`

  - 타입스크립트가 제공하는 이상한 기능이 있다. 바로 import export 없이도 타입들을 다른 파일에서 가져다쓸 수 있다는 점인데, a.ts 에 있던 변수나 타입정의를 b.ts 에서도 아무런 설정없이 그냥 가져다 쓸 수 있는 것.

    ```js
    // (data.ts)

    type Age = number;
    let 나이 :Age = 20;  
    ```
    ```ts
    // (index.ts)

    console.log(나이 + 1) //가능
    let 철수 :Age = 30; //가능

    /*
    import export 그런거 안해도 같은 폴더에 있는 ts 파일은 그냥 사용가능하다. 

    왜냐면 그냥 ts 파일에 대충 입력한 변수와 타입들은 전부 global 변수 취급을 받기 때문. 

    전역으로 쓸 수 있는 파일을 전문용어로 ambient module 이라고 칭한다.

    (타입스크립트에서 let name 이라는 이름의 변수생성이 안되는 이유를 여기서 찾을 수 있다. 어디선가 기본으로 let name 이미 쓰고있음)
    */
    ```

  - `import / export` 키워드가 적어도 하나 있으면 그 파일은 로컬 모듈이 되고 거기 있는 모든 변수는 `export`를 해줘야 다른 파일에서 사용가능하다. 그래서 타입스크립트 파일이 다른 파일에 영향끼치는걸 막고싶으면 `export` 키워드를 강제로 추가하면 된다.

    ```js
    // (data.ts)
    export {};
    type Age = number;
    let 나이 :Age = 20; 
    ```

    ```ts
    // (index.ts)
    console.log(나이 + 1) //불가능
    let 철수 :Age = 30; //불가능

    /*
    이러면 data.ts에 있던 파일은 더 이상 글로벌 모듈 (ambient module)이 되지 않으며 

    다른 파일에서 함부로 가져다쓸 수 없다. import export 써야함 
    */
    ```
  
  <br>

  - `declare global`

  - ts 파일에 `import export` 문법이 없으면 `글로벌 모듈`이 된다.

  - ts 파일에 `import export` 문법이 있으면 `로컬 모듈` 이다. 

  - 근데 로컬 모듈에서 갑자기 전역으로 변수를 만들고 싶을 때가 있다. 따로 설정 없어도 프로젝트 내의 모든 파일에서 이용가능한 타입을 만들고 싶으면 이걸 붙여서 만들면 된다.

    ```ts
    declare global {
      type Dog = string;
    }

    /*
    이런 코드를 로컬 파일에 적어두면 모든 파일에서 Dog 타입을 이용가능하다.

    이것도 일종의 namespace 문법인데 여기다 적은건 global 이라는 이름의 namespace에 추가된다고 보면 된다. 

    그리고 global namespace는 모든 파일에서 기본적으로 이용이 가능. 

    아무튼 로컬 모듈에서 전역변수 만들고 싶을 때 쓴다.
    */
    ```  

- `d.ts` 이용하기

  - `declare` 키워드를 알았으니, d.ts 파일도 이해할 수 있다.

  - 코드를 쓰다보면 d.ts 라는 파일이 등장한다. 

  - 이 파일은 타입만 저장할 수 있는 형식이다.

  - 그리고 자바스크립트로 컴파일 되지 않는다.

  - d.ts 파일은 타입정의만 따로 저장해놓고 import 해서 사용하거나 프로젝트에서 사용하는 타입을 쭉 정리해놓은 레퍼런스용으로 사용한다.

  <br>

  - 타입만 따로 d.ts 에 모아놓으려면,

  - 어쩌구.d.ts 라고 작성한 파일은 타입 정의만 넣을 수 있다. type 키워드, interface 등등. 함수의 경우 함수에 `{ } 중괄호 붙이기는 불가능`하다. `파라미터 & return 타입만` 지정가능.

    ```ts
    export type Age = number;
    export type multiply = (x :number ,y :number) => number
    export interface Person { name : string }

    //이런 식으로 생김.
    ```

  - 정의해둔 타입은 `export 해서 써야한다.` 

  - `d.ts 파일은 ts 파일이 아니기 때문에` 그냥 써도 ambient module이 되지 않는다. 그래서 `export`를 추가해줘야 다른 ts 파일에서 가져다쓸 수 있다. 

  - 한 번에 많은 타입을 export 하고 싶은 경우, namespace에 담든가 아니면 자바스크립트 배운 사람처럼 import * as 어쩌구 문법을 쓴다.

  <br>

  - d.ts 파일을 레퍼런스용으로 사용하려면, ts파일마다 d.ts 파일을 자동생성하면 된다.

    ```ts
    // (tsconfig.json)
    {
        "compilerOptions": {
            "target": "es5",
            "module": "es6",
            "declaration": true,
        }
    }
    ```

    tsconfig에다가 declaration 옵션을 true로 바꿔주면 된다.

    그럼 저장시 자동으로 ts파일마다 d.ts 파일이 옆에 생성됨.

    열어보면 타입정의만 쭉 정리되어서 담겨있다.

    ```ts
    // (index.ts)

    let 이름 :string = 'kim';
    let 나이 = 20;
    interface Person { name : string } 
    let 사람 :Person = { name : 'park' }  
    ```

    이렇게 작성하면, 

    ```ts
    // (index.d.ts)

    declare let 이름: string;
    declare let 나이: number;
    interface Person {
        name: string;
    }
    declare let 사람: Person;
    ```

    이런 파일이 생성된다. (안생기면 import 문법 다 지워보기)

    어쩌구.d.ts 라는 파일엔 어쩌구.ts 파일에 있는 모든 변수와 함수 타입정의가 들어있다.

    자동생성의 경우 따로 수정하거나 그럴 순 없어서 (수정해도 어쩌구.ts 저장시 자동생성이라 의미없음)

    그냥 레퍼런스용으로 사용하면 된다.

    <br>

  - export 없이 d.ts 파일을 글로벌 모듈 만들기

  - 원래 `d.ts` 파일은 import export 없어도 `로컬모듈`이다.

    그래서 다른 ts파일에서 import를 해서 쓸 수 밖에 없는데 이게 귀찮으면 d.ts를 글로벌 모듈로 만들어보자.  

    파일이 많아지면 섞이기 때문에 굳이 왜 하나 싶지만 프로젝트 내에 types/common 이런 폴더 두개를 만들고, tsconfig.json 파일에 `"typeRoots": ["./types"]` 이런 옵션을 추가해주면 된다.

    이제 ts 파일 작성할 때 타입이 없으면 자동으로 여기서 타입 찾아서 적용해준다. 

    - 다만 이걸 쓸 경우 파일명.d.ts 자동생성 기능은 끄는게 좋을 듯 하다. 

    - d.ts 파일명은 기존 ts 파일명과 안겹치게 작성하는게 좋다. 

    - 하지만 이런거 쓰다가 `로컬 타입과 저런 글로벌 타입이 겹치면 곤란하므로` 역시 import export가 안전하다.

  <br>

  - 유명한 JS 라이브러리들은 d.ts 파일을 제공

    jQuery 혹은 Bootstrap 애니메이션 라이브러리를 가져다 쓴다고 가정한다.

    당연히 .js 로 끝나는 자바스크립트 파일일 것이고, 당연히 ts 파일에서 쓰려면 에러가 날 것이다. 

    그렇다면 직접 jquery.d.ts 파일을 만들어서 타입정의를 하면 되는데 유명한 라이브러리들은 전부 d.ts 파일을 누군가 만들어 놨기 때문에 그걸 찾아서 다운받아 사용하면 된다.

    `Definitely Typed` 여기가 주로 쓰는 라이브러리 모아놓은 github repository 인데 아마 대부분 라이브러리의 타입정의 파일을 찾을 수 있을 것이다.

    요즘은 npm으로 라이브러리 설치시 타입스크립트 타입정의된 버전을 따로 찾아서 설치할 수 있다.

    `TypeSearch` 여기 들어가면 타입정의된 npm 패키지를 찾아볼 수 있다.

    타입이 정의된 라이브러리를 npm으로 설치하면 `node_modules/@types` 이런 경로에 타입이 설치된다.

    그리고 타입스크립트 컴파일러는 자동으로 여기 있는 타입 파일을 참고해서 타입을 가져오게 되어있다. 

    `(참고) "typeRoots" 옵션이 있을 경우 node_modules/@types 폴더를 추가해야합니다.`
    
    아니면 그냥 "typeRoots" 옵션을 제거해본다. 

    혹은 따로 타입부분만 설치할 수도 있다. 

    예를 들어 타입파일이 제공되지 않는 jQuery 같은 경우 `npm install --save @types/jquery` 이렇게 강제로 설치하면 jQuery 문법 사용할 때 타입정의를 안해도 된다.

<br>

- `implements` 키워드

  - `interface`는 object 타입지정할 때 쓴다고 배웠다.

    하지만 용도가 하나 더 있는데 `class` 타입을 확인하고 싶을 때도 `interface` 문법을 사용할 수 있다. 근데 `implements` 키워드도 필요하다.

    ```ts
    class Car {
      model : string;
      price : number = 1000;
      constructor(a :string){
        this.model = a
      }
    }
    let 붕붕이 = new Car('morning');  
    ```

    class Car 로부터 생산되는 object들은 model과 price 속성을 가지게 된다.

    근데 class가 model, price 속성을 가지고 있는지 타입으로 확인하고 싶으면 어떻게 할까?

    그럴 경우 `interface + implements` 키워드로 확인하면 된다.

    ```ts
    interface CarType {
      model : string,
      price : number
    }

    class Car implements CarType {
      model : string;
      price : number = 1000;
      constructor(a :string){
        this.model = a
      }
    }
    let 붕붕이 = new Car('morning');
    ```

    `class 이름 우측에 implements를 쓰고 interface 이름을 쓰면` "이 class가 이 interface에 있는 속성을 다 들고있냐" 라고 확인이 가능하다.

    그래서 다 갖고 있으면 별말 안해주고 `빠진 속성이 있으면 에러로 알려준다`.

    <br>

  - `implements` 는 타입지정문법이 아니다!

    `implements` 라는건 `interface에 들어있는 속성을 가지고 있는지 확인만` 하라는 뜻이다.

    class 에 타입을 할당하고 변형시키는 키워드는 아니다.

    ```ts
    interface CarType {
      model : string,
      tax : (price :number) => number;
    }

    class Car implements CarType {
      model;   ///any 타입됨
      tax (a){   ///a 파라미터는 any 타입됨 
        return a * 0.1
      }
    }
    ```

    CarType을 `implements` 했냐고 썼다.

    근데 CarType에 있던 model : string 이런게 반영되는건 아니다. 
    
    class 안에서의 model은 any 타입이다. 타입을 지정해주지 않았으니까.

    class 함수도 마찬가지로 함수에 있던 number 타입이 전혀 반영되지 않는다. 

    `결론은 implements는 class의 타입을 체크하는 용도지 할당하는게 아니라는 것`  

    <br>

- `object index signatures`

  - object 자료에 타입을 미리 만들어 주고 싶을 때

    1. object 자료에 어떤 속성들이 들어올 수 있는지 아직 모르는 경우,
    2. 타입지정할 속성이 너무 많은 경우,
  
    `index signatures` 를 사용하면 편리하다.

  <br>

  - `index signatures`

    object 용 타입을 하나 만들고 싶은데, 어떤 속성이 들어올지 모르겠다면,

    ```ts
    interface StringOnly {
      [key: string]: string
    }

    let obj :StringOnly = {
      name : 'kim',
      age : '20',
      location : 'seoul'
    }
    ```

    StringOnly 라는 interface 를 하나 만들었다. 

    interface 안에 타입을 적을 때, 적다 보니 모든 타입이 string 이다. 

    이 때 위처럼 작성하면 하나하나 적는 것보다 한줄로 타입지정을 끝낼 수 있다.

    ```ts
    interface StringOnly {
      age: number, // ERROR
      [key: string]: string
    }

    interface StringOnly {
      age: String, // SUCCESS
      [key: string]: string
    }
    
    // [] 이 문법은 다른 속성과 함께 사용할 수 있지만, {모든 속성: string, age: number} <- 논리적으로 말이 되지 않아 금지시킨다.
    ```

    ```ts
    interface StringOnly {
      age: number, // SUCCESS
      [key: string]: string | number
    }

    // 이건 가능하다. {모든 속성: string|number, age: number} <- 논리적으로 말이 되기 때문.
    ```

    <br>

  - Array 형태도 가능

    자바스크립트에서 `array` 와 `object` 는 별 다를게 없는 같은 자료형이다.

    ```ts
    let obj = {
      0: 'kim',
      1: '20',
      2: 'seoul'
    }
    console.log(obj[2]); // 'seoul' 출력
    ```

    위 코드를 보면 `array` 와 똑같이 사용가능하다.(object 자료도 대괄호를 이용해 데이터 가져올 수 있음)

    ```ts
    interface StringOnly {
      [key: number]: string
    }

    let obj: StringOnly = {
      0: 'kim',
      1: '20',
      2: 'seoul'
    }
    ```

    [] 안에 key 값의 타입을 number 로 지정할 수도 있다. (대괄호 안에는 string 또는 number 만 가능)

    그렇다면 이제 object 의 키값이 숫자로 들어오는 경우, value 로 string 을 가져야한다는 것이다.

    {모든 숫자 속성: string} 과 동일하다.
    
    그래서 array 처럼 쓰고싶은 object 가 있으면 저렇게 타입지정도 가능하다. `숫자 key 만 넣을 거라면` `array + tuple` 타입을 사용하는 게 더 직관적일 수 있다.

    <br>

  - `Recursive Index Signatures`

    ```ts
    let obj = {
      'font-size' : {
        'font-size' : {
          'font-size' : 14
        }
      }
    }

    /*
    object 안에 object 안에 object 가 들어있다.
    실제로는 별 쓸모가 없어보이지만, 중첩된 object 들을 한 번에 타입지정하려면 어떻게 해야할까.
    직접 interface 안에 {...} 를 3번 중첩되게 만들어도 된다.
    하지만 이러한 테크닉을 사용할 수도 있다. 
    */

    interface MyType {
      'font-size': MyType | number
    }

    let obj: MyType = {
      'font-size' : {
        'font-size' : {
          'font-size' : 14
        }
      }
    }

    /*
    MyType 을 만들었는데, 'font-size' 속성은 MyType 과 똑같이 생겼다고 타입을 만들었다. 
    마지막 14 때문에 interface 의 타입지정에 number 가 추가된다.
    실제로 쓸 일 없을 듯.    
    */
    ```

    <br>

  
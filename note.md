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
    let john :'대머리';
    let kim :'솔로';

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
    function 함수(a : 'hello') : 1 | 0 | -1 {
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
    const 이름 = 'kim' | 'park' 
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

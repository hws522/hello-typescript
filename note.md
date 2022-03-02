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

     ```js
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

    ```js
    function 내함수(x: number): void {
      return x * 2; //여기서 에러남
    }
    ```

<br>

- 파라미터가 옵션일 경우, 미리 정의해주어야 에러가 나지 않는다.

  ```js
  function 내함수(x?: number) {}
  내함수(); //가능
  내함수(2); //가능
  ```

  - x : number | undefined 이거랑 똑같은 의미다.

  - 자바스크립트에서는 파라미터정의가 안되면 undefined 로 들어오기 때문이다.

<br>

- `Type Narrowing` 은 if문 등으로 타입을 하나로 정해주는 것을 뜻한다.

  ```js
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

  ```js
    변수명 as string
    // 위와 같은 모양으로 사용하면 변수를 string 타입으로 덮어씌운다.
  ```

  ```js
  function 내함수(x :number | string){
    return (x as number) + 1
  }
  console.log( 내함수(123) )
  ```

  - 변수명 as number 라고 쓰면 "나는 이 변수를 number 라고 주장하겠다" 라는 뜻이며 실제로 그렇게 타입을 변경해준다. 그래서 무조건 as 로 변경한 타입이 들어올것이라는 사실을 알고있어야 안전하게 쓸 수 있다.

  - as 키워드는 `union type` 같은 복잡한 타입을 하나의 정확한 타입으로 줄이는 역할을 수행한다. (number 타입을 as string 으로 바꾸려고 하면 에러)

  - 그냥 타입실드 임시 해제용입니다. 실제 코드 실행결과는 as 있을 때나 없을 때나 거의 동일. as 를 사용하면 변수를 숫자로 `가정` 하고 사용 가능하다.

  - as는 그냥 주장만 하는거지 실제로 타입을 바꿔주는건 아니기 때문에, 위 `내함수('123')` 처럼 숫자 대신 문자를 넣으면 '1231' 이 출력된다. 그저 에러가 안날 뿐이다.

  ```그래서 as 문법은 이럴 때 쓰자.

  1. 왜 타입에러가 나는지 정말 모르겠는 상황에 임시로 에러해결용.

  2. 내가 어떤 타입이 들어올지 정말 확실하게 알고 있는데 컴파일러 에러가 방해할 때.

  물론 대부분의 상황에선 as 보다 훨씬 엄격하고 좋은 type narrowing으로 해결할 수 있다.
  ```

<br>

-

# NOTE

<br>

- 모든 변수에 타입을 지정해줄 필요는 없다. 자동으로 부여해줌.(array, object 포함)

- 변수에 정의된 Union 타입은 할당과 동시에 OR 역할이 사라진다.

  - array, object에 정의된 Union 타입은 OR 연산자가 유지된다.

- unknown 타입엔 모든 자료 다 집어넣을 수 있다. 자료집어넣어도 타입은 그대로 unknown.

- 타입스크립트는 확실한 걸 좋아해서, 지금 변경하려는 변수의 타입이 확실해야 연산을 수행한다.

  - -1 같은 경우, number 타입만 가능하다. unknown은 number타입이 아니다.

  - string|number 이것도 number 타입이 아니다. (union type은 새로운 타입을 하나 만든 거)

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

- 함수는 void 타입이 있다.

  - return 할 자료가 없는 함수의 타입에 사용한다.

    <br>

    ```js
    function 내함수(x: number): void {
      return x * 2; //여기서 에러남
    }
    ```

- 파라미터가 옵션일 경우, 미리 정의해주어야 에러가 나지 않는다.

    <br>

  ```js
  function 내함수(x?: number) {}
  내함수(); //가능
  내함수(2); //가능
  ```

  - x : number | undefined 이거랑 똑같은 의미다.

  - 자바스크립트에서는 파라미터정의가 안되면 undefined 로 들어오기 때문이다.

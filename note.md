# NOTE

<br>

- 모든 변수에 타입을 지정해줄 필요는 없다. 자동으로 부여해줌.(array, object 포함)

- 변수에 정의된 Union 타입은 할당과 동시에 OR 역할이 사라진다.

  - array, object에 정의된 Union 타입은 OR 연산자가 유지된다.

- unknown 타입엔 모든 자료 다 집어넣을 수 있다. 자료집어넣어도 타입은 그대로 unknown.

- 타입스크립트는 확실한 걸 좋아해서, 지금 변경하려는 변수의 타입이 확실해야 연산을 수행한다.

  - -1 같은 경우, number 타입만 가능하다. unknown은 number타입이 아니다.

  - string|number 이것도 number 타입이 아니다. (union type은 새로운 타입을 하나 만든 거)

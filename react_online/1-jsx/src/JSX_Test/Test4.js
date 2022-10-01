// 1. a라는 변수와 b라는 변수를 만들고 각각에 숫자(정수)를 넣어주세요.
// 2. &&연산자를 이용하여 a가 b보다 크다면 "a가 b보다 큽니다"를 출력하도록 해주세요.

function Test4() {
  const a = 10;
  const b = 5;

  return <>{a > b && <h2>a가 b보다 큽니다.</h2>}</>;
}

export default Test4;

import "./JSXTest2.css";

function ReactTest2() {
  const flag = true;
  var name = "";
  if (flag) name = "종구";
  else name = "문래";
  var animal = "";
  if (flag) animal = "고양이";
  else animal = "강아지";
  // 답
  // const name = "종구";
  // const animal = "고양이";

  return (
    <div>
      <h1>Test2</h1>
      {flag && (
        <h2>
          제 반려 동물의 이름은 <span class="underline">{name}</span>입니다.
        </h2>
      )}
      {flag && (
        <h2>
          <span class="underline">{name}</span>는{" "}
          <span class="underline">{animal}</span>입니다.
        </h2>
      )}
      {/* <h2>
        제 반려 동물의 이름은 <u>{name}</u>입니다.
        <br />
        <u>{name}</u>는 <u>{animal}</u>입니다.
      </h2> */}
    </div>
  );
}

export default ReactTest2;

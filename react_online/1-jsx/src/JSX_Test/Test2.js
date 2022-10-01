// 1. App.js 에서 name 과 animal 이라는 변수를 선언해주세요.
// 2. name 에는 본인이 키우는 반려동물의 이름을(없다면 아무 이름이나 넣어주세요),
// animal 에는 본인이 키우는 반려동물의 종(없다면 아무 동물이나 넣어주세요)을 써주세요.
// 3. h2 태그를 작성하고 다음 사진과 같이 나오도록 해주세요.

function Test2() {
  const name = "로이";
  const animal = "강아지";
  return (
    <>
      <h2>
        제 반려 동물의 이름은 <u>{name}</u>입니다.
        <br />
        <u>{name}</u>는 <u>{animal}</u>입니다.
      </h2>
    </>
  );
}

export default Test2;

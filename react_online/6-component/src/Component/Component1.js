import React from "react";

// 1️⃣
// <li> 태그가 계속 반복
// map 함수 사용
// const Sample = () => {
//   return (
//     <div>
//       <li>청바지</li>
//       <li>패딩</li>
//       <li>반팔</li>
//       <li>운동화</li>
//     </div>
//   );
// };

// 2️⃣
// 이렇게 작성하면 "key" prop이 없다는 경고창 뜸
// 리액트에서는 컴포넌트 배열을 렌더링했을 때 어떤 원소에 변동이 있었는지 알아내기 위해 key를 사용
// 만약 key가 없다면 virtual Dom을 비교하는 과정에서 리스트를 순차적으로 비교하면서 변화를 감지함
// 하지만 key가 있다면 이 값을 사용해서 어떤 변화가 일어났는지 더욱 빠르게 알 수 있음
// const Sample = () => {
//   const fashion = ["청바지", "패딩", "반팔", "운동화"];
//   const fashionList = fashion.map((fashion) => <li>{fashion}</li>);
//   return <ul>{fashionList}</ul>;
// };

// 3️⃣
// key 설정
// key 값을 설정할 때는 map 함수의 인자로 전달되는 함수 내부에서 컴포넌트 props를 설정하듯이 설정해주면 됨
// key 값은 언제나 유일해야 함
// 따라서 데이터가 가진 고유값을 key 값으로 설정하면 좋음
// 우리가 만든 컴포넌트에는 고유값이라고 할 만한게 없음
// 이때는 map 함수에 전달되는 콜백 함수의 인수인 index 값을 사용하면 됨
// 고유한 값이 없을 때만 index값을 key로 사용해주면 됨
// index 값을 key로 사용하면 배열이 변경될 떄 효율적으로 리렌더링하지 못하기 때문
// 에러 메세지가 나왔을 때 사용
const Sample = () => {
  const fashion = ["청바지", "패딩", "반팔", "운동화"];
  const fashionList = fashion.map((fashion, index) => (
    <li key={index}>{fashion}</li>
  ));
  return <ul>{fashionList}</ul>;
};

export default Sample;

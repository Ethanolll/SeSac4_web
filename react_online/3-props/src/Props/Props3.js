// Children
// 태그 사이의 내용을 보여 줌

// 방법 1️⃣
// const MyComponent = (props) => {
//   return (
//     <div>
//       안녕하세요, 제 이름은 {props.name}입니다. <br />
//       children 값은 {props.children}
//       입니다.
//     </div>
//   );
// };

// ✨ 방법 2️⃣
// 비구조화 할당 문법
const MyComponent = (props) => {
  const { name, children } = props;
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다. <br />
      children 값은 {children}
      입니다.
    </div>
  );
};

// 방법 3️⃣
// const MyComponent = ({ name, children }) => {
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name}입니다. <br />
//       children 값은 {children}
//       입니다.
//     </div>
//   );
// };

MyComponent.defaultProps = {
  name: "기본 이름",
};

export default MyComponent;

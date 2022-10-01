// defaultProps
// props 값을 따로 저장하지 않았을 때 보여줄 기본값을 설정

const MyComponent = (props) => {
  return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

export default MyComponent;

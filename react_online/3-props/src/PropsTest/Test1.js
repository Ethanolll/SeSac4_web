// 새로운 파일을 하나 만들어주세요. 그리고 본인이 좋아하는 음식을 소개하는 문구를 작성해주세요.
// 1. food라는 props를 생성하세요.
// 2. props 기본값을 설정하여 food에 값이 없을 때도 기본값이 출력되도록 해주세요.
// 3. food props만 빨간색 출력되도록 설정해주세요.
const Props_ex1 = (props) => {
  return (
    <h1>
      제가 좋아하는 음식은
      <span style={{ color: "red" }}> {props.food}</span>
      입니다.
    </h1>
  );
};

Props_ex1.defaultProps = {
  food: "아귀찜",
};

export default Props_ex1;

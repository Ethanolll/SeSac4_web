// 1. 클래스형 컴포넌트를 만드세요.
// 2. text, valid란 props를 생성하세요.
// 3. App 컴포넌트에서 text를 받아와 출력하게 해주세요.
// 그리고 text 값을 받아오지 못하면 "이건 기본 text props입니다."라는 문구가 출력되게 해주세요.
// 4. text에 문자를 필수 props로 지정해주세요.
// 5. button을 만들고 onClick으로 valid를 지정해주세요.
// valid는 콘솔에 "콘솔 띄우기 성공!"이라는 메세지를 출력하도록 해주세요.
import React, { Component } from "react";
import PropTypes from "prop-types";

class Props_ex1 extends Component {
  render() {
    const { text, valid } = this.props;

    return (
      <div>
        <h2>{text}</h2>
        <br />
        <button onClick={valid}>콘솔 메세지</button>
      </div>
    );
  }
}

Props_ex1.defaultProps = {
  text: "이건 기본 text props입니다.",
};

Props_ex1.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Props_ex1;

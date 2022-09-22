import React, { Component } from "react";
import PropTypes from "prop-types";
class ClassComponent extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <h2>ClassComponent - class</h2>
        <h5>name : {this.props.name}</h5>
        <h5>location : {this.props.location}</h5>
      </div>
    );
  }

  static propTypes = {
    name: PropTypes.string,
  };
}

// function ClassComponent(props){
//     return (
//         <div>
//             <h2>ClassComponent - function</h2>
//             <h5>name : {props.name}</h5>
//             <h5>location : {props.location}</h5>
//         </div>
//     )
// }

//root.render에서 name 이름을 설정하지 않으면 뜨게 함

ClassComponent.defaultProps = {
  name: "기본이름",
  location: "기본위치",
};

// Type 검사를 할 수 있음

// ClassComponent.propTypes = {
//     name: PropTypes.string
// }

// 위 두개는 함수형이던 클래스형이던 상관없음

export default ClassComponent;

// classcomponent를 사용할 땐 이 구조로 해야됨
// render라는 함수를 무조건 써줘야함

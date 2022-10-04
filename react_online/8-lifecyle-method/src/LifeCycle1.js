import React, { Component } from "react";

class LifeCycle extends Component {
  state = {
    number: 0,
    color: "purple",
  };

  myRef = null; // ref를 설정할 부분

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  // getDerivedStateFromProps 메서드
  // props로 받아온 값을 state에 동기화시키는 용도로 사용됨
  // 컴포넌트가 마운트될 때와 업데이트될 떄 호출됨
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");

    // if 부분에서 조건에 따라 특정 값을 동기화하도록 하고 있음
    // nextProps의 value가 prevState의 value와 같지 않다면 value로 nextProps의 value를 동기화시킴
    // 만약 nextProps의 value와 prevState의 value가 같다면 return null이 실행됨
    // 즉, state를 변경할 필요가 없다면 null을 반환하게 됨
    // 그리고 getDerivedStateFromProps 메서드는 인자로 nextProps와 prevState를 받음
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  // componentDidMoun 메서드
  // 컴포넌트를 만들고, 첫 렌더링을 다 마친 후 실행
  // 이 안에서 다른 자바스크립트 라이브러리 또는 프라임워크의 함수를 호출하거나 이벤트 등록 등 비동기 작업을 처리하면 됨
  componentDidMount() {
    console.log("componentDidMount");
  }

  // shouldComponentUpdate 메서드
  // props 또는 state를 변경했을 때 리렌더링을 시작할지 여부를 시정하는 메서드
  // 인자로는 nextProps와 nextState를 받고,
  // 이 메서드에서는 반드시 true와 false 값을 반환해줘야 함.
  // 컴포넌트를 만들 때 이 메서드를 따로 생성하지 않으면 기본적으로 true 값을 반환함
  // 이 메서드 안에서 현재 props와 state는 this.props, this.state로 접근할 수 있음
  // 그리고 새로 설정될 props와 state는 nextProps, nextState로 접근할 수 있음
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);

    return nextState.number % 10 !== 4;
    // 숫자의 마지막 자리가 4면 리렌더링하지 않음.
  }

  // componentWillUnmount 메서드
  // 컴포넌트를 DOM에서 제거할 때 실행
  // componentWillUnmount에서 등록한 이벤트나 타이머, 직접 생성한 DOM이 있다면 여기서 제거 작업을 해주어야 함
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  // getSnapshotBeforeUpdate 메서드
  // render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출됨
  // 이 메서드에서 반환하는 값은 componentDidUpdate에서 세 번째 파라미터인 snapshot 값으로 전달받을 수 있음
  // 이 메서드는 주로 업데이트하기 직전의 값을 참고할 일이 있을 떄 활용됨
  // 예를 들어 스크롤바 위치를 유지하기 원할 떄를 들 수 있음
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");

    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  // componentDidUpdate 메서드
  // 리렌더링을 완료한 후 실행됨
  // 여기서는 prevProps나 prevState를 사용하여 컴포넌트가 이전에 가졌던 데이터에 접근할 수 있음
  // 또한 getSnapshotBeforeUpdate에서 반환한 값이 있다면 여기서 snapshot 값을 전달받을 수 있음
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState);

    if (snapshot) {
      console.log("업데이트되기 직전 색상 : ", snapshot);
    }
  }

  render() {
    console.log("render");

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>

        <p>color: {this.state.color}</p>

        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycle;

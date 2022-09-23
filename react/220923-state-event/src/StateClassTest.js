import React, {Component} from "react";

class StateClassTest extends Component {

  state = {
    cnt: 0,
  };

  render(){
    return(
      <div>
        <div><h1>문제1</h1></div>
        <p>{this.state.cnt}</p>
        <button onClick={()=>{
          this.setState(prevState => {
            return {cnt: prevState.cnt + 2}
          });
          }}>+2</button>
        <button onClick={()=>{
            this.setState(prevState => {
                return {cnt: prevState.cnt - 1}
            });
            }}>-1</button>
      </div>
    )
  }
}
export default StateClassTest;
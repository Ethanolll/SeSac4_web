import "./Test63.css";
import React, {Component, createRef} from 'react';

  class Test63 extends Component {
    box = React.createRef();
    moveBottom = () => {
        this.box.current.scrollIntoView(false);
    }
    render() {
        return (<>
        <div className="div1">
            <div className="div2" ref={this.box}></div>
        </div>
        <button onClick={this.moveBottom}>맨 밑으로</button>
        </>);
    }
}
export default Test63;
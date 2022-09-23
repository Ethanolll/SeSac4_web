import React, {Component} from "react";

class EventTest1 extends Component {

    state = {
        name : "Hello World!"
      };

    handler = () => {
        this.setState({
            name: "Goodbye World!"
        })
    }

    render() {
        return (
            <div>
                <h1>문제1</h1>
                <h1>{this.state.name}</h1>
                <br/>
                <button onClick={this.handler}>클릭</button>
                {/* <button onClick={this.printConsole}>printConsole</button>
                <button onClick={this.printConsole2}>printConsole2</button> */}
            </div>
        )
    }
}

export default EventTest1;
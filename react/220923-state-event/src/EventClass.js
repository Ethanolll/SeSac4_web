import React, {Component} from "react";

class EventClass extends Component {

    constructor(props) {
        super (props);

        this.printConsole = this.printConsole.bind(this);
    }
    printConsole(msg) {
        console.log("printConsole");
        console.log(msg);
        console.log(this);
    }
    printConsole2 = () => {
        console.log("printConsole2");
        console.log(this);
    } // 화살표 함수 쓰면 bind 하지 않아도 됨!
    sendParameter = () => {
        this.printConsole("2")
    }
    render() {
        return (
            <div>
                <button onClick={this.sendParameter}>sendConsole</button>
                <button onClick={this.printConsole}>printConsole</button>
                <button onClick={this.printConsole2}>printConsole2</button>
            </div>
        )
    }
}

export default EventClass;
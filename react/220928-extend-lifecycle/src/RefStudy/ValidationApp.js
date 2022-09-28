import React, { Component } from "react";
import Validation from "./Validation";
import Refsample from "./Refsample";
import Scroll from "./Scroll";

class ValidationApp extends Component {
  render() {
    return (
      <div>
        <Validation />
        <Refsample />
        <Scroll ref={(ref) => (this.scroll = ref)} />
        <button onClick={() => this.scroll.scrollBottom()}>맨 밑으로</button>
      </div>
    );
  }
}

export default ValidationApp;

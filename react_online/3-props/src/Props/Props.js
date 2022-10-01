import Props1 from "./Props1";
import Props2 from "./Props2";
import Props3 from "./Props3";
import Props4 from "./Props4";
import Props5 from "./Props5";
import Props6 from "./Props6";

function App() {
  return (
    <div>
      <Props1 name="React" />
      <hr />
      <Props2 />
      <hr />
      <Props3>리액트</Props3>
      <hr />
      {/* string 값인데 숫자를 쓰면 오류가 생김 */}
      {/* <Props4 name={3}>리액트</Props4> */}
      <Props4 name="React">리액트</Props4>
      <hr />
      <Props5 name="리액트" favoriteNumber={2}>
        리액트
      </Props5>
      <hr />
      <Props6 name="리액트" favoriteNumber={2}>
        리액트
      </Props6>
    </div>
  );
}

export default App;

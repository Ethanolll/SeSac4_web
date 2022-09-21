import './APP.css';

function App() {
  const flag = true;
  var name = "";
  if (flag) name = "SeSAC";
  else name = "문래";

  // const style = {
  //   backgreoundColor : "yellow",
  //   color : "blue"
  // };

  return (
    <div className = "test" style={{
      backgroundColor: "yellow",
      color: "blue"
    }}>
      {name}
      {/* {flag ? (<h1>True</h1>):<h2>False</h2>} */}
      {flag && (<h1>True</h1>)} 
      {/* 조건 & 참 -> 거짓이면 실행 X */}
    </div>
  );
}

export default App;

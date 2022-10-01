import Test1 from "./Test1";
import Test2 from "./Test2";
import Test3 from "./Test3";
const App = () => {
  const my_func = () => {
    console.log("콘솔 띄우기 성공!");
  };
  return (
    <div>
      <Test1 />
      <Test2
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,500원"
        type="자기계발서"
      />
      <Test3 text="App 컴포넌트에서 넘겨준 text props입니다." valid={my_func} />
    </div>
  );
};

export default App;

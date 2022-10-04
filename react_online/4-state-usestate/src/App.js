import ClassComponent from "./state/ClassComponent/ClassComponent";
import FunctionComponnet from "./state/FunctionComponent/FunctionComponent";
import Test from "./state/State_Test/Test";

function App() {
  return (
    <div>
      <ClassComponent />
      <hr />
      <FunctionComponnet />
      <hr />
      <Test />
    </div>
  );
}

export default App;

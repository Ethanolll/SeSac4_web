function ReactTest1() {
  const flag = true;

  return (
    <div>
      {flag && (<h1>Test1</h1>)}
      {flag && (<p>이것은 div입니다.<h3>이것은 div 안에 있는 h3태그 입니다</h3></p>)} 
    </div>
  );
}

export default ReactTest1;

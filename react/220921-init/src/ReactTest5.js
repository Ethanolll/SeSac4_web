function ReactTest5() {
    return (
     <div>
        {(<h1>Test5</h1>)}
        {/* 조건? 참일때 실행문: 거짓일때 실행문  */}
        {(<h1 style={{backgroundColor: "yellow", color: "orange", textAlign: "center"}}>Hello World</h1>)}
        <input />
        {/* </input> */}
     </div>
    );
   }
  
export default ReactTest5;
function ReactTest3() {
    const name = "3 + 5 == 8";
    return (
     <div>
        {(<h1>Test3</h1>)}
        {/* 조건? 참일때 실행문: 거짓일때 실행문  */}
      {3 + 5 == 8 ? (<h2>정답입니다!</h2>) : (<h2>오답입니다!</h2>)}
     </div>
    );
   }
  
export default ReactTest3;
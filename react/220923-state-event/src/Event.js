function Event() {
    function clickEvent(e) {
        console.log(e);
    }
    function aClick(e) {
        e.preventDefault(); // window의 기본 동작을 막는 친구
        console.log("aClick");
        console.log(e);
    }
    return (
        <div>
            <a href="#" onClick={aClick}>a태그</a>
            <button onClick={clickEvent}>클릭</button>
        </div>
    )
}

export default Event;
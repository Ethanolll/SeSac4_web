// 1. src 디렉터리 안에 ex 라는 폴더를 만들고, ex 폴더 안에 Event_ex.js 라는 파일을 생성하세요.
// 2. Event_ex는 함수형 컴포넌트로 만들어주세요.
// 3. 2개의 input을 만들고 각각 이름과 이메일을 받도록 해주세요.
// 4. "등록"이란 버튼을 클릭했을 때 사용자가 입력한 이름과 이메일이 아래에 추가되도록 해주세요.
// 5. 사진과 같이 코디와 윤소희의 정보가 미리 입력되어 나타나게 해주세요.
import React, { useState } from "react";

const Event_ex = () => {
  const [data, setData] = useState([
    { id: 1, user: "lemon", email: "lemon@naver.com" },
    { id: 2, user: "orange", email: "orange@naver.com" },
  ]);

  const [inputUser, setInputUser] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [nextId, setNextId] = useState(3);

  const onChangeUser = (e) => setInputUser(e.target.value);
  const onChangeEmail = (e) => setInputEmail(e.target.value);

  const eventClick = () => {
    const Nextdata = data.concat({
      id: nextId,
      user: inputUser,
      email: inputEmail,
    });

    setNextId(nextId + 1);
    setData(Nextdata);
    setInputUser("");
    setInputEmail("");
  };

  const dataList = data.map((data) => (
    <h2 key={data.id}>
      {data.user}: {data.email}
    </h2>
  ));

  return (
    <div>
      <input
        type="text"
        name="user"
        placeholder="이름"
        value={inputUser}
        onChange={onChangeUser}
      />
      <input
        type="text"
        name="email"
        placeholder="이메일"
        value={inputEmail}
        onChange={onChangeEmail}
      />
      <button onClick={eventClick}>등록</button>

      <div>{dataList}</div>
    </div>
  );
};

export default Event_ex;

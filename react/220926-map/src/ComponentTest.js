import React, { useState } from 'react';
 
const Sample = () => {
    const[names, setNames] = useState([
        { id: 1, text: '코디', email : 'codi@gmail.com' },
        { id: 2, text: '윤소희', email : 'yoonsohee@gmail.com' },

    ]);
 
    const [inputText, setInputText] = useState( '' );
    const [inputEmail, setInputEmail] = useState( '' );
    const [nextId, setNextId] = useState(3); //새로운 항목을 추가할 때 사용할 id
 
    const onChange = (e) => setInputText(e.target.value);
    const onChange2 = (e) => setInputEmail(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText,
            email: inputEmail
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText( '' );
        setInputEmail( '' );
    }
 
    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }
 
    const namesList = names.map(name => <h2 key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text} : {name.email}</h2>);
    return (
        <div>
            <input value={inputText} onChange={onChange} placeholder="이름"></input>
            <input value={inputEmail} onChange={onChange2} placeholder="이메일"></input>
            <button onClick={onClick}>추가</button>
            <ul>
                {namesList}
            </ul>
        </div>
    );
};
 
export default Sample;
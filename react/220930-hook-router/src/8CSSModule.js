import style from "./8CSSModule.module.css";

const CSSMoulde = () => {
    return (
        <div className={`${style.box1} ${style.center}`}>
            <h2>Css Module</h2>
        </div>
    )
    // classnames 라이브러리 설치
    // npm i classnames
    // import Names from 'classnames';
    // <div className = {names(style.box1, style.center)}/>
}

export default CSSMoulde;
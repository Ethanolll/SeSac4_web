import "./Test2.css";
import book from "./야경.jpg";

const Props_ex1 = ({ title, author, price, type }) => {
  return (
    <div className="all">
      <div className="best">이번주 베스트셀러</div>
      <img src={book} className="book_img"></img>
      <div className="title">{title}</div>
      <div className="content">저자: {author}</div>
      <div className="content">판매가: {price}</div>
      <div className="content">구분: {type}</div>
    </div>
  );
};

export default Props_ex1;

import {useParams, useLocation, useSearchParams, useNavigate} from 'react-router-dom';

function Product() {
    const {id} = useParams();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const link = "/student/new?name=sesac&key=id#nature";
    return (
        <div style={{backgroundColor:"beige", padding: "10px"}}>
            <p><b>학생의 이름은 <span style={{color:"green"}}>{id}</span> 입니다.</b></p>
            <p> {searchParams !=0 ? (<p>실제 이름은 <span style={{color:"red"}}><b>{searchParams.get("name")}</b></span></p>) : <p></p>}</p>
            <button onClick={() => navigate(-1)}>이전페이지로</button>
        </div>
    );
}

export default Product;
import {useParams, useLocation, useSearchParams, useNavigate} from 'react-router-dom';

function Product() {
    const {id} = useParams();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    // const id2 = useParams().id;

    // navigate는 함수로 사용할 수 있음
    const navigate = useNavigate();
    return (
        <div>
            <h1>{id}번 Product</h1>

            <ul>
                {/* 현재 접속한 경로 */}
                <li>hash : {location.hash}</li> 
                <li>pathname : {location.pathname}</li>
                {/* ?까지 */}
                <li>search : {location.search}</li>
                <li>state : {location.state}</li>
                {/* 페이지 고유값 */}
                <li>key : {location.key}</li>
            </ul>

            <ul>
                <li>keyWords : {searchParams}</li>
                <li>keyWord : {searchParams.get("search")}</li>
            </ul>

            <ul>
                <li><button onClick={() => navigate(-2)}>Go 2 pages back</button></li>
                <li><button onClick={() => navigate(-1)}>Go back</button></li>
                <li><button onClick={() => navigate(1)}>Go foward</button></li>
                <li><button onClick={() => navigate(2)}>Go 2 pages foward</button></li>
                <li><button onClick={() => navigate('/')}>Go Root</button></li>
                <li><button onClick={() => navigate('/', {state: 'a'})}>Go Root2</button></li>
            </ul>
        </div>
    );
}

export default Product;

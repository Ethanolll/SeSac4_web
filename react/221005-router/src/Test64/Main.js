import {Link, useLocation} from 'react-router-dom';
function Main() {
    const location = useLocation();
    return (
        <div style={{display: "flex", backgroundColor:"beige"}}>
            <Link to="/">
                <h2>ReactRouter 실습</h2>
            </Link>
            <nav>
                <ul style={{display:"flex", listStyle:"none", fontSize:"20px"}}>
                    <li style={{marginRight: "15px"}}><Link to="/student/sesac">학생SeSAC</Link></li>
                    <li style={{marginRight: "15px"}}><Link to="/student/nature">자연</Link></li>
                    <li><Link to="/student/new?name=sesac&key=id#nature">searchParams</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Main;

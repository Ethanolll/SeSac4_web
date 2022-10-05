import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./Main";
import Student from "./Student";
const ReactRouter = () => {
    return (
        <div>
            <BrowserRouter>
                {/* <Link to='/'>ReactRouter 실습</Link> */}
                <Routes>
                    <Route path="/" element={<Main/>}></Route>
                    {/* <Route path="/product" element={<Product/>}></Route> */}
                    {/* 파라미터로 받을 땐 id 앞에 :를 붙여야 함 */}
                    <Route path="/student/:id" element={<Student/>}></Route> 
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default ReactRouter;
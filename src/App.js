import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Resource from "./pages/Resource/Resource";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="resource" element={<Home/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="/" element={<Resource/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
};

export default App;
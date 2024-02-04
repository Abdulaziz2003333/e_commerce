import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../App.jsx";
import Register from "../components/auth/Register.jsx";
import Nav from "../components/Nav.jsx";
import Login from "../components/auth/Login.jsx";
import Error from "../components/Error.jsx";

const BrowserProvider = () => {
    return (
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default BrowserProvider;
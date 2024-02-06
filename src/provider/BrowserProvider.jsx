import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../App.jsx";
import Register from "../components/auth/Register.jsx";
import Nav from "../components/Nav.jsx";
import Login from "../components/auth/Login.jsx";
import Error from "../components/Error.jsx";
import Footer from "../components/Footer.jsx";
import Contact from "../components/Contact.jsx";

const BrowserProvider = () => {
    return (
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<Error/>}/>

            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default BrowserProvider;
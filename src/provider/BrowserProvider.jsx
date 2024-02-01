import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../App.jsx";

const BrowserProvider = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default BrowserProvider;
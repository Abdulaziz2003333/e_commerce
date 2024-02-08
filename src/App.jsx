import Nav from "./components/Nav.jsx";
import BottomNav from "./components/BottomNav.jsx";
import Hero from "./components/Hero.jsx";
import Today from "./components/Today.jsx";
import Categoryes from "./components/Categoryes.jsx";
import ThisMonth from "./components/ThisMonth.jsx";
import Reklama from "./components/Reklama.jsx";
import Products from "./components/Products.jsx";


function App() {

    return (
        <div className="overflow-x-hidden">
           <Hero/>
            <Today/>
            <Categoryes/>
            <ThisMonth/>
            <Reklama/>
            <Products/>
        </div>
    )
}

export default App

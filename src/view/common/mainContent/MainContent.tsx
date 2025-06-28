import './MainContent.css'
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home.tsx";
import {About} from "../../pages/About/About.tsx";
import {Contact} from "../../pages/Contact/Contact.tsx";
import {Service} from "../../pages/Service/Service.tsx";
import {ShoppingCart} from "../../pages/ShoppingCart/ShoppingCart.tsx";
export function MainContent() {
    return (
        <div className="flex justify-center items-center bg-blue-950 ">
            <Routes>
                <Route path="/" element={ <Home />}></Route>
                <Route path="/About" element={ <About />}></Route>
                <Route path="/Contact" element={ <Contact />}></Route>
                <Route path="/Service" element={ <Service />}></Route>
                <Route path="/ShoppingCart" element={ <ShoppingCart/>}></Route>

            </Routes>
        </div>
    );
}

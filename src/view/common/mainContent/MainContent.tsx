import './MainContent.css'
import {Route, Routes} from "react-router-dom";
import * as React from "react";
import {Home} from "../../pages/Home/Home.tsx";
import {About} from "../../pages/About/About.tsx";
import {Contact} from "../../pages/Contact/Contact.tsx";
import {Service} from "../../pages/Service/Service.tsx";
export function MainContent() {
    return (
        <div className="main-content">
            <Routes>
                <Route path="/" element={ <Home />}></Route>
                <Route path="/About" element={ <About />}></Route>
                <Route path="/Contact" element={ <Contact />}></Route>
                <Route path="/Service" element={ <Service />}></Route>
            </Routes>
        </div>
    );
}

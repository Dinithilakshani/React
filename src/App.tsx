import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
//import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout.tsx";
import {Login} from "./view/pages/Login/Login.tsx";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout.tsx";
import * as React from "react"
function app (){
    return(
        <>
            <BrowserRouter>

               <Routes>
                   <Route path="/*" element={<DefaultLayout/>}></Route>
                <Route path="/Login" element={<Login /> }></Route>
               </Routes>
            </BrowserRouter>
        </>

    )
}export default app;
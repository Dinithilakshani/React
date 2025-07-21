import './App.css'
import { Route, Routes, useNavigate} from "react-router-dom";
//import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout.tsx";
import {Login} from "./view/pages/Login/Login.tsx";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout.tsx";
import {useEffect} from "react";
import {isTokenExpired} from "./auth/auth.ts";

function app (){
// eslint-disable-next-line react-hooks/rules-of-hooks
const navigate = useNavigate()

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const  token = localStorage.getItem("token");
        if(!token || isTokenExpired(token)){
            localStorage.removeItem("token");
            navigate(("/login"))
        }
    }, [navigate]);
    return(
        <>


               <Routes>
                   <Route path="/*" element={<DefaultLayout/>}></Route>
                <Route path="/Login" element={<Login /> }></Route>
               </Routes>

        </>

    )
}export default app;
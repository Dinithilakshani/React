import './App.css'
import {NavBar} from "./view/common/navBar/NavBar.tsx";
import {MainContent} from "./view/common/mainContent/MainContent.tsx";
import {Footer} from "./view/common/Footer/Footer.tsx";
function app (){
    return(
        <>
            <NavBar></NavBar>
            <MainContent></MainContent>
            <Footer></Footer>
        </>
    )
}export default app;
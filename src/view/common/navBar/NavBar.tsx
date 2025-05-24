import './navbar.css'
import logo from '../../../assets/img-removebg-preview.png'
import {Link} from "react-router-dom";

export function NavBar() {
    return (

        <nav className="navbar bg-">
            <div id="logo">
                <img src={logo as string} alt="Company Logo"/>
                <p className="business-name">Ocado Company</p>
            </div>
            <div className="navbar-links">

            <li><Link className="navbar-item " to="/"> Home</Link></li>
                <li><Link className="navbar-item " to="/About"> About</Link></li>
                <li><Link className="navbar-item "  to="/Service">Service</Link></li>
                <li><Link className="navbar-item " to ="/Contact">Contact</Link></li>
                <button><Link to="/Login">Sing In</Link> </button>
            </div>
        </nav>
    );
}
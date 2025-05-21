import './navbar.css'
export function NavBar() {
    return (

        <nav className="navbar-container">
            <div id="logo">
                <img src="src/assets/img-removebg-preview.png" alt="Company Logo"/>
            </div>
            <div className="navbar-links">
                <div className="navbar-item active">Home</div>
                <div className="navbar-item">About</div>
                <div className="navbar-item">Services</div>
                <div className="navbar-item">Contact</div>
            </div>
        </nav>
    );
}
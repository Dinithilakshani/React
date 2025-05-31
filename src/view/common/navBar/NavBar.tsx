import logo from '../../../assets/img-removebg-preview.png';
import { Link } from 'react-router-dom';

export function NavBar() {
    return (
        <nav className="bg-black flex items-center justify-between px-6 py-4 shadow-md">
            <div className="flex items-center gap-4">
                <img src={logo as string} alt="Company Logo" className="h-12 w-auto" />
                <p className="text-xl font-semibold text-white">Ocado Company</p>
            </div>
            <ul className="flex items-center gap-6">
                <li>
                    <Link className="text-white hover:text-blue-500 transition" to="/">Home</Link>
                </li>
                <li>
                    <Link className="text-white hover:text-blue-500 transition" to="/About">About</Link>
                </li>
                <li>
                    <Link className="text-white hover:text-blue-500 transition" to="/Service">Service</Link>
                </li>
                <li>
                    <Link className="text-white hover:text-blue-500 transition" to="/Contact">Contact</Link>
                </li>
                <li>
                    <Link to="/Login">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                            Sign In
                        </button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

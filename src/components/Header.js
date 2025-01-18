import { LOGO_URL } from "../utils/constant";
import { useState , useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
    const [btnName, setbtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    
    // subscribing to the store using selector
    const cartItems = useSelector((store) =>store.cart.items);
    console.log("cart",cartItems);
    return (
        <header className="flex justify-between items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-4 px-8 shadow-lg border-b border-gray-200">
            {/* Logo Section */}
            <div className="logo-container">
                <img className="w-24 h-auto rounded-lg border-4 border-white shadow-md" src={LOGO_URL} alt="Logo" />
            </div>

            {/* Navigation Links */}
            <nav className="flex items-center">
                <ul className="flex space-x-8 text-white font-semibold text-lg">
                    <li className="flex items-center">
                        <span className={`py-1 px-3 rounded-full text-sm ${onlineStatus ? "bg-green-400" : "bg-red-400"}`}>
                            {onlineStatus ? "✅ Online" : "🔴 Offline"}
                        </span>
                    </li>
                    <li className="relative group">
                        <Link to="/" className="hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-105">
                            Home
                        </Link>
                        <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-300 transition-all duration-500 group-hover:w-full"></span>
                    </li>
                    <li className="relative group">
                        <Link to="/about" className="hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-105">
                            About Us
                        </Link>
                        <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-300 transition-all duration-500 group-hover:w-full"></span>
                    </li>
                    <li className="relative group">
                        <Link to="/contact" className="hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-105">
                            Contact Us
                        </Link>
                        <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-300 transition-all duration-500 group-hover:w-full"></span>
                    </li>
                    <li className="relative group">
                        <Link to="/grocery" className="hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-105">
                            Grocery
                        </Link>
                        <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-300 transition-all duration-500 group-hover:w-full"></span>
                    </li>
                    
                    <li className="relative group">
                    <Link to="/cart" className="hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-105">
                        ({cartItems.length} items)
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-10 h-10"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-1 2h12M10 21a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z" />
                        </svg>
                    </Link>
                    <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-300 transition-all duration-500 group-hover:w-full"></span>
                    </li>

                    {/* Login/Logout Button */}
                    <button 
                        className="ml-6 bg-yellow-500 text-gray-800 font-semibold px-5 py-2 rounded-full shadow-lg hover:bg-yellow-600 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
                        onClick={() => {
                            btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
                        }}
                    >
                        {btnName}
                    </button>
                    <li className="relative group">
                        <Link to="/login" className="hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-105">
                            {loggedInUser}
                        </Link>  
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

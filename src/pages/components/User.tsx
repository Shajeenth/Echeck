<<<<<<< HEAD
import "./index.css";
import { auth } from "./firebase.ts";
import { Link } from "react-router-dom";

function User() {

    const removeDropdown = () => {
        if (!document.querySelector("#dropdown")?.classList.contains("hidden")) {
            document.querySelector("#dropdown")?.classList.add("hidden");
        }
    }

    const addDropdown = () => {
        if (document.querySelector("#dropdown")?.classList.contains("hidden")) {
            document.querySelector("#dropdown")?.classList.remove("hidden");
        }
    }

    window.onclick = (event: MouseEvent) => {
        if (!((event.target as HTMLElement).closest("#menu-btn"))) { 
            removeDropdown();
        }  
    }

    document.querySelector("#menu-btn")?.addEventListener("click", addDropdown);
    
    if (auth?.currentUser){
        return (
            <div className="basis-1/3 flex justify-end">
                <div className="relative">
                    <button className="px-4 py-2 rounded transition duration-400 hover:bg-gray-100" id="menu-btn">
                        {auth.currentUser.email}
                    </button>
                    <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-10 group-hover:block" id="dropdown">
                        <Link to="/profile" className="block px-4 py-2 text-sm hover:bg-gray-100">Profile</Link>
                        <Link to="/" className="block px-4 py-2 text-sm hover:bg-gray-100">Sign Out</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
            <button className="basis-1/3 flex justify-end">
                <Link to="/login" className="bg-amber-950 text-white px-4 py-2 rounded transition duration-400 hover:bg-amber-800">Login</Link>
            </button>
    )
}

=======
import "./index.css";
import { auth } from "./firebase.ts";
import { Link } from "react-router-dom";

function User() {

    const removeDropdown = () => {
        if (!document.querySelector("#dropdown")?.classList.contains("hidden")) {
            document.querySelector("#dropdown")?.classList.add("hidden");
        }
    }

    const addDropdown = () => {
        if (document.querySelector("#dropdown")?.classList.contains("hidden")) {
            document.querySelector("#dropdown")?.classList.remove("hidden");
        }
    }

    window.onclick = (event: MouseEvent) => {
        if (!((event.target as HTMLElement).closest("#menu-btn"))) { 
            removeDropdown();
        }  
    }

    document.querySelector("#menu-btn")?.addEventListener("click", addDropdown);
    
    if (auth?.currentUser){
        return (
            <div className="basis-1/3 flex justify-end">
                <div className="relative">
                    <button className="px-4 py-2 rounded transition duration-400 hover:bg-gray-100" id="menu-btn">
                        {auth.currentUser.email}
                    </button>
                    <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-10 group-hover:block" id="dropdown">
                        <Link to="/profile" className="block px-4 py-2 text-sm hover:bg-gray-100">Profile</Link>
                        <Link to="/" className="block px-4 py-2 text-sm hover:bg-gray-100">Sign Out</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
            <button className="basis-1/3 flex justify-end">
                <Link to="/login" className="bg-amber-950 text-white px-4 py-2 rounded transition duration-400 hover:bg-amber-800">Login</Link>
            </button>
    )
}

>>>>>>> be4ddb0aff0649276f70711f041b1d6d760196bf
export default User
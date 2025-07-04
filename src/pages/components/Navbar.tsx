import "./index.css";
import {Link} from "react-router-dom";

import User from "./User";

function Navbar() {

  return (
    <div className="w-screen h-16 fixed flex flex-row items-center px-4 bg-white shadow-md">
      <Link to="/" className="boldonse-regular basis-1/3"> ECHECK </Link>
      <div className="flex space-x-4 basis-1/3 justify-center">
        <Link to="/" className="hover:text-amber-950">Home</Link>
        <Link to="/play" className="hover:text-amber-950">Play</Link>
        <Link to="/profile" className="hover:text-amber-950">Profile</Link>  
      </div>
      <User />
    </div>
  )
}

export default Navbar

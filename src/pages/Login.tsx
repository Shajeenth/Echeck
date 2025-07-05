import {Link} from "react-router-dom";
import React, { useState } from "react";

import { auth } from "./components/firebase";
import { } from "firebase/auth"; // Import Firebase Auth methods if needed 

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loggedIn = async (event: React.FormEvent) => {
        event.preventDefault();
        
        if (email && password) {
            alert("Logging in with: " + email + " " + password);
        } else {
            alert("Username and password are required");
        }
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-100">
            <form onSubmit={loggedIn} className="bg-white shadow-md rounded px-8 pt-6 pb-6 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Email
                </label>
                <input
                type="text"
                id="username"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
                </label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
            Login
            </button>
            </form>
            <Link to="/register" className="hover:text-amber-950 text-sm">Don't have an account?</Link>  
        </div>
    )
  }
  
  export default Login
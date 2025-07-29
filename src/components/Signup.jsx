import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Searchcontext from "./utilities/contextprovider";

function Signup() {
const {userlist,setUserlist}=useContext(Searchcontext)

  const [username, setUsername] = useState("");
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    setUserlist((prev=>[...prev,{
      name:username,
      email:email,
      password:password
    }]))
    setUsername("")
      setEamil("")
      setPassword("")
    
   
  };
  useEffect(() => {
   console.log(userlist) 
  }, [userlist]);

  return (
    <div className="md:min-h-screen min-h-[70vh] flex items-center  justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create Account
        </h2>

        <form onSubmit={handlesubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              type="text"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#641c2b]"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => {
                setEamil(e.target.value);
              }}
              type="email"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#641c2b]"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#641c2b]"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#641c2b] hover:bg-[#4f1623] text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-[#641c2b] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;

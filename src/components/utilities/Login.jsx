import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Searchcontext from "./contextprovider";

function Login() {
  const { userlist, currentuser, setCurrentUser } = useContext(Searchcontext);
  const [logindata, setLogindata] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const handlelogin = (e) => {
    e.preventDefault();
    setLogindata({
      email:email,
      password: password,
    });
  
   
  };
  useEffect(()=>{
console.log(logindata)
     const loginuser = userlist.find((user) => user.email == logindata.email && user.password==logindata.password);
     console.log(loginuser)
    if (loginuser) {
      setCurrentUser(loginuser);
      console.log(currentuser)
      navigate("/")
    } else {
      console.log("user not found");
    }

},[logindata])

  return (
    <div className="md:min-h-screen min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handlelogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
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
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              type="password"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#641c2b]"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#641c2b] hover:bg-[#4f1623] text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[#641c2b] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

// UserProfile.jsx
import React, { useContext } from "react";
import Searchcontext from "./contextprovider";
import { useNavigate } from "react-router-dom";

function UserProfile() {
  const { currentuser, setCart,setCurrentUser } = useContext(Searchcontext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setCurrentUser(null);
    setCart([]);

    navigate("/");
  };

  if (!currentuser) return null;

  return (
    <div className="flex items-center justify-between bg-white rounded-md">
      <div className="flex items-center space-x-3">
        <div className="h-8 w-8 rounded-full bg-[#641c2b] text-white flex items-center justify-center text-sm font-bold">
          {currentuser.name?.charAt(0).toUpperCase()}
        </div>
        <p className="text-sm font-medium text-gray-800">{currentuser.name}</p>
      </div>
      <button
        onClick={handleLogout}
        className="text-xs text-[#641c2b] border border-[#641c2b] rounded px-2 py-1 hover:bg-[#641c2b] hover:text-white transition"
      >
        Logout
      </button>
    </div>
  );
}

export default UserProfile;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ladingImages } from "../assets/landingImage/ladingImage";
import { Button } from "../components/ui/button";

interface UserValues {
  username: string;
  email: string;
  branch?: string;
}

export function StudentPanel() {
  const [user, setUser] = useState<UserValues | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("activeUser");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (err) {
        console.error("Failed to parse user", err);
      }
    }
  }, []);
  
  

  const handleLogout = () => {
    localStorage.removeItem("activeUser");
    navigate("/login"); // or wherever your login route is
  };

  if (!user) {
    return <p className="text-center">Loading user...</p>;
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <img
          src={ladingImages.student_img1}
          alt="User"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h1 className="text-xl font-bold text-blue-600 mb-2">
          Welcome, {user.username}!
        </h1>
        <p className="text-gray-700 mb-1">{user.email}</p>
        <p className="text-gray-700 mb-1">{user.branch}</p>
        <p className="text-gray-500 mb-4">We’re glad to have you back.</p>


        <Button  
        onClick={handleLogout}
        className="bg-red-500 cursor-pointer " >
            Logout
        </Button>
      </div>
    </div>
  );
}

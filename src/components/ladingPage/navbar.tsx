import { Link } from "react-router-dom";

export function Navbar () {
return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="text-xl font-semibold text-blue-600">Sunrise School</span>
        <ul className="flex gap-6 text-gray-700 text-sm">
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#courses" className="hover:text-blue-500">Courses</a></li>
          <li> <Link to='/login' className="hover:text-blue-500">Login</Link> </li>
          <li> <Link to='/dashboard'  className="text-green-700 hover:text-red-400" > Admin Login </Link> </li>
        </ul>
      </div>
    </nav>
);
}
export function Navbar () {
return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="text-xl font-semibold text-blue-600">Sunrise School</span>
        <ul className="flex gap-6 text-gray-700 text-sm">
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#courses" className="hover:text-blue-500">Courses</a></li>
          <li><a href="#footer" className="hover:text-blue-500">Login</a></li>
        </ul>
      </div>
    </nav>
);
}
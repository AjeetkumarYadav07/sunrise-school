export function Footer () {
    return (
      <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Sunrise College. All rights reserved.</p>
        {/* <Link
          to="/dashboard"
          className="bg-white text-gray-800 px-4 py-2 rounded hover:bg-gray-100 text-sm"
        >
          Admin Login
        </Link> */}
      </div>
    </footer>
    );

}
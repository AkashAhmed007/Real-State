import { Link, Navigate} from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "./FirebaseProvider/FirebaseProvider";

const Navbar = () => {
  const { user,logOut } = useContext(AuthContext);
  console.log(user)
  return (
    <div className="w-full fixed top-0 z-10">
      <div className="navbar bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%; text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/feature">Features</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
              <Link to="/profile">Update-Profile</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-2xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
          All-in-One Realty Hub
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <div className="flex justify-center items-center gap-10 font-bold text-base">
              <div className="flex gap-3 items-center justify-center">
                <FcHome /> <Link to="/">Home</Link>
              </div>
              <Link to="/about">About</Link>
              <Link to="/feature">Features</Link>
              <Link to="/register">Register</Link>
              <Link to="/profile">Update-Profile</Link>
            </div>
          </ul>
        </div>
        <div className="navbar-end">
          {user?(
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL || "https://cdn-icons-png.flaticon.com/512/9131/9131529.png"}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-black rounded-box w-52"
              >
                <li>
                  <button className="justify-between">{user?.displayName || 'User name not found'}</button></li>
                <li>
                  <button onClick={logOut}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="font-bold text-xl">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

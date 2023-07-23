import { useContext, useState } from 'react';
import { FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {

      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <nav className="bg-purple-800 p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="ml-3">
              <span className="text-white font-bold text-lg">CollegeSpotlight</span>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              <FaBars />
            </button>
          </div>
          <div className={`hidden md:flex items-center space-x-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <NavLink
              exact
              to="/"
              className="text-white hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              activeClassName="bg-purple-700 text-white"
            >
              Home
            </NavLink>
            <NavLink
              to="/colleges"
              className="text-white hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              activeClassName="bg-purple-700 text-white"
            >
              Colleges
            </NavLink>
            <NavLink
              to="/admission"
              className="text-white hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              activeClassName="bg-purple-700 text-white"
            >
              Admission
            </NavLink>

            {user ? (

              <div className='flex items-center'>
                <NavLink
                  to="/mycollege"
                  className="text-white hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  activeClassName="bg-purple-700 text-white"
                >
                  My College
                </NavLink>
                <NavLink
                  to="/profile"
                  className="text-white me-2 hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  activeClassName="bg-purple-700 text-white"
                >
                  {user.displayName}
                </NavLink>
                <div className="flex mt-2 items-center justify-center gap-6">
                  <img
                  title={user.displayName}
                    className="w-12 h-12 rounded-full"
                    src={user.photoURL}
                    alt=""
                  />
                  <button
                    onClick={handleLogOut}
                    className="btn border-0 text-white bg-success px-2 font-bold rounded-md flex items-center gap-1"
                  >
                    Logout
                  </button>
                </div>
              </div>

            ) : (

              <button className="btn border-0  bg-success mt-2 px-2 fw-bold rounded-md flex items-center gap-1">
                <NavLink className='text-decoration-none text-white' to='/login'>Login</NavLink>
              </button>
            )}
          </div>
        </div>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="ml-4 flex flex-col items-center">
            <NavLink
              exact
              to="/"
              className="text-white hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              activeClassName="bg-purple-700 text-white"
            >
              Home
            </NavLink>
            <NavLink
              to="/colleges"
              className="text-white hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              activeClassName="bg-purple-700 text-white"
            >
              Colleges
            </NavLink>
            <NavLink
              to="/admission"
              className="text-white hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              activeClassName="bg-purple-700 text-white"
            >
              Admission
            </NavLink>

            {user ? (

              <div className='flex items-center'>
                <NavLink
                  to="/mycollege"
                  className="text-white hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  activeClassName="bg-purple-700 text-white"
                >
                  My College
                </NavLink>
                <NavLink
                  to="/profile"
                  className="text-white me-2 hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  activeClassName="bg-purple-700 text-white"
                >
                  {user.displayName}
                </NavLink>
                <div className="flex mt-2 items-center justify-center gap-6">
                  <img
                    title={user.displayName}
                    className="w-12 h-12 rounded-full"
                    src={user.photoURL}
                    alt=""
                  />
                  <button
                    onClick={handleLogOut}
                    className="btn border-0 text-white bg-success px-2 font-bold rounded-md flex items-center gap-1"
                  >
                    Logout
                  </button>
                </div>
              </div>

            ) : (

              <button className="btn border-0  bg-success mt-2 px-2 fw-bold rounded-md flex items-center gap-1">
                <NavLink className='text-decoration-none text-white' to='/login'>Login</NavLink>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

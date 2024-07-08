import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="container mx-auto max-w-7xl h-20 flex items-center justify-between md:justify-start">
        <NavLink className="flex items-center mr-4" to="/">
          <img className="h-10 w-auto" src={logo} alt="Books store" />
          <span className="hidden md:block text-white text-2xl font-bold ml-2">
            Books Store
          </span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

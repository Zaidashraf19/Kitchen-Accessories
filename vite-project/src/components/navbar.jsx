import * as React from "react";
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Dashboard from "./dashboard";

function NavigationMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between flex-wrap p-5 border-b-4 bg-[#f6f6f6]" >
        <div className={`flex flex-col md:flex-row md:items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row gap-5">
            <li className="cursor-pointer hover:underline"><Link to={''}>Home</Link></li>
            <li className="cursor-pointer hover:underline"><Link to={'about'}>About</Link></li>
            <li className="cursor-pointer hover:underline"><Link to={'products'}>Products</Link></li>
            <li className="cursor-pointer hover:underline"><Link to={'contact'}>Contact</Link></li>
          </ul>
        </div>
        <div className="text-lg">
          <button onClick={toggleMenu} className="md:hidden focus:outline-none">
            {/* Hamburger Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className="flex gap-5">
        <Link to={'cart'}><ShoppingCartIcon fontSize="large" /></Link>
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default NavigationMenu;
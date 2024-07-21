import React, { useState } from 'react';
import logo from '../assests/logo.png';
import { FaUser } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from '../redux/userSlice';
import toast, { Toaster } from 'react-hot-toast';
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  console.log(userData)
 const dispatch=useDispatch()
  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleMenuLinkClick = () => {
    setShowMenu(false); // Close menu when either link is clicked
  };
 const handleLogOut=()=>{
    dispatch(logoutRedux())
    toast.success("logout Successfully")
  }

  return (
    <header className='fixed shadow-md w-full h-16 px-2 z-50 bg-white'>
      {/* {desktop} */}
      <div className='flex items-center h-full justify-between'>
        <div className='h-10'>
          <Link to={""} onClick={handleMenuLinkClick}>
            <img src={logo} className='h-full' alt="Logo" />
          </Link>
        </div>
        <div className='flex items-center gap-5 md:gap-7'>
          <nav className='gap-4 md:gap-6 text-base md:text-lg hidden md:flex'>
            <Link to={""} onClick={handleMenuLinkClick}>
              Home
            </Link>
            <Link to={"menu"} onClick={handleMenuLinkClick}>
              Menu
            </Link>
            <Link to={"about"} onClick={handleMenuLinkClick}>
              About
            </Link>
            <Link to={"contact"} onClick={handleMenuLinkClick}>
              Contact
            </Link>
          </nav>
          <div className='text-2xl text-slate-500 relative cursor-pointer'>
            <FaCartShopping />
            <div className='absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center'>0</div>
          </div>
          <div className='text-2xl text-slate-500 relative'>
            <div
              className='border-2 border-solid border-slate-700 p-1 rounded-full cursor-pointer'
              onClick={handleShowMenu}
            >
              {userData.image ? (
                <img src={userData.image} alt="User" className="h-8 w-8 rounded-full object-cover" />
              ) : (
                <FaUser />
              )}
            </div>
            {showMenu && (
              <div className='absolute right-2 text-lg bg-white py-2 shadow drop-shadow-md flex flex-col min-w-[120px] text-center'>
                <Link to={"NewProduct"} className='whitespace-nowrap cursor-pointer' onClick={handleMenuLinkClick}>
                  New Product
                </Link>
                { userData.image?<p className='cursor-pointer text-white bg-red-500 px-2' onClick={handleLogOut}>Logout</p>:<Link to={"Login"} className='whitespace-nowrap cursor-pointer' onClick={handleMenuLinkClick}>
                  Login
                </Link>}
                <nav className="text-base md:text-lg flex flex-col md:hidden">
                  <Link to={""} className="px-2 py-1" onClick={handleMenuLinkClick}>
                    Home
                  </Link>
                  <Link to={"menu"} className="px-2 py-1" onClick={handleMenuLinkClick}>
                    Menu
                  </Link>
                  <Link to={"about"} className="px-2 py-1" onClick={handleMenuLinkClick}>
                    About
                  </Link>
                  <Link to={"contact"} className="px-2 py-1" onClick={handleMenuLinkClick}>
                    Contact
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* {mobile} */}
    </header>
  );
};

export default Header;

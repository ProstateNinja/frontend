
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [nav2, setNav2] = useState(true);
  const [color, setColor] = useState('white');
  const [textColor, setTextColor] = useState('white');
  const [textColor2, setTextColor2] = useState('black');
  const {pathname} = useLocation()

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
    //   if (window.scrollY >= 90) {
    //     setColor('#ffffff');
    //     setTextColor('#000000');
    //   } else {
    //     setColor('transparent');
    //     setTextColor('#ffffff');
    //   }
    };
    window.addEventListener('scroll', changeColor);
  }, []);
  console.log(pathname)

  return (
    <div
      className='fixed left-0 top-0 w-full z-40 ease-in duration-300 bg-white border border-b-black'
    >
      <div className='m-auto flex justify-between items-center px-4 pr-0 py-2 md:py-0 text-black'>
        <Link to='/'>
          <h1 style={{ color: `${textColor2}` }} className='font-bold text-xl'>
            {/* <img className='w-44' src={fimg} alt="MOKMETA" /> */}
            NInja site
          </h1>
        </Link>
        <ul style={{ color: `${textColor2}` }} className='hidden md:flex'>
          <NavLink onMouseEnter={() => { if(pathname!=='/'){setNav2(false)}}} onMouseLeave={() => setNav2(true)} to='/' className={({ isActive }) => (isActive && nav2 ? 'bg-[#EB1D50] border border-transparent border-l-[#EB1D50] text-white p-2 btn from-bottom' : ' border border-transparent border-l-gray-300  btn from-bottom p-2  ')} >
            <li className='px-4 py-2'>
              Home
            </li>
          </NavLink>
          <NavLink onMouseEnter={() => { if(pathname!=='/about'){setNav2(false)}}} onMouseLeave={() => setNav2(true)} to='/about' className={({ isActive }) => (isActive && nav2 ? 'bg-[#EB1D50] border border-transparent border-l-[#EB1D50] text-white p-2 btn from-bottom' : ' border border-transparent border-l-gray-300  btn from-bottom p-2   ')} >
            <li className='px-4 py-2'>
              About us
            </li>
          </NavLink>
          <NavLink onMouseEnter={() => { if(pathname!=='/contact'){setNav2(false)}}} onMouseLeave={() => setNav2(true)} to='/contact' className={({ isActive }) => (isActive && nav2 ? 'bg-[#EB1D50] border border-transparent border-l-[#EB1D50] text-white p-2 btn from-bottom' : ' border border-transparent border-l-gray-300 btn from-bottom p-2  ')}>
            <li className='px-2 py-2'>
              Contact
            </li>
          </NavLink>
          <NavLink onMouseEnter={() => { if(pathname!=='/screening'){setNav2(false)}}} onMouseLeave={() => setNav2(true)} to='/screening' className={({ isActive }) => (isActive && nav2 ? 'bg-[#EB1D50] border border-transparent border-l-[#EB1D50] text-white p-2 btn from-bottom' : ' border border-transparent border-l-gray-300  btn from-bottom p-2   ')} >
            <li className='px-4 py-2'>
            Find Screening
            </li>
          </NavLink>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block md:hidden z-10 pr-5'>
          {nav ? (
            <span style={{ color: `${textColor}` }} >
                <ClearIcon/>
            </span>
            // <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
              // <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
              <span style={{ color: `${textColor2}` }} >
                <MenuIcon/>
            </span>  
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'md:hidden absolute top-0 left-0 right-0 bottom-0 flex scale-105 justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'md:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex scale-100 justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul style={{ color: `${textColor}` }}>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link to='/'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link to='/about'>About</Link>
            </li>
            <Link to='/contact'>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link to='/contact'>Contact</Link>
            </li>
          </Link>
          <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link to='/screening'>Find Screening</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
 
export default Navbar;
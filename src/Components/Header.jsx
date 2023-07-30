import { useState } from 'react';
import searchIcon from '../assets/images/search.png'
import heartIcon from '../assets/images/heart.png'
import cartIcon from '../assets/images/cart.png'
import menuicon from '../assets/images/menuicon2.png'
import closeicon from '../assets/images/close.png';

import { Link } from 'react-router-dom';

export default function Header() {
  const [menuToggle, setToggle] = useState(false);
  const [CartToggle,setCartToggle] = useState(false);

 
  const menuItems = [
  {
    'item':'Home',
    'url':'/Home'
  },
  {
    'item':'About',
    'url':'/About'
  },
  {
    'item':'Contact',
    'url':'/Contact'
  },
  {
    'item':'Signup',
    'url':'/Signup'
  }
  ]
  function ToggleMenu(){
    setToggle(!menuToggle);
  }
  return (
    <>
      <div className="w-[100%] h-[70px] bg-[#ffffff] sticky top-0 flex justify-between items-center md:px-20 border z-10">
        {/* LOGO */}
        <Link to="/" className="text-lg sm:text-[24px] font-[700] logo pl-2">
          NorthStar
        </Link>

        {/* DESKTOP MENU */}
        <div id="Menu-Links" className="hidden sm:block">
          {menuItems.map((item) => {
            return (
              <Link
                key={item.name}
                to={item.url}
                className="family-poppins text-[13px] font-[800] mx-3"
              >
                {item.item}
              </Link>
            );
          })}
        </div>


        <div id="Menu-Icons" className="sm:flex justify-between items-center">
          <form className="hidden sm:flex justify-around items-center px-2 text-[14px] bg-[#F5F5F5] border rounded-sm">
            <input
              type="search"
              placeholder="What are you looking for ?"
              className="w-[100%] sm:max-w-[280px] py-1 px-2 outline-none bg-transparent"
            />
            <img
              src={searchIcon}
              alt="Search icon"
              className="max-w-[100%] h-[100%]"
            />
          </form>
          <div className="flex justify-between items-center">
            <img
              src={heartIcon}
              alt="Heart Icon"
              className="hidden md:block w-[20px] h-[auto] ml-5 cursor-pointer"
            />
            <img
              src={cartIcon}
              alt="Cart Icon"
              className="w-[25px] h-[auto] mx-2 cursor-pointer"
              onClick={()=>{setCartToggle(!CartToggle)}}
            />

            {
              menuToggle ? 
                <img
                  src={closeicon}
                  alt="close icon"
                  className="sm:hidden w-[30px] h-[auto] mx-2 border p-2 hover:drop-shadow-md"
                  onClick={ToggleMenu}
                />
              : 
                  <img
                  src={menuicon}
                  alt="menu icon"
                  className="sm:hidden w-[30px] h-[auto] mx-2 border p-1 hover:drop-shadow-md"
                  onClick={ToggleMenu}
                />
            }
          </div>
        </div>
      {/* MOBILE MENU */}
        <div
          className={`sm:hidden flex flex-col items-center w-[70%] h-[100vh] fixed top-[70px] ${
            menuToggle ? "left-[0]" : "left-[-100%]"
            } duration-300 shadow-lg pt-5 bg-[#ffffff]`
          
          }
        >
          <form className="w-[90%] flex justify-around items-center mb-6 px-2 text-[14px] bg-[#F5F5F5] border rounded-sm">
            <input
              type="text"
              placeholder="What are you looking for ?"
              className="w-[80%] py-1 px-2 outline-none bg-transparent placeholder:text-[10px]"
            />
            <img
              src={searchIcon}
              alt="Search icon"
              className="max-w-[70%] h-[70%]"
            />
          </form>
          {menuItems.map((item) => {
            return (
              <>
                <Link
                  key={item.name}
                  to={item.url}
                  className="family-poppins text-[13px] font-[800] mx-3 py-3 border-y w-[90%]"
                >
                  {item.item}
                </Link>
              </>
            );
          })}
        </div>
      </div>

      {/* Cart Sidebar */}

      <aside className={`fixed top-0 right-0 w-[200px] h-full ${CartToggle ? 'mr-0':'mr-[-200px]'}
          px-4 pt-20 bg-white z-[99999] duration-300 shadow-md
          flex justify-start items-center flex-col`}>
        <img
            src={closeicon}
            alt="close icon"
            className="absolute top-5 left-5 w-[30px] h-[auto] 
                       mx-2 border p-2 hover:drop-shadow-md cursor-pointer"
            onClick={()=>setCartToggle(!CartToggle)}
        />
        
        <ul> {/* cart products list */}
          <li className='flex justify-around items-center border-b pb-2 my-6'>
            <img src={heartIcon} alt="" className='mx-4 w-[30px] h-[30px] object-contain'/>
            <div>
              <h4 className='text-sm'>Product Name</h4>
              <p className='text-[10px] text-blue-500'>Price : 1099</p>
            </div>
          </li>    
        </ul>  


        <button className='outline-none py-1 px-4 mt-8 rounded-sm border border-yellow-700 text-sm'>
           View Details 
        </button>
      </aside>   
    
    </>
  );
}

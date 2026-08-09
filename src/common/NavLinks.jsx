import { FiUser, FiHeart, FiShoppingCart, FiSearch, FiSun, FiMoon } from "react-icons/fi"
import { Link, NavLink,useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
import useTheme from "./useTheme";
import { useGetCartsQuery } from "../RTK/CartApi";
import { useGetWhishListQuery } from "../RTK/whishListApi";
import AccountDrop from "../Login/Logindetail/AccountDrop"
import { useState } from "react";
function NavLinks({ bool, hide }) {
  const navigate=useNavigate()
  const[searchValue,setSearchValue]=useState('')
  const { isDark, toggleTheme } = useTheme()
  const isLoggedIn = useSelector(state => state.authslice.isLoggedIn)

  const { data: wishlistData } = useGetWhishListQuery()
  const data = wishlistData?.wishlist ?? []

  const { data: cartData } = useGetCartsQuery()
  const cartdata = cartData?.cart ?? []

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between px-16 py-4 border-b border-border bg-bg-primary text-text-primary ">
      <Link to="/" className="text-2xl font-bold">Exclusive</Link>

      <div className="flex gap-8 text-sm">
        <NavLink to="/" className={({ isActive }) => isActive ? "underline" : "text-text-secondary"}>
          Home
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "underline" : "text-text-secondary"}>
          Contact
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "underline" : "text-text-secondary"}>
          About
        </NavLink>
        <NavLink to="/signup" className={({ isActive }) => isActive ? "underline" : "text-text-secondary"}>
          Sign Up
        </NavLink>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <input
            className="bg-gray-100 rounded-md placeholder-gray-500 text-sm pl-4 pr-10 py-2 text-black outline-none"
            placeholder="What are you looking for?" 
            value={searchValue} 
            onChange={(e)=>setSearchValue(e.target.value)}
          />
          <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
          onClick={()=>navigate(`/shop?category=${searchValue}`)}
          />
        </div>

        <div className="flex items-center gap-4">
          <Link to="/wishlist">
            <div className="relative">
              <FiHeart className="w-6 h-6" />
              {data.length > 0 &&isLoggedIn&& (
                <span className="absolute -top-2 -right-2 bg-[#DB4444] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {data.length}
                </span>
              )}
            </div>
          </Link>
          <Link to="/cart">
            <div className="relative">
              <FiShoppingCart className="w-6 h-6" />
              {cartdata.length > 0 && isLoggedIn&&(
                <span className="absolute -top-2 -right-2 bg-[#DB4444] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartdata.length}
                </span>
              )}
            </div>
          </Link>
          {isLoggedIn ? ( 
           <AccountDrop/>
          ) : (
            <div className="border-gray-300 px-2 py-1 border rounded text-xl hover:bg-black hover:text-white">
              <Link to="/signup">sign up</Link>
            </div>
          )}
          <button onClick={toggleTheme} className="text-xl text-black dark:text-white">
            {isDark ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavLinks;

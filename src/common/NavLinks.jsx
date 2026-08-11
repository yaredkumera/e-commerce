import { FiUser, FiHeart, FiShoppingCart, FiSearch, FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
import useTheme from "./useTheme";
import { useGetCartsQuery } from "../RTK/CartApi";
import { useGetWhishListQuery } from "../RTK/whishListApi";
import AccountDrop from "../Login/Logindetail/AccountDrop"
import { useState } from "react";

function NavLinks({ bool, hide }) {
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()
  const isLoggedIn = useSelector(state => state.authslice.isLoggedIn)

  const { data: wishlistData } = useGetWhishListQuery()
  const data = wishlistData?.wishlist ?? []

  const { data: cartData } = useGetCartsQuery()
  const cartdata = cartData?.cart ?? []

  const links = [
    { to: "/", label: "Home" },
    { to: "/contact", label: "Contact" },
    { to: "/about", label: "About" },
    { to: "/signup", label: "Sign Up" },
  ]

  return (
    <div className="sticky top-0 z-50 bg-bg-primary text-text-primary border-b border-border">
      <div className="flex items-center justify-between gap-4 px-4 md:px-16 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMobileOpen((p) => !p)}
            className="md:hidden text-xl"
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
          <Link to="/" className="text-xl md:text-2xl font-bold whitespace-nowrap">Exclusive</Link>
        </div>

        <div className="hidden md:flex gap-8 text-sm">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => isActive ? "underline" : "text-text-secondary"}>
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-6">
          <div className="relative hidden sm:block w-32 md:w-auto">
            <input
              className="bg-gray-100 rounded-md placeholder-gray-500 text-sm pl-4 pr-10 py-2 text-black outline-none w-full md:w-64"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <FiSearch
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer"
              onClick={() => navigate(`/shop?category=${searchValue}`)}
            />
          </div>

          <Link to="/wishlist">
            <div className="relative">
              <FiHeart className="w-5 h-5 md:w-6 md:h-6" />
              {data.length > 0 && isLoggedIn && (
                <span className="absolute -top-2 -right-2 bg-[#DB4444] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {data.length}
                </span>
              )}
            </div>
          </Link>
          <Link to="/cart">
            <div className="relative">
              <FiShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
              {cartdata.length > 0 && isLoggedIn && (
                <span className="absolute -top-2 -right-2 bg-[#DB4444] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartdata.length}
                </span>
              )}
            </div>
          </Link>
          {isLoggedIn ? (
            <AccountDrop />
          ) : (
            <div className="hidden sm:block border-gray-300 px-2 py-1 border rounded text-sm hover:bg-black hover:text-white">
              <Link to="/signup">sign up</Link>
            </div>
          )}
          <button onClick={toggleTheme} className="text-xl">
            {isDark ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden flex flex-col gap-1 px-4 pb-4 border-t border-border">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) => `py-2 text-sm ${isActive ? "text-[#DB4444] font-medium" : "text-text-secondary"}`}
            >
              {l.label}
            </NavLink>
          ))}
          <div className="relative mt-2 sm:hidden">
            <input
              className="bg-gray-100 rounded-md placeholder-gray-500 text-sm pl-4 pr-10 py-2 text-black outline-none w-full"
              placeholder="What are you looking for?"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <FiSearch
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer"
              onClick={() => navigate(`/shop?category=${searchValue}`)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default NavLinks;
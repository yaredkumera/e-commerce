import { FiHeart, FiShoppingCart, FiSearch, FiSun, FiMoon, FiMenu, FiX, FiUser } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useTheme from "./useTheme";
import { useGetCartsQuery } from "../RTK/CartApi";
import { useGetWhishListQuery } from "../RTK/WhishListApi";
import AccountDrop from "../Login/Logindetail/AccountDrop";
import { useState } from "react";

function NavLinks() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const isLoggedIn = useSelector((state) => state.authslice.isLoggedIn);

  const { data: wishlistData } = useGetWhishListQuery();
  const wishlist = wishlistData?.wishlist ?? [];

  const { data: cartData } = useGetCartsQuery();
  const cartList = cartData?.cart ?? [];

  const handleSearch = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      if (searchValue.trim()) {
        navigate(`/shop?category=${encodeURIComponent(searchValue.trim())}`);
        setMobileOpen(false);
      }
    }
  };

  const links = [
    { to: "/", label: "Home" },
    { to: "/contact", label: "Contact" },
    { to: "/about", label: "About" },
    ...(!isLoggedIn ? [{ to: "/signup", label: "Sign Up" }] : []),
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-bg-primary text-text-primary border-b border-gray-200 dark:border-gray-800 shadow-sm transition-colors">
      
      {/* Top Banner (Optional Responsive Adjustment) */}
      <div className="bg-black text-white text-xs py-2 px-4 flex flex-col sm:flex-row justify-between items-center text-center gap-1">
        <p className="w-full text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <Link to="/shop" className="underline font-bold ml-1 hover:text-red-400">
            ShopNow
          </Link>
        </p>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-3.5 flex items-center justify-between gap-4">
        
        {/* Left: Mobile Toggle & Brand Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileOpen((p) => !p)}
            className="md:hidden p-1.5 text-2xl text-text-primary focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
          
          <Link to="/" className="text-xl sm:text-2xl font-bold tracking-tight">
            Exclusive
          </Link>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 font-semibold border-b-2 border-red-500 pb-0.5"
                  : "text-text-secondary hover:text-red-500 transition-colors"
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Right: Search Input & Action Icons */}
        <div className="flex items-center gap-3 sm:gap-5">
          
          {/* Search Box (Desktop / Tablet) */}
          <div className="relative hidden sm:block w-40 md:w-56 lg:w-64">
            <input
              type="text"
              className="w-full bg-gray-100 dark:bg-gray-800 text-text-primary placeholder-gray-400 text-xs sm:text-sm pl-3 pr-9 py-2 rounded-md outline-none border border-transparent focus:border-red-500 transition-colors"
              placeholder="What are you looking for?"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleSearch}
            />
            <FiSearch
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 cursor-pointer text-base"
              onClick={handleSearch}
            />
          </div>

          {/* Wishlist Icon */}
          <Link to="/wishlist" className="relative p-1 hover:text-red-500 transition-colors">
            <FiHeart className="w-5 h-5 sm:w-6 sm:h-6" />
            {wishlist.length > 0 && isLoggedIn && (
              <span className="absolute -top-1 -right-1 bg-[#DB4444] text-white text-[10px] font-bold rounded-full h-4 min-w-4 px-1 flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </Link>

          {/* Cart Icon */}
          <Link to="/cart" className="relative p-1 hover:text-red-500 transition-colors">
            <FiShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
            {cartList.length > 0 && isLoggedIn && (
              <span className="absolute -top-1 -right-1 bg-[#DB4444] text-white text-[10px] font-bold rounded-full h-4 min-w-4 px-1 flex items-center justify-center">
                {cartList.length}
              </span>
            )}
          </Link>

          {/* User Profile / Auth State */}
          {isLoggedIn ? (
            <AccountDrop />
          ) : (
            <Link
              to="/login"
              className="hidden sm:inline-block text-xs font-semibold px-3 py-1.5 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors"
            >
              Log In
            </Link>
          )}

          {/* Dark / Light Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1 text-lg sm:text-xl text-text-primary hover:text-red-500 transition-colors"
            aria-label="Toggle Theme"
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Out / Dropdown Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-bg-primary border-t border-gray-200 dark:border-gray-800 px-4 pt-3 pb-6 space-y-4 shadow-lg animate-fadeIn">
          {/* Mobile Search Bar */}
          <div className="relative w-full">
            <input
              type="text"
              className="w-full bg-gray-100 dark:bg-gray-800 text-text-primary placeholder-gray-400 text-sm pl-4 pr-10 py-2.5 rounded-md outline-none border border-transparent focus:border-red-500"
              placeholder="What are you looking for?"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleSearch}
            />
            <FiSearch
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg cursor-pointer"
              onClick={handleSearch}
            />
          </div>

          {/* Mobile Nav Links */}
          <nav className="flex flex-col space-y-2">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `py-2.5 px-3 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-red-500/10 text-red-500"
                      : "text-text-primary hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Extra Mobile Actions */}
          {!isLoggedIn && (
            <div className="pt-2 border-t border-gray-200 dark:border-gray-800 flex gap-3">
              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="flex-1 text-center py-2 text-xs font-semibold border border-gray-300 dark:border-gray-700 rounded-md"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                onClick={() => setMobileOpen(false)}
                className="flex-1 text-center py-2 text-xs font-semibold bg-[#DB4444] text-white rounded-md hover:bg-red-600"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}

export default NavLinks;
import { FiUser, FiHeart, FiShoppingCart, FiSearch ,FiSun,FiMoon} from "react-icons/fi"
import { Link ,NavLink} from "react-router-dom"
import { useSelector } from "react-redux";
import useTheme from "./useTheme";
import { useGetCartsQuery } from "../RTK/CartApi";
function NavLinks({bool,hide}) {
  const{isDark,toggleTheme}=useTheme()
  const isLoggedIn=useSelector(state=>state.authslice.isLoggedIn)
  const data=useSelector(state=>state.wishlist.items)
  const {data:cartdata=[]}=useGetCartsQuery()
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
    
         <NavLink to="/signUp" className={({ isActive }) => isActive ? "underline" : "text-text-secondary"}>
        Sign Up
      </NavLink>
      </div>

       <div className="flex items-center gap-6">
        <div className="relative">
          <input
            className="bg-gray-100 rounded-md placeholder-gray-500 text-sm pl-4 pr-10 py-2 outline-none"
            placeholder="What are you looking for?"
          />
          <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600" />
        </div>

       { <div className="flex items-center gap-4">
<Link to="/wishlist">
  <div className="relative">
    <FiHeart className="w-6 h-6" />
    {data.length > 0 && (
      <span className="absolute -top-2 -right-2 bg-[#DB4444] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
        {data.length}
      </span>
    )}
  </div>
</Link>
          <Link to="/cart">  <div className="relative">
    <FiShoppingCart className="w-6 h-6" />
    {cartdata.length > 0 && (
      <span className="absolute -top-2 -right-2 bg-[#DB4444] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
        {cartdata.length}
      </span>
    )}
  </div>
</Link>
          {(isLoggedIn)?
          
          (<div className="flex items-center justify-center rounded-full bg-[#DB4444] text-white w-9 h-9">
            <Link to="/account"><FiUser className="text-xl"/></Link>
          </div>):(<div className="border-gray-300 px-2 py-1 border rounded text-xl hover:bg-black hover:text-white">
            <Link to="/signup">sign up</Link>
            </div>)
          }
         <button onClick={toggleTheme} className="text-xl text-black dark:text-white">
          {isDark ? <FiSun /> : <FiMoon />}
        </button>
        </div>}
      </div>
    </div>
  );
}

export default NavLinks;
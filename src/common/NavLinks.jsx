import { FiUser, FiHeart, FiShoppingCart, FiSearch } from "react-icons/fi"
import { Link ,NavLink} from "react-router-dom"
function NavLinks({bool,hide}) {
  return (
    <div className="flex items-center justify-between px-16 py-4 border-b border-gray-300">
       <Link to="/" className="text-2xl font-bold">Exclusive</Link> 

       <div className="flex gap-8 text-sm">
                 <NavLink to="/" className={({ isActive }) => isActive ? "underline" : "text-gray-500"}>
        Home
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? "underline" : "text-gray-500"}>
        Contact  
      </NavLink>
         <NavLink to="/about" className={({ isActive }) => isActive ? "underline" : "text-gray-500"}>
        About
      </NavLink>
    
         <NavLink to="/signUp" className={({ isActive }) => isActive ? "underline" : "text-gray-500"}>
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

       { bool!==true&&<div className="flex items-center gap-4">
          <Link to="/wishlist"><FiHeart className="text-xl text-black" /></Link>
          <Link to="/cart"><FiShoppingCart className="text-xl text-black" /></Link>
          {hide!==1&&<Link to="/account"><FiUser className="text-xl text-black" /></Link>}
        </div>}
      </div>
    </div>
  );
}

export default NavLinks;
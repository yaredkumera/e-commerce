import { FiUser, FiHeart, FiShoppingCart, FiSearch } from "react-icons/fi"
import { Link ,NavLink} from "react-router-dom"
import { useSelector } from "react-redux";

function NavLinks({bool,hide}) {
  const data=useSelector(state=>state.wishlist.items)
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
          <Link to="/cart"><FiShoppingCart className="text-xl text-black" /></Link>
          {hide!==1&&<Link to="/account"><FiUser className="text-xl text-black" /></Link>}
        </div>}
      </div>
    </div>
  );
}

export default NavLinks;
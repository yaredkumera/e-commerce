import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="relative flex items-center justify-end bg-black text-white px-6 py-3 ">
    
       <p className="absolute left-1/2 -translate-x-1/2 text-xs sm:text-sm  ">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{"  "}
        <Link to="/shop" className="underline font-semibold">ShopNow</Link>
      </p>
    
       <select className="bg-black text-white text-sm outline-none pr-8  ">
        <option value="English">English</option>
        <option value="Amharic">Amharic</option>
        <option value="Oromigna">Oromigna</option>
      </select>
    </div>
  );
}

export default Header;
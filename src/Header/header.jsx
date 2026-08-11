import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-black text-white px-4 sm:px-8 py-2.5 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        {/* Banner Announcement */}
        <p className="text-xs sm:text-sm font-light text-gray-200">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <Link
            to="/shop"
            className="underline font-semibold ml-1 text-white hover:text-emerald-400 active:text-emerald-500 transition-colors"
          >
            ShopNow
          </Link>
        </p>

        {/* Language Selector */}
        <select
          className="bg-black text-white text-xs sm:text-sm outline-none cursor-pointer py-1 px-2 rounded border border-transparent focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
          aria-label="Select Language"
        >
          <option value="English">English</option>
          <option value="Amharic">Amharic</option>
          <option value="Oromigna">Oromigna</option>
        </select>
      </div>
    </div>
  );
}

export default Header;
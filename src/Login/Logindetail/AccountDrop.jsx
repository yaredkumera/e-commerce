import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiUser, FiPackage, FiXCircle, FiStar, FiLogOut, FiShield } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { logout } from "./AuthSlice";

function AccountMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userRole = localStorage.getItem("role");

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("role");
    dispatch(logout());
    setOpen(false);
    navigate("/login");
  };

  const linkStyle =
    "flex items-center gap-3 px-4 py-2.5 text-xs sm:text-sm text-text-primary hover:bg-black/5 dark:hover:bg-white/5 transition-colors";

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-center rounded-full bg-[#DB4444] text-white w-9 h-9 hover:bg-red-600 transition-colors cursor-pointer shadow-sm"
        aria-label="User Menu"
      >
        <FiUser className="text-lg" />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-56 bg-bg-secondary text-text-primary border border-gray-200 dark:border-gray-800 rounded-xl shadow-xl py-2 z-50 animate-fadeIn">
          {/* Admin Link if role is admin */}
          {userRole === "admin" && (
            <Link
              to="/admin"
              onClick={() => setOpen(false)}
              className={`${linkStyle} font-semibold text-[#DB4444] border-b border-gray-100 dark:border-gray-800 pb-2.5 mb-1`}
            >
              <FiShield className="text-base" /> Admin Dashboard
            </Link>
          )}

          <Link to="/account" onClick={() => setOpen(false)} className={linkStyle}>
            <FiUser className="text-base text-gray-400" /> Manage My Account
          </Link>
          <Link to="/orders" onClick={() => setOpen(false)} className={linkStyle}>
            <FiPackage className="text-base text-gray-400" /> My Orders
          </Link>
          <Link to="/cancellations" onClick={() => setOpen(false)} className={linkStyle}>
            <FiXCircle className="text-base text-gray-400" /> My Cancellations
          </Link>
          <Link to="/reviews" onClick={() => setOpen(false)} className={linkStyle}>
            <FiStar className="text-base text-gray-400" /> My Reviews
          </Link>

          <div className="pt-1 mt-1 border-t border-gray-100 dark:border-gray-800">
            <button
              onClick={handleLogout}
              className={`${linkStyle} w-full text-left font-medium text-red-600 dark:text-red-400 cursor-pointer`}
            >
              <FiLogOut className="text-base" /> Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AccountMenu;
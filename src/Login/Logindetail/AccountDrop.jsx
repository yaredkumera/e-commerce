import { useState, useRef, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FiUser, FiPackage, FiXCircle, FiStar, FiLogOut } from "react-icons/fi"
import { useDispatch } from "react-redux"
import { logout } from "./AuthSlice"

function AccountMenu() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token")
        localStorage.removeItem("currentUser")

    dispatch(logout())
    setOpen(false)
    navigate("/login")
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-center rounded-full bg-[#DB4444] text-white w-9 h-9"
      >
        <FiUser className="text-xl" />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-56 bg-bg-secondary text-text-primary rounded-md shadow-lg py-2 z-50">
          <Link
            to="/account"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-2 hover:bg-black/10"
          >
            <FiUser /> Manage My Account
          </Link>
          <Link
            to="/orders"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-2 hover:bg-black/10"
          >
            <FiPackage /> My Order
          </Link>
          <Link
            to="/cancellations"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-2 hover:bg-black/10"
          >
            <FiXCircle /> My Cancellations
          </Link>
          <Link
            to="/reviews"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-2 hover:bg-black/10"
          >
            <FiStar /> My Reviews
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-2 hover:bg-black/10 w-full text-left"
          >
            <FiLogOut /> Logout
          </button>
        </div>
      )}
    </div>
  )
}

export default AccountMenu
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"

function Footer() {
  return (
    <footer className="bg-black text-white  ">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
        <div className="grid">
          <p className="text-2xl font-bold mb-4">Exclusive</p>
          <p className="mb-4">Subscribe</p>
          <p>Get 10% off your first order</p>
          <form className="flex items-center border border-white rounded px-3 py-2 mt-4 max-w-[220px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none text-sm w-full placeholder-gray-400"
            />
            <button type="submit">➤</button>
          </form>
        </div>
        <div className="grid">
          <p className="text-2xl   mb-4">Support</p>
          <p >111 Bijoy sarani, Dhaka,</p>
          <p className="mt-[-8px]">DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div className="grid">
          <p className="text-2xl   mb-4">Account</p>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>
        <div className="grid">
          <p className="text-2xl   mb-4">Quick Link</p>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <div>
          <p className="text-2xl   mb-4">Download App</p>
          <p className="text-sm text-gray-400 mb-4">Save $3 with App New User Only</p>
          <div className="flex gap-2 mt-3">
            <div className="bg-white w-16 h-16"></div>
            <div className="flex flex-col gap-1">
              <img src="/google-play.png" alt="Google Play" className="h-6" />
              <img src="/app-store.png" alt="App Store" className="h-6" />
            </div>
          </div>
          <div className="flex gap-4 text-lg mt-4">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      <div className="text-center text-yellow-950 text-sm py-4 border-t border-gray-800 mt-8">
        © Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  )
}

export default Footer
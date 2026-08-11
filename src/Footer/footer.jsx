import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        
        {/* Brand / Subscribe Column */}
        <div className="space-y-3">
          <p className="text-xl sm:text-2xl font-bold tracking-wide">Exclusive</p>
          <p className="font-medium text-sm">Subscribe</p>
          <p className="text-xs text-gray-300">Get 10% off your first order</p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center border border-white/40 focus-within:border-emerald-500 rounded px-3 py-2 mt-3 max-w-[220px] transition-colors"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none text-xs w-full text-white placeholder-gray-400"
            />
            <button
              type="submit"
              className="text-sm pl-2 active:scale-95 transition-transform text-white hover:text-emerald-400"
              aria-label="Subscribe"
            >
              ➤
            </button>
          </form>
        </div>

        {/* Support Column */}
        <div className="space-y-2.5 text-xs sm:text-sm text-gray-300">
          <p className="text-lg sm:text-xl font-medium text-white mb-3">Support</p>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className="hover:text-white transition-colors">
            <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
          </p>
          <p>+88015-88888-9999</p>
        </div>

        {/* Account Links */}
        <div className="space-y-2 text-xs sm:text-sm text-gray-300">
          <p className="text-lg sm:text-xl font-medium text-white mb-3">Account</p>
          <p><Link to="/myAccount" className="hover:text-white transition-colors">My Account</Link></p>
          <p><Link to="/login" className="hover:text-white transition-colors">Login / Register</Link></p>
          <p><Link to="/cart" className="hover:text-white transition-colors">Cart</Link></p>
          <p><Link to="/wishlist" className="hover:text-white transition-colors">Wishlist</Link></p>
          <p><Link to="/shop" className="hover:text-white transition-colors">Shop</Link></p>
        </div>

        {/* Quick Links */}
        <div className="space-y-2 text-xs sm:text-sm text-gray-300">
          <p className="text-lg sm:text-xl font-medium text-white mb-3">Quick Link</p>
          <p><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></p>
          <p><Link to="/terms" className="hover:text-white transition-colors">Terms Of Use</Link></p>
          <p><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></p>
          <p><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></p>
        </div>

        {/* App Downloads & Socials */}
        <div>
          <p className="text-lg sm:text-xl font-medium text-white mb-3">Download App</p>
          <p className="text-xs text-gray-400 mb-3">Save $3 with App New User Only</p>
          
          <div className="flex items-center gap-3">
            <div className="bg-white/10 border border-white/20 rounded p-1 w-16 h-16 flex items-center justify-center">
              <span className="text-[10px] text-gray-400">QR Code</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <img src="/google-play.png" alt="Google Play" className="h-6 object-contain cursor-pointer" />
              <img src="/app-store.png" alt="App Store" className="h-6 object-contain cursor-pointer" />
            </div>
          </div>

          <div className="flex gap-4 text-base sm:text-lg mt-5 text-gray-300">
            <a href="#" aria-label="Facebook" className="hover:text-emerald-400 active:scale-95 transition-all">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-emerald-400 active:scale-95 transition-all">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-emerald-400 active:scale-95 transition-all">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-emerald-400 active:scale-95 transition-all">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>

      {/* Copyright Notice */}
      <div className="text-center text-gray-500 text-xs py-4 border-t border-gray-900">
        © Copyright Rimel 2026. All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
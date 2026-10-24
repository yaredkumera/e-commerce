import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTelegramPlane, FaTiktok, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  // Define your real social media URLs here
  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/profile.php?id=61555069303242",
    },
    {
      name: "Telegram",
      icon: <FaTelegramPlane />,
      url: "https://t.me/Yared_ku",
    },
    {
      name: "TikTok",
      icon: <FaTiktok />,
      url: "https://tiktok.com/@yourusername",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/yared.kumera?exln=d2FoeGFxZHkyNGow",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: "https://linkedin.com/in/your-profile",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/yaredkumera",
    },
  ];

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        
        {/* Brand / Newsletter Column */}
        <div className="space-y-3">
          <p className="text-xl sm:text-2xl font-bold tracking-wide text-white">YourStore</p>
          <p className="font-medium text-sm text-gray-200">Subscribe to our newsletter</p>
          <p className="text-xs text-gray-400">Get 10% off your first order & updates on new arrivals.</p>
          
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center border border-gray-700 focus-within:border-emerald-500 rounded px-3 py-2 mt-3 max-w-[240px] bg-gray-900/50 transition-colors"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none text-xs w-full text-white placeholder-gray-500"
            />
            <button
              type="submit"
              className="text-xs font-semibold pl-2 active:scale-95 transition-transform text-emerald-400 hover:text-emerald-300"
              aria-label="Subscribe"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Support Column */}
        <div className="space-y-2.5 text-xs sm:text-sm text-gray-400">
          <p className="text-base sm:text-lg font-semibold text-white mb-3">Customer Support</p>
          <p>Addis Ababa, Ethiopia</p>
          <p className="hover:text-white transition-colors">
            <a href="mailto:kumerayared5@gmail.com">kumerayared5@gmail.com</a>
          </p>
          <p className="hover:text-white transition-colors">
            <a href="tel:+251900000000">+251 945944367</a>
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-2 text-xs sm:text-sm text-gray-400">
          <p className="text-base sm:text-lg font-semibold text-white mb-3">Quick Links</p>
          <p><Link to="/shop" className="hover:text-emerald-400 transition-colors">Shop All Products</Link></p>
          <p><Link to="/cart" className="hover:text-emerald-400 transition-colors">Shopping Cart</Link></p>
          <p><Link to="/wishlist" className="hover:text-emerald-400 transition-colors">My Wishlist</Link></p>
          <p><Link to="/myAccount" className="hover:text-emerald-400 transition-colors">My Account</Link></p>
        </div>

        {/* Legal & Functional Social Icons */}
        <div className="space-y-3 text-xs sm:text-sm text-gray-400">
          <p className="text-base sm:text-lg font-semibold text-white mb-3">Information</p>
          <p><Link to="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link></p>
          <p><Link to="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</Link></p>
          <p><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link></p>

          <p className="text-xs font-semibold text-gray-300 pt-2">Connect With Us</p>
          
          {/* Social Links */}
          <div className="flex gap-4 text-base text-gray-400 flex-wrap">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="hover:text-emerald-400 active:scale-95 transition-all hover:-translate-y-0.5"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Footer Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-4 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between text-gray-500 text-xs gap-2">
        <p>© {currentYear} YourStore. All rights reserved.</p>
        <p className="text-gray-600">Secure Payments via Chapa & Cards</p>
      </div>
    </footer>
  );
}

export default Footer;
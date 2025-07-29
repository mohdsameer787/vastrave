import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white text-black py-10 px-6  mt-20 sm:mt-5 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-extrabold tracking-wider mb-3">Vastravé</h2>
          <p className="text-sm text-gray-700">
            A fusion of tradition and modern elegance. Designed for women who love ethnic roots with a global twist.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-rose-500">Home</Link></li>
            <li><Link to="/shop" className="hover:text-rose-500">Shop</Link></li>
            <li><Link to="/about" className="hover:text-rose-500">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-rose-500">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Customer Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/faq" className="hover:text-rose-500">FAQs</Link></li>
            <li><Link to="/returns" className="hover:text-rose-500">Return Policy</Link></li>
            <li><Link to="/shipping" className="hover:text-rose-500">Shipping Info</Link></li>
            <li><Link to="/terms" className="hover:text-rose-500">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-5 text-xl">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-rose-500"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-600"><FaFacebookF /></a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="hover:text-red-500"><FaPinterestP /></a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 border-t pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Vastravé. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

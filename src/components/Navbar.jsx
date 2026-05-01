import { useState } from "react";
import Logo from "./Logo";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-40">
        <div className="flex items-center justify-between px-6 md:px-12 py-4 
        bg-white/10 backdrop-blur-xl border-b border-white/10 text-white">

          {/* Left - Hamburger (Mobile) */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setOpen(true)}
          >
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
          </button>

          {/* Center - Logo */}
          <div className="flex-1 flex justify-center md:justify-start">
            <Logo />
          </div>

          {/* Right - Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <a href="#" className="hover:text-gray-300 transition">Home</a>
            <a href="#properties" className="hover:text-gray-300 transition">Properties</a>
            <a href="#footer" className="hover:text-gray-300 transition">Contact</a>

            {/* CTA Button */}
            <a
              href="tel:9050553363"
              className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
            >
              Call Now
            </a>
          </nav>
        </div>
      </header>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-black/90 backdrop-blur-xl text-white z-50 
        transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-5 border-b border-gray-700">
          <Logo />
          <button onClick={() => setOpen(false)} className="text-2xl">
            ✕
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col gap-6 p-6 text-lg">
          <a href="#" onClick={() => setOpen(false)}>Home</a>
          <a href="#properties" onClick={() => setOpen(false)}>Properties</a>
          <a href="#footer" onClick={() => setOpen(false)}>Contact</a>

          {/* Call Button */}
          <a
            href="tel:9050553363"
            className="mt-4 bg-white text-black text-center py-3 rounded-full font-semibold"
          >
            Call Now
          </a>
        </div>
      </div>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      ></div>
    </>
  );
}

export default Navbar;
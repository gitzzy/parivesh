import { useState } from "react";
import Logo from "./Logo";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 top-0 z-40 w-full px-4 pt-4 md:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-lg border border-white/10 bg-zinc-950/55 px-4 py-3 text-white shadow-2xl shadow-black/20 backdrop-blur-xl md:px-5">
          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-lg border border-white/10 md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
          </button>

          <div className="flex flex-1 justify-center md:justify-start">
            <Logo />
          </div>

          <nav className="hidden items-center gap-7 text-sm font-medium text-zinc-200 md:flex">
            <a href="#" className="transition hover:text-white">Home</a>
            <a href="#about" className="transition hover:text-white">Advisory</a>
            <a href="#properties" className="transition hover:text-white">Properties</a>
            <a href="#footer" className="transition hover:text-white">Contact</a>
            <a
              href="tel:9050553363"
              className="rounded-full bg-white px-5 py-2.5 font-semibold text-zinc-950 transition hover:bg-amber-200"
            >
              Call Now
            </a>
          </nav>
        </div>
      </header>

      <div
        className={`fixed left-0 top-0 z-50 h-full w-80 max-w-[86vw] bg-zinc-950 text-white shadow-2xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 p-5">
          <Logo />
          <button
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-xl"
            aria-label="Close menu"
          >
            X
          </button>
        </div>

        <div className="flex flex-col gap-6 p-6 text-lg text-zinc-200">
          <a href="#" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" onClick={() => setOpen(false)}>Advisory</a>
          <a href="#properties" onClick={() => setOpen(false)}>Properties</a>
          <a href="#footer" onClick={() => setOpen(false)}>Contact</a>

          <a
            href="tel:9050553363"
            className="mt-4 rounded-full bg-white py-3 text-center font-semibold text-zinc-950"
          >
            Call Now
          </a>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      ></div>
    </>
  );
}

export default Navbar;

import { useState, useEffect } from "react";
import img1 from "../assets/lp4.jpg";
import img2 from "../assets/lp5.jpg";
import img3 from "../assets/lp3.jpg";

const images = [img1, img2, img3];

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-zinc-950">
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${images[index]})` }}
      ></div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,9,11,0.92)_0%,rgba(9,9,11,0.72)_45%,rgba(9,9,11,0.35)_100%)]"></div>
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-zinc-950 to-transparent"></div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pb-10 pt-32 text-white md:px-12 lg:px-6">
        <div className="max-w-3xl">
          <p className="section-eyebrow text-amber-200">Parivesh Realty</p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] md:text-6xl lg:text-7xl">
            Premium properties, matched with local intelligence.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 md:text-xl">
            Discover villas, apartments, farm houses, and investment-ready land
            with a property dealer who understands the ground reality of every
            location.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#properties" className="btn-primary">
              Find Property
            </a>

            <a href="tel:9050553363" className="btn-secondary">
              Schedule a Call
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl gap-3 rounded-lg border border-white/15 bg-white/10 p-3 backdrop-blur-xl sm:grid-cols-3">
            <div className="px-4 py-3">
              <p className="text-2xl font-semibold">Villas</p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-zinc-300">
                Luxury Living
              </p>
            </div>
            <div className="border-white/10 px-4 py-3 sm:border-l">
              <p className="text-2xl font-semibold">Plots</p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-zinc-300">
                Investments
              </p>
            </div>
            <div className="border-white/10 px-4 py-3 sm:border-l">
              <p className="text-2xl font-semibold">Farms</p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-zinc-300">
                Open Estates
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

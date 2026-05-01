import { useState, useEffect } from "react";
import img1 from "../assets/lp4.jpg";
import img2 from "../assets/lp5.jpg";
import img3 from "../assets/lp3.jpg";

function Hero() {
  const images = [img1, img2, img3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${images[index]})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          Find Your Dream Property
        </h1>

        <p className="text-gray-300 max-w-xl mb-6">
          Discover premium homes and apartments with Parivesh Realty.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mb-6">
          {/* Explore */}
          <a
            href="#properties"
            className="w-44 text-center bg-white text-black px-6 py-3 rounded-full font-semibold transition transform hover:scale-105"
          >
            Explore
          </a>

          {/* Contact */}
          <a
            href="tel:9050553363"
            className="w-44 text-center border border-white text-white px-6 py-3 rounded-full font-semibold transition transform hover:scale-105 hover:bg-white hover:text-black"
          >
            Contact Us
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-gray-300 text-sm">
          📞 <a href="tel:9050553363">9050553363</a> |
          <a href="tel:7303319337"> 7303319337</a>
          <br />
          <a href="mailto:parveshrealty@gmail.com">parveshrealty@gmail.com</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

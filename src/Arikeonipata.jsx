import { useState } from "react";
import bgImage from "./assets/bg-image.jpg";
import { Link } from "react-router-dom";

function Arikeonipata() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full">
      <div
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col px-6 md:px-12 py-12"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        
        <div className="flex justify-between items-center w-full relative">
          <h2 className="text-white text-3xl italic font-bold">
            Arike-Onipata
          </h2>

        
          <nav className="hidden md:flex gap-8 text-lg font-medium">
            <Link className="text-white hover:text-black hover:underline" to="/">Home</Link>
            <Link className="text-white hover:text-black hover:underline" to="/shop">Shop</Link>
            <Link className="text-white hover:text-black hover:underline" to="/about">About us</Link>
            <Link className="text-white hover:text-black hover:underline" to="/contact">Contact</Link>
          </nav>

        
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {menuOpen && (
            <div className="absolute top-full right-0 mt-2 bg-stone-600 rounded-lg shadow-lg flex flex-col items-end gap-4 py-4 px-4">
              <Link className="text-white hover:underline hover:text-black" onClick={() => setMenuOpen(false)} to="/">Home</Link>
              <Link className="text-white hover:underline hover:text-black" onClick={() => setMenuOpen(false)} to="/shop">Shop</Link>
              <Link className="text-white hover:underline hover:text-black" onClick={() => setMenuOpen(false)} to="/about">About us</Link>
              <Link className="text-white hover:underline hover:text-black" onClick={() => setMenuOpen(false)} to="/contact">Contact</Link>
            </div>
          )}
        </div>

      
        <div className="flex flex-col items-center justify-center flex-grow text-center mt-20">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 italic">
            Comfort Starts Underneath
          </h2>

          <button className="bg-gray-300 text-black font-semibold px-6 py-2 rounded-md hover:bg-gray-400 transition">
            Discover Comfort
          </button>
        </div>
      </div>
    </div>
  );
}

export default Arikeonipata;

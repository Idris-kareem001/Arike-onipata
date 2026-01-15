import { Link } from "react-router-dom";
import bgImage from "../assets/bg-image.jpg";

export default function Home() {
  return (
    <div className="w-full">
      <div
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col px-6 py-4"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="flex justify-between items-center w-full">
          <h2 className="text-white text-3xl italic font-bold shadow-md hover:text-black">
            Arike-Onipata
          </h2>

          <nav className="flex gap-8 text-lg font-medium">
            <Link className="text-white hover:text-black" to="/">Home</Link>
            <Link className="text-white hover:text-black" to="/shop">Shop</Link>
            <Link className="text-white hover:text-black" to="/about">About us</Link>
            <Link className="text-white hover:text-black" to="/contact">Contact</Link>
          </nav>
        </div>

        <div className="flex flex-col items-center justify-center flex-grow text-center mt-20">
          <h2 className="text-3xl md:text-5xl font-semibold text-white drop-shadow-lg mb-6 italic">
            Comfort Starts Underneath
          </h2>

          <Link to="/shop" className="bg-gray-300 text-black font-semibold px-6 py-2 rounded-md hover:bg-gray-400 transition">
            Discover Comfort
          </Link>
        </div>
      </div>
    </div>
  );
}

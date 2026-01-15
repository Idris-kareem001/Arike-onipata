import pant1 from "../assets/pant1.jpg";
import pant2 from "../assets/pant2.jpg";
import pant3 from "../assets/pant3.jpg";
import bra1 from "../assets/bra1.jpg";
import bra2 from "../assets/bra2.jpg";
import bra3 from "../assets/bra3.jpg";
import boxer1 from "../assets/boxer1.jpg";
import boxer2 from "../assets/boxer2.jpg";
import boxer3 from "../assets/boxer3.jpg";
import special from "../assets/special.jpg";
import pata1 from "../assets/pata1.jpg";
import pata01 from "../assets/pata01.jpg";
import nurah from "../assets/nurah.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import four from "../assets/four.jpg";
import five from "../assets/five.jpg";
import night1 from "../assets/night1.jpg";
import night3 from "../assets/night3.jpg";
import night4 from "../assets/night4.jpg";
import night5 from "../assets/night5.jpg";
import night2 from "../assets/night2.jpg";
const products = [
  { id: 1, image: pant1, name: "Light Cotton", price: 3000 },
  { id: 2, image: pant2, name: "Comfort Pant", price: 3000 },
  { id: 3, image: pant3, name: "Soft Linen", price: 4000 },
  { id: 4, image: pata1, name: "pop up", price: 4500 },
  { id: 5, image: nurah, name: "creamy pop", price: 4500 },
  { id: 6, image: two, name: "loveth light", price: 4500 },
  { id: 7, image: night4, name: "sexy mandem", price: 4500 },
  {id: 8, image: night5, name: "sexy mandem light", price: 4500 },
];

const bra = [
  { id: 1, image: bra1, name: "CloudFit Bra", price: 4500 },
  { id: 2, image: bra2, name: "Smooth Wear Bra", price: 5000 },
  { id: 3, image: bra3, name: "Soft Touch Bra", price: 7500 },
  { id: 4, image: pata01, name: "everyday-comfort", price: 6000 },
  { id: 5, image: three, name: "light-comfort", price: 6000 },
   { id: 6, image: night2, name: "light-comfort", price: 6000 },
];

const boxer = [
  { id: 1, image: boxer1, name: "SoftFlex Pant", price: 5000 },
  { id: 2, image: boxer2, name: "Cotton Ease Pant", price: 5500 },
  { id: 3, image: boxer3, name: "Comfort Core", price: 5500 },
  { id: 4, image: special, name: "DailyWear Pant", price: 4000 },
  { id: 5, image: four, name: "DailyWear Pant", price: 4000 },
  { id: 6, image: five, name: "fortune Pant", price: 4000 },
  { id: 7, image: night1, name: "lucky-bears", price: 4000 },
  { id: 8, image: night3, name: "light cotton", price: 4000 },
];

export default function Shop() {
  return (
    <div id="shop" className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Shop our products</h1>
      <p className="text-2xl font-semibold text-center italic mb-8">
        Everyday Comfort, Right Underneath
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-20">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden text-center transition-transform duration-300 ease-in-out hover:scale-110"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <div className="p-4 hover:bg-gray-100 transition">
              <span className="block text-lg font-medium mb-2 italic">
                {product.name}
              </span>
              <button className="bg-gray-300 py-2 px-4 rounded block mx-auto hover:bg-gray-400 transition">
                ₦{product.price}
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-center text-2xl font-bold mt-12 italic">
        Unveil our beautifully crafted bra collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-20 mt-6">
        {bra.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden text-center hover:bg-gray-100 transition-transform duration-300 ease-in-out hover:scale-110"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <h4 className="text-center font-bold italic mt-2">{item.name}</h4>
            <button className="py-2 px-4 mt-4 mb-4 rounded-xl block mx-auto bg-gray-200 hover:bg-gray-300">
              ₦{item.price}
            </button>
          </div>
        ))}
      </div>

      <h2 className="text-center text-2xl font-bold mt-12 italic">
        our singlet collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-20 mt-6">
        {boxer.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden text-center hover:bg-gray-100 transition-transform duration-300 ease-in-out hover:scale-110"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <h4 className="text-center font-bold italic mt-2">{item.name}</h4>
            <button className="py-2 px-4 mt-4 mb-4 rounded-xl block mx-auto bg-gray-200 hover:bg-gray-300">
              ₦{item.price}
            </button>
          </div>
        ))}
      </div>


             <div className="px-6 py-12 md:px-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">
        What Our Customers Say
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        
        <div className="bg-white p-6 rounded-2xl shadow transition-transform duration-300 ease-in-out hover:scale-11">
          <p className="text-gray-700 mb-4">
            “Premium comfort you feel from the first wear. Soft fabric,
            perfect fit, and quality that lasts.”
          </p>
          <span className="font-semibold text-gray-900">—semilore</span>
        </div>

      
        <div className="bg-white p-6 rounded-2xl shadow transition-transform duration-300 ease-in-out hover:scale-11">
          <p className="text-gray-700 mb-4">
            “Very comfortable and strong. Even after washing, it still
            feels new. Worth every naira.”
          </p>
          <span className="font-semibold text-gray-900">—favour</span>
        </div>

      
        <div className="bg-white p-6 rounded-2xl shadow transition-transform duration-300 ease-in-out hover:scale-11">
          <p className="text-gray-700 mb-4">
            “I wear it all day without any irritation. Clean look,
            great quality, and perfect fit.”
          </p>
          <span className="font-semibold text-gray-900">—iretomiwa</span>
        </div>
      </div>
    </div>







    </div>
  );
}

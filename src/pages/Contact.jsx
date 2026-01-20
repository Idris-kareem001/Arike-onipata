import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const whatsappBtnRef = useRef(null);
  const fullNameRef = useRef(null);
  const productNameRef = useRef(null);

  useEffect(() => {
    const whatsappBtn = whatsappBtnRef.current;

    const handleClick = (e) => {
      const fullName = fullNameRef.current.value;
      const productName = productNameRef.current.value;

      if (!fullName || !productName) {
        e.preventDefault();
        alert("Please fill in all fields");
        return;
      }

      const message = `Hello, my name is ${fullName}. I am interested in the product: ${productName}. Please provide more details.`;

      whatsappBtn.href = `https://wa.me/2348135495807?text=${encodeURIComponent(
        message
      )}`;
    };

    if (whatsappBtn) {
      whatsappBtn.addEventListener("click", handleClick);
    }

    return () => {
      if (whatsappBtn) {
        whatsappBtn.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <div className="w-full">
      
      <div className="flex justify-between items-center w-full px-6 py-4 bg-gray-800 shadow-md">
        <h2 className="text-white text-3xl italic font-bold">
          Arike-Onipata
        </h2>

        <nav className="flex gap-8 text-lg font-medium ">
          <Link className="text-white hover:underline hover:text-gray-400" to="/">Home</Link>
          <Link className="text-white hover:underline hover:text-gray-400" to="/shop">Shop</Link>
          <Link className="text-white hover:underline hover:text-gray-400" to="/about">About us</Link>
          <Link className="text-white hover:underline hover:text-gray-400" to="/contact">Contact</Link>
        </nav>
      </div>

      
      <div className="px-6 py-12 md:px-20 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>

        <p className="text-center text-lg italic text-black max-w-3xl mx-auto mb-10">
          Have a question or need help? We’d love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-black mb-4">
              Reach out to us for inquiries, feedback, or support.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li><strong>Email:</strong> Akanbitaiye0@gmail.com</li>
              <li><strong>Phone:</strong> +234 813 549 5807</li>
              <li><strong>Location:</strong> Nigeria</li>
            </ul>
          </div>

        
          <form className="bg-gray-100 p-8 rounded-2xl shadow-sm space-y-5">
            <div>
              <label htmlFor="full-name" className="block font-medium mb-1">
                Full Name
              </label>
              <input
                id="full-name"
                ref={fullNameRef}
                type="text"
                placeholder="Your name"
                className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <div>
              <label htmlFor="product-name" className="block font-medium mb-1">
                Product Name
              </label>
              <textarea
                id="product-name"
                ref={productNameRef}
                rows="5"
                placeholder="Name of product and colour..."
                className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-gray-400"
              ></textarea>
            </div>

            <a
              ref={whatsappBtnRef}
              href="https://wa.me/2348135495807"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-block text-center bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900 transition"
            >
              Send via WhatsApp
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

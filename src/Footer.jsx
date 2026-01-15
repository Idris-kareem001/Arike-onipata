
            
            function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 ">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Arike Undies
          </h2>
          <p className="text-sm">
            Everyday comfort. Confidence you can feel.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Shop
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Bras</li>
            <li className="hover:text-white cursor-pointer">Panties</li>
            <li className="hover:text-white cursor-pointer">Boxers</li>
            <li className="hover:text-white cursor-pointer">New Arrivals</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Help
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">FAQs</li>
            <li className="hover:text-white cursor-pointer">Size Guide</li>
            <li className="hover:text-white cursor-pointer">Shipping & Returns</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Follow Us
          </h3>
             <a href="https://instagram.com/arikeundies" target="_blank" rel="noopener noreferrer">
  Instagram
</a><br />

  <a href="+28135495807" target="_blank" rel="noopener noreferrer">
  WhatsApp
</a><br />
 
     <a href="https://facebook.com/arikeundies" target="_blank" rel="noopener noreferrer">
  Facebook
</a>
        </div>

      </div>


      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Arike Undies. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;



function About() {
  return (
    <div className="px-6 py-12 md:px-20">
      <h1 className="text-4xl font-bold text-center mb-6">About Arikeonipata</h1>

      <p className="text-center text-lg italic text-gray-600 max-w-3xl mx-auto mb-10">
        Everyday comfort, designed to make you feel confident from the inside out.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-black leading-relaxed mb-4">
            Arikeonipata is a comfort-focused underwear brand created with everyday
            people in mind. We believe what you wear underneath should feel soft,
            breathable, and empowering all day long.
          </p>

          <p className="text-black leading-relaxed mb-4">
            Our products are carefully crafted using quality fabrics that move with
            your body, ensuring comfort without compromising style.
          </p>

          <p className="text-black leading-relaxed">
            Whether at home, work, or on the move, Arikeonipata keeps you comfortable
            every step of the way.
          </p>
        </div>

        
        <div className="bg-gray-100 p-8 rounded-2xl shadow-sm transition-transform duration-300 ease-in-out hover:scale-110">
          <h3 className="text-xl font-semibold mb-4 text-center">Why Choose Us</h3>
          <ul className="space-y-3 text-gray-700">
            <li>✅Premium, breathable fabrics</li>
            <li>✅ Designed for everyday wear</li>
            <li>✅ Affordable comfort</li>
            <li>✅Made with care and quality in mind</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;

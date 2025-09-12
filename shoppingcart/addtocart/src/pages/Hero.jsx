import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-gray-50 py-16 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="https://cdn.prod.website-files.com/622327bc87949d02598242bf/65b814b288acb25c603f18ac_Giants%20Gentlemen%20Old%20Tom%20Gin.webp"
            alt="Shopping"
            className="rounded-lg shadow-lg w-80 h-80 object-cover"
          />
        </div>
        {/* Right: Content */}
        <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Discover the Best Products Online
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Shop from a wide range of quality products at unbeatable prices. Fast delivery and easy returns!
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
            More Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
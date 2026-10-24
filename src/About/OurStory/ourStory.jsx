function OurStory() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-center my-8 md:my-12 max-w-7xl mx-auto px-4 sm:px-8 md:px-16">
      
      {/* Story Text Content */}
      <div className="flex justify-center items-center">
        <div className="flex flex-col text-left space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Our Story
          </h1>
          
          <p className="text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300">
            Founded with a vision to revolutionize digital commerce in Ethiopia, 
            our platform bridges local merchants, artisans, and top brands directly to customers across the country. 
            We empower businesses with modern digital tools, seamless local payment integrations, and reliable door-to-door delivery.
          </p>
          
          <p className="text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300">
            From the latest consumer electronics and fashion to everyday essentials, 
            we offer a rapidly growing catalog of quality products tailored for Ethiopian shoppers—making online shopping effortless, secure, and accessible to everyone.
          </p>
        </div>
      </div>

      {/* Side Banner / Image */}
      <div className="w-full h-auto flex justify-center">
        <img 
          src="/Side Image.png" 
          alt="Our Story - E-Commerce in Ethiopia" 
          loading="lazy"
          className="h-full w-full max-h-[420px] object-cover rounded-xl shadow-sm border border-gray-100 dark:border-gray-800" 
        />
      </div>

    </div>
  );
}

export default OurStory;
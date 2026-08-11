function OurStory() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-center my-8 md:my-12">
      <div className="flex justify-center items-center px-4 sm:px-8 md:px-16">
        <div className="flex flex-col text-left">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Our Story</h1>
          <p className="mb-4 text-sm sm:text-base leading-relaxed">
            Launched in 2015, Exclusive is South Asia's premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
          <p className="text-sm sm:text-base leading-relaxed">
            Exclusive has more than 1 million products to offer, growing very
            fast. Exclusive offers a diverse assortment of categories ranging
            from consumer electronics to fashion.
          </p>
        </div>
      </div>
      <div className="w-full h-auto px-4 sm:px-0">
        <img 
          src="Side Image.png" 
          alt="Our Story" 
          className="h-auto w-full max-h-[400px] object-cover rounded-md" 
        />
      </div>
    </div>
  );
}

export default OurStory;
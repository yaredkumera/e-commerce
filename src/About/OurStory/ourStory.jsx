function OurStory() {
  return (
    <div className="grid md:grid-cols-2   w-full  ">
      <div className=" flex justify-center items-center pr-8">
        <div className="flex flex-col    text-left p-8">
          <h1 className="text-2xl font-bold mb-6">Our Story</h1>
          <p className="mb-4   ">
            Launched in 2015, Exclusive is South Asia's premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
          <p className=" ">
            Exclusive has more than 1 million products to offer, growing very
            fast. Exclusive offers a diverse assortment of categories ranging
            from consumer electronics to fashion.
          </p>
        </div>
      </div>
      <img src="Side Image.png" className="h-auto w-full" />
    </div>
  );
}

export default OurStory;

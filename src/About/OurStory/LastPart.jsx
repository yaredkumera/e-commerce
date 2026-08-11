function LastPart() {
  const features = [
    {
      icon: "/About/General/free.png",
      title: "FREE AND FAST DELIVERY",
      desc: "Free delivery for all orders over $140",
    },
    {
      icon: "/About/General/Customer.png",
      title: "24/7 CUSTOMER SERVICE",
      desc: "Friendly 24/7 customer support",
    },
    {
      icon: "/About/General/thmirdfree.png",
      title: "MONEY BACK GUARANTEE",
      desc: "We return money within 30 days",
    },
  ];
  return <RENDER feature={features} />;
}

function RENDER({ feature }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-8 md:px-16 py-12 my-6 text-center w-full max-w-6xl mx-auto">
      {feature.map((elem, ind) => (
        <div key={ind} className="flex flex-col items-center justify-center p-4">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-gray-200 dark:bg-gray-800 p-3">
            <img src={elem.icon} alt="" className="w-full h-full object-contain" />
          </div>
          <p className="font-bold text-base mb-2">{elem.title}</p>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{elem.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default LastPart;
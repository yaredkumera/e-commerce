function StateCard() {
  const stats = [
    {
      icon: "/About/StateImagve/first.png",
      value: "10.5k",
      label: "Sellers active on our site",
    },
    {
      icon: "/About/StateImagve/second.png",
      value: "33k",
      label: "Monthly Product Sale",
    },
    {
      icon: "/About/StateImagve/third.png",
      value: "45.5k",
      label: "Customer active on our site",
    },
    {
      icon: "/About/StateImagve/forthm.png",
      value: "25k",
      label: "Annual gross sale on our site",
    },
  ];
  return <RenderS stats={stats} />;
}

function RenderS({ stats }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-8 md:px-16 py-8 sm:py-12">
      {stats.map((elem, i) => (
        <div
          key={i}
          className="flex flex-col items-center justify-center text-center rounded-md border border-gray-200 dark:border-gray-800 py-6 px-3 hover:bg-red-500 hover:text-white transition-all duration-300"
        >
          <img src={elem.icon} alt="" className="w-12 h-12 sm:w-16 sm:h-16 mb-3 object-contain" />
          <p className="text-lg sm:text-2xl font-bold">{elem.value}</p>
          <p className="text-xs font-medium mt-1">{elem.label}</p>
        </div>
      ))}
    </div>
  );
}

export default StateCard;
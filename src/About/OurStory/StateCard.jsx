function StateCard() {
  const stats = [
    {
      icon: "/About/StateImagve/first.png",
      value: "10.5k",
      label: "Sellers active our site",
    },
    {
      icon: "/About/StateImagve/second.png",
      value: "33k",
      label: "Monthly Product Sale",
    },
    {
      icon: "/About/StateImagve/third.png",
      value: "45.5k",
      label: "Customer active in our site",
    },
    {
      icon: "/About/StateImagve/forthm.png",
      value: "25k",
      label: "Annual gross sale in our site",
    },
  ];
  return <RenderS stats={stats} />;
}

function RenderS({ stats }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-16 py-16">
      {stats.map((elem, i) => (
        <div
          key={i}
          className={`flex flex-col items-center justify-center text-center rounded-md py-8 px-4 
           hover:bg-red-400 hover:text-white
          `}
        >
          <img src={elem.icon} alt="" className="w-16 h-16 mb-3" />
          <p className=" text-xl font-bold">{elem.value}</p>
          <p className="text-xs font-semibold mt-1">{elem.label}</p>
        </div>
      ))}
    </div>
  );
}

export default StateCard;

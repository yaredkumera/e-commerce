function LastPart() {
  const features = [
    {
      icon: '/About/General/free.png',
      title: "FREE AND FAST DELIVERY",
      desc: "Free delivery for all orders over $140",
    },
    {
      icon: '/About/General/Customer.png',
      title: "24/7 CUSTOMER SERVICE",
      desc: "Friendly 24/7 customer support",
    },
    {
      icon: '/About/General/thmirdfree.png',
      title: "MONEY BACK GUARANTEE",
      desc: "We return money within 30 days",
    }
  ]
  return <RENDER feature={features} />
}

function RENDER({ feature }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 px-16 py-16 text-center mx-17 my-10">
      {feature.map((elem, ind) => (
        <div key={ind} className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full   flex items-center justify-center mb-4">
            <img src={elem.icon}   className="w-16 h-16" />
          </div>
          <p className="font-bold text-sm mb-1">{elem.title}</p>
          <p className="text-xs text-text-secondary">{elem.desc}</p>
        </div>
      ))}
    </div>
  )
}

export default LastPart
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function TeamPhoto() {
  const Team = [
    {
      name: "Tom Cruise",
      role: "Founder & Chairman",
      image: "/About/TeamImagve/Tom.png",
    },
    {
      name: "Emma Watson",
      role: "Managing Director",
      image: "/About/TeamImagve/Emma.png",
    },
    {
      name: "Will Smith",
      role: "Product Designer",
      image: "/About/TeamImagve/Will.png",
    },
  ];
  return <Card team={Team} />;
}

function Card({ team }) {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {team.map((elem, i) => (
          <div key={i} className="flex flex-col items-start gap-3 bg-gray-50 dark:bg-gray-900/40 p-4 rounded-lg">
            <div className="w-full h-64 bg-gray-200 dark:bg-gray-800 rounded-md overflow-hidden">
              <img
                src={elem.image}
                alt={elem.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <p className="font-bold text-lg text-left mt-2">{elem.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-left -mt-2">{elem.role}</p>
            <div className="flex gap-4 mt-1 text-gray-600 dark:text-gray-300">
              <FaTwitter className="hover:text-red-500 cursor-pointer text-lg" />
              <FaInstagram className="hover:text-red-500 cursor-pointer text-lg" />
              <FaLinkedinIn className="hover:text-red-500 cursor-pointer text-lg" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-2 mt-8">
        {team.map((_, index) => (
          <button
            key={index}
            className={`rounded-full w-2.5 h-2.5 transition-all ${
              index === 1 ? "bg-red-600 scale-125" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default TeamPhoto;
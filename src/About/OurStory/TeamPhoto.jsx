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
    <div className="w-full grid p-3">
      <div className="grid grid-cols-2 md:grid-cols-3    gap-x-4 px-8">
        {team.map((elem, i) => (
          <div className="grid gap-5">
            <img
              src={elem.image}
              alt=""
              className="rounded-md w-full bg-sky-700"
            />
            <p className="text-left font-bold -mb-4  ">{elem.name}</p>
            <p className="text-sm text-left">{elem.role}</p>
            <div className="flex gap-4  ">
              <FaTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-4 mt-6">
        {team.map((m, index) => (
          <button
            key={index}
            className={`rounded-[50%] w-2 h-2 ${index !== 1 ? "bg-gray-500" : "bg-red-600"}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
export default TeamPhoto;

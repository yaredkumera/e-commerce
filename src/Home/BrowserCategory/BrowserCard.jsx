import { useNavigate } from "react-router-dom";

function BrowserCard({ data }) {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 my-6">
      {data.map((elem, i) => (
        <div
          onClick={() => navigate(`/shop?category=${encodeURIComponent(elem.name)}`)}
          key={i}
          className="flex flex-col gap-3 justify-center items-center shadow-xs py-6 px-3 border border-gray-200 dark:border-gray-800 rounded-xl hover:bg-[#DB4444] hover:border-[#DB4444] hover:text-white transition-colors duration-200 cursor-pointer text-text-primary group"
        >
          <img
            src={elem.image}
            alt={elem.name}
            className="w-10 h-10 object-contain group-hover:brightness-200 transition-all"
          />
          <p className="text-xs sm:text-sm font-medium text-center">{elem.name}</p>
        </div>
      ))}
    </div>
  );
}

export default BrowserCard;
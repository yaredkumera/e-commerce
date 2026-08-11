import { NavLink } from "react-router-dom";

function NewArival() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 my-6">
      {/* Main Feature - Big Card */}
      <Create1
        img="/newArival1.png"
        title="PlayStation 5"
        body="Black and White Version of The PS5 Coming Out on Sale."
        aspect="min-h-[300px] sm:min-h-[450px]"
      />

      {/* Grid Right */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        <Create1
          img="/newArival2.png"
          title="Women's Collections"
          body="Featured Women Collections that give you another vibe."
          aspect="min-h-[220px] sm:min-h-[280px]"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <Create1
            img="/newArival3.png"
            title="Speakers"
            body="Amazon Wireless Speakers"
            aspect="min-h-[200px]"
          />
          <Create1
            img="/newArival4.png"
            title="Perfume"
            body="GUCCI INTENSE OUD EDP"
            aspect="min-h-[200px]"
          />
        </div>
      </div>
    </div>
  );
}

function Create1({ img, title, body, aspect = "min-h-[250px]" }) {
  return (
    <div className={`relative bg-[#0D0D0D] rounded-2xl overflow-hidden p-6 flex flex-col justify-end group ${aspect}`}>
      <img
        src={img}
        alt={title}
        className="absolute inset-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300 z-0"
      />
      <div className="relative z-10 flex flex-col gap-2 max-w-xs bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2 rounded-lg">
        <p className="font-bold text-xl sm:text-2xl text-white">{title}</p>
        <p className="text-gray-300 text-xs sm:text-sm line-clamp-2">{body}</p>
        <NavLink
          to="/shop"
          className="inline-block text-white font-medium text-xs sm:text-sm underline underline-offset-4 hover:text-[#DB4444] transition-colors mt-1"
        >
          Shop Now
        </NavLink>
      </div>
    </div>
  );
}

export default NewArival;
import { NavLink } from "react-router-dom";

function NewArival() {
  return (
    <div className="grid md:grid-cols-2 gap-5 mx-10 ">
        <Create1 img="/newArival1.png" title="PlayStation 5" body=" Black and White Version of The Ps5 Coming Out on Sale."/>
 

      <div className="grid gap-5">
        <Create1 img="/newArival2.png" title="Women's Collections" body="Featured Women Collections that give you another vibe."/>
 

        <div className="grid grid-cols-2 gap-4">
<Create1 img="newArival3.png" title="Speakers" body="Amazon Wireless Speakers"></Create1>
<Create1 img="newArival4.png" title="Perfume" body="GUCCI INTENSE OUD EDP"></Create1>
        </div>
      </div>
    </div>
  );
}
function Create1({img,title,body}) {
    return(
                <div className="relative bg-[#0D0D0D] rounded-md p-3">
          <img
            src={img}
            alt=""
            className="w-full h-full object-contain"
          />
          <div className="flex absolute left-6 bottom-6 bg-transparent flex-col gap-3 w-48">
            <p className="font-bold text-2xl text-white">{title}</p>
            <p className="text-gray-200 text-sm">
              {body}
            </p>
            <NavLink to="/shop" className="underline font-medium text-white">
              Shop Now
            </NavLink>
          </div>
        </div>
    )
}
export default NewArival;

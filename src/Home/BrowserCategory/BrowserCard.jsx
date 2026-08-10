import { useNavigate } from "react-router-dom"
function BrowserCard({data}) {
  const navigate=useNavigate()
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mx-14 my-5">
      {
        data.map((elem,i)=>(
<div 
onClick={()=>navigate(`/shop?category=${elem.name}`)}
key={i} className="flex flex-col gap-4 justify-center items-center shadow-md py-5 border border-gray-300 rounded-md hover:bg-[#DB4444] hover:text-white transition-colors duration-300 ease-out-in">
<img src={elem.image}  />
<p>{elem.name}</p>
</div>
        ))
      }  
    </div>
  )
}

export default BrowserCard
import { useState } from "react"
function ProductDetailCard({data}) { 
     let [url,setUrl]=useState(`Detail1.png`)
  return (
    <div className="grid md:grid-cols-2 gap-7">
    <div className="grid grid-cols-2 gap-5">
<div className="grid gap-5">
{
    data.map((tem,dex)=>(
       <div className="p-4 rounded bg-[#F5F5F5]">
<img src={tem.image} className=" object-contain"
onMouseOver={()=>setUrl(tem.image)} 
/>
 
       </div> 
    ))
}
</div>
<div className="flex items-center justify-center">
     <img src={url}  className=" object-contain"/>
</div>       
    </div> 
    </div>
  )
}

export default ProductDetailCard
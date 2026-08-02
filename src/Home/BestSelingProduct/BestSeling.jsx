import SectionHeader from "../common/SectionHeader"
import ProductCard from "../common/ProductCard"
import { useSelector } from "react-redux"
import { useState } from "react"
function BestSeling() {
  const bestproductslice=useSelector(state=>state.bestproductslice.items)
  const[ShowAll,setShowall]=useState(false)
  const data=ShowAll?bestproductslice:bestproductslice.slice(0,4)
  return (
    <div>
        <SectionHeader label='This Month' title="Best Selling Products" Btn={true} onclick={()=>setShowall(p=>!p)} showall={ShowAll}/>
        <ProductCard data={data} hide={true} />
    </div>
  )
}

export default BestSeling
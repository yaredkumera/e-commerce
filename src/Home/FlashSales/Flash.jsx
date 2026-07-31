import SectionHeader from "../common/SectionHeader"
import ProductCard from "../common/ProductCard"
import ButtonCreator from "../../common/ButtonCreator"
import { useSelector } from "react-redux"
function Flash() {
const products = useSelector(state=>state.fleshslice.items)
  return (
    <div className="grid gap-1 rounded-md overflow-hidden m-8">
< SectionHeader stat={true }label="Today's" title="Flash Sales"/>
<ProductCard data={products}/>
 
<ButtonCreator STYLE='bg-[#DB4444] text-white px-6 py-2 rounded-md block mx-auto my-6  hover:bg-red-600'
children="View All Products"
/>
    </div>   
  )
}
export default Flash
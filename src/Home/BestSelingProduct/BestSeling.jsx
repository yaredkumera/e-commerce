import SectionHeader from "../common/SectionHeader"
import ProductCard from "../common/ProductCard"
import { useSelector } from "react-redux"
function BestSeling() {
  const data=useSelector(state=>state.bestproductslice.items)
  return (
    <div>
        <SectionHeader label='This Month' title="Best Selling Products" Btn={true}/>
        <ProductCard data={data} hide={true} />
    </div>
  )
}

export default BestSeling
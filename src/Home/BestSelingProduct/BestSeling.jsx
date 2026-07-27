import SectionHeader from "../common/SectionHeader"
import bestSellingProducts from "./MaterialSale"
import ProductCard from "../common/ProductCard"
function BestSeling() {
  return (
    <div>
        <SectionHeader label='This Month' title="Best Selling Products" Btn={true}/>
        <ProductCard data={bestSellingProducts} hide={true} />
    </div>
  )
}

export default BestSeling
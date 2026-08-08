import SectionHeader from "../common/SectionHeader";
import ExploreCard from "../common/ExploreCard";
import ButtonCreator from "../../common/ButtonCreator";
import { useGetProductQuery } from "../../RTK/ProductApi";
function BaseExplore() {
  const { data, isLoading, isError } = useGetProductQuery()
const products = data?.products ?? []

if (isLoading) return <p>Loading products...</p>
if (isError) return <p>Something went wrong loading products.</p>
  return (
    <div >
       <SectionHeader label="Our Products" title="Explore Our Products"/>
        <ExploreCard data={products}/>
 <ButtonCreator STYLE='bg-[#DB4444] text-white px-6 py-2 rounded-md block mx-auto my-6  hover:bg-red-600'
children="View All Products"
/>
    </div>
  )
}

export default BaseExplore
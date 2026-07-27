import exploreProducts from "./ProductsToExplore";
import SectionHeader from "../common/SectionHeader";
import ExploreCard from "../common/ExploreCard";
import ButtonCreator from "../../common/ButtonCreator";
function BaseExplore() {
  return (
    <div >
       <SectionHeader label="Our Products" title="Explore Our Products"/>
        <ExploreCard data={exploreProducts}/>
 <ButtonCreator STYLE='bg-[#DB4444] text-white px-6 py-2 rounded-md block mx-auto my-6  hover:bg-red-600'
children="View All Products"
/>
    </div>
  )
}

export default BaseExplore
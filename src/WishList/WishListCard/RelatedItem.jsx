import ProductCard from "../../Home/common/ProductCard"
import SectionHeader from "../../Home/common/SectionHeader"
import { useGetProductQuery } from "../../RTK/ProductApi"

function RelatedItem() {
  const { data } = useGetProductQuery()
  const relateditem = (data?.products ?? []).slice(0, 4)

  return (
    <div className="-mx-10">
      <div className="flex justify-between items-center pr-9">
        <SectionHeader label={"Related Items"} hide={true} />
        <button className="px-3  px-4 py-2 text-white bg-black rounded">See All</button>
      </div>
      <ProductCard data={relateditem} heart={true} />
    </div>
  )
}

export default RelatedItem
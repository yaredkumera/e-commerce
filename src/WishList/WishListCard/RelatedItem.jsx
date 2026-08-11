import ProductCard from "../../Home/common/ProductCard";
import SectionHeader from "../../Home/common/SectionHeader";
import { useGetProductQuery } from "../../RTK/ProductApi";

function RelatedItem() {
  const { data } = useGetProductQuery();
  const relateditem = (data?.products ?? []).slice(0, 4);

  return (
    <div className="w-full my-8 sm:my-12">
      <div className="flex justify-between items-center mb-4">
        <SectionHeader label="Just For You" title="Related Items" hide={true} />
        <button className="px-4 py-2 text-xs sm:text-sm font-medium text-text-primary dark:text-text-primary border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-pointer shrink-0">
          See All
        </button>
      </div>
      <ProductCard data={relateditem} heart={true} />
    </div>
  );
}

export default RelatedItem;
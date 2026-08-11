import SectionHeader from "../common/SectionHeader";
import ExploreCard from "../common/ExploreCard";
import ButtonCreator from "../../common/ButtonCreator";
import { useGetProductQuery } from "../../RTK/ProductApi";

function BaseExplore() {
  const { data, isLoading, isError } = useGetProductQuery();
  const products = data?.products ?? [];

  if (isLoading)
    return <p className="text-center text-gray-500 py-10 text-sm">Loading products...</p>;
  if (isError)
    return (
      <p className="text-center text-red-500 py-10 text-sm">
        Something went wrong loading products.
      </p>
    );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 my-4">
      <SectionHeader label="Our Products" title="Explore Our Products" hide={true} />
      <ExploreCard data={products} />
      <ButtonCreator
        STYLE="bg-[#DB4444] text-white px-6 py-2.5 rounded-lg block mx-auto my-6 hover:bg-red-600 text-xs sm:text-sm font-medium transition-colors cursor-pointer shadow-sm"
        children="View All Products"
      />
    </div>
  );
}

export default BaseExplore;
import SectionHeader from "../common/SectionHeader";
import ProductCard from "../common/ProductCard";
import ButtonCreator from "../../common/ButtonCreator";
import { useGetProductQuery } from "../../RTK/ProductApi";
import { useState } from "react";

function Flash() {
  const { data } = useGetProductQuery();
  const products = (data?.products ?? []).filter((p) => p.discount > 0);

  const [showAll, setShowAll] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const visibleProducts = showAll ? products : products.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (startIndex + itemsPerPage < products.length) {
      setStartIndex((prev) => prev + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex((prev) => prev - itemsPerPage);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 my-4">
      <SectionHeader
        stat={true}
        label="Today's"
        title="Flash Sales"
        handlenext={handleNext}
        handleprev={handlePrev}
      />
      
      <ProductCard data={visibleProducts} />

      <ButtonCreator
        onclick={() => setShowAll((p) => !p)}
        STYLE="bg-[#DB4444] text-white px-6 py-2.5 rounded-lg block mx-auto my-6 hover:bg-red-600 cursor-pointer text-xs sm:text-sm font-medium transition-colors shadow-sm"
        children={showAll ? "View Less" : "View All Products"}
      />
    </div>
  );
}

export default Flash;
import SectionHeader from "../common/SectionHeader";
import ProductCard from "../common/ProductCard";
import { useGetProductQuery } from "../../RTK/ProductApi";
import { useState } from "react";

function BestSeling() {
  const { data } = useGetProductQuery();
  const products = data?.products ?? [];

  const bestSelling = [...products].sort((a, b) => b.reviews - a.reviews);

  const [ShowAll, setShowall] = useState(false);
  const visibleProducts = ShowAll ? bestSelling : bestSelling.slice(0, 4);

  return (
    <div>
      <SectionHeader
        label="This Month"
        title="Best Selling Products"
        Btn={true}
        onclick={() => setShowall((p) => !p)}
        showall={ShowAll}
      />
      <ProductCard data={visibleProducts} hide={true} />
    </div>
  );
}

export default BestSeling;

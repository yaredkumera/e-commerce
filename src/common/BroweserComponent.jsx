import { useSearchParams, Link } from "react-router-dom"
import { useGetProductQuery } from "../RTK/ProductApi"
import ProductCard from "../Home/common/ProductCard"
import NavLinks from "./NavLinks"

function CategoryPage() {
  const [searchParams] = useSearchParams()
  const category = searchParams.get("category")

  const { data, isLoading, isError } = useGetProductQuery()
  const products = data?.products ?? []

  const filtered = category
    ? products.filter((p) => p.category === category)
    : products

  return (
    <div>
      <NavLinks />
      <div className="px-16 py-10 bg-bg-secondary text-text-primary">
        <h1 className="text-2xl font-bold mb-8">
          {category ? category : "All Products"}
        </h1>

        {isLoading && <p>Loading products...</p>}
        {isError && <p>Something went wrong loading products.</p>}

        {!isLoading && !isError && filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl font-semibold mb-2">
              Sorry, we don't have any products in "{category}" right now.
            </p>
            <p className="text-gray-500 mb-6">
              Check back soon, or browse our other categories.
            </p>
            <Link to="/" className="text-[#DB4444] underline">
              Back to Home
            </Link>
          </div>
        )}

        {!isLoading && !isError && filtered.length > 0 && (
          <ProductCard data={filtered} />
        )}
      </div>
    </div>
  )
}

export default CategoryPage
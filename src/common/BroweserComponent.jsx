import { useSearchParams, Link } from "react-router-dom";
import { useGetProductQuery } from "../RTK/ProductApi";
import ProductCard from "../Home/common/ProductCard";
import NavLinks from "./NavLinks";

function CategoryPage() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const { data, isLoading, isError } = useGetProductQuery();
  const products = data?.products ?? [];

  const filtered = category
    ? products.filter((p) => p.category?.toLowerCase() === category.toLowerCase())
    : products;

  return (
    <div className="min-h-screen bg-bg-secondary text-text-primary flex flex-col">
      <NavLinks />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* Page Title & Count */}
        <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
          <h1 className="text-xl sm:text-3xl font-bold tracking-tight text-text-primary">
            {category ? category : "All Products"}
          </h1>
          {!isLoading && !isError && (
            <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
              Showing {filtered.length} {filtered.length === 1 ? "result" : "results"}
            </span>
          )}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <p className="text-gray-500 text-sm sm:text-base animate-pulse">Loading products...</p>
          </div>
        )}

        {/* Error State */}
        {isError && (
          <div className="text-center py-16 bg-red-50 dark:bg-red-950/20 rounded-xl border border-red-200 dark:border-red-900 my-4">
            <p className="text-red-500 font-medium text-sm sm:text-base">
              Something went wrong loading products. Please try again later.
            </p>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !isError && filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center text-center py-12 sm:py-20 px-4 bg-bg-teritiary rounded-2xl border border-gray-200 dark:border-gray-800 my-4">
            <p className="text-lg sm:text-2xl font-bold mb-2 text-text-primary">
              Sorry, we couldn't find any products in "{category}".
            </p>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-md mb-6">
              Check back soon or explore items in our other categories.
            </p>
            <Link
              to="/"
              className="bg-[#DB4444] text-white hover:bg-red-600 font-medium py-2.5 px-6 rounded-lg text-xs sm:text-sm transition-colors shadow-xs"
            >
              Back to Home
            </Link>
          </div>
        )}

        {/* Product Cards Display */}
        {!isLoading && !isError && filtered.length > 0 && (
          <ProductCard data={filtered} />
        )}
      </main>
    </div>
  );
}

export default CategoryPage;
import { useGetWhishListQuery } from "../../RTK/WhishListApi";
import { useGetCartsQuery, useCreateCartMutation } from "../../RTK/CartApi";
import WishlistItem from "./WishlistItem";

function WishList() {
  const { data: wishlistData } = useGetWhishListQuery();
  const data = wishlistData?.wishlist ?? [];

  const { data: cartData } = useGetCartsQuery();
  const cartdata = cartData?.cart ?? [];

  const [addToCartDB] = useCreateCartMutation();

  const moveAllToBag = () => {
    for (let entry of data) {
      const alreadyInCart = cartdata.find((c) => c.product._id === entry.product._id);
      if (!alreadyInCart) {
        addToCartDB({ productId: entry.product._id, quantity: 1 });
      }
    }
  };

  return (
    <div className="flex flex-col gap-6 my-4">
      {/* Top Bar */}
      <div className="flex items-center justify-between gap-4">
        <p className="text-base sm:text-xl font-medium text-text-primary">
          Wishlist ({data.length})
        </p>
        <button
          onClick={moveAllToBag}
          className="border border-gray-300 dark:border-gray-700 text-text-primary font-medium py-2 px-4 sm:px-6 rounded-lg text-xs sm:text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-pointer shadow-xs"
        >
          Move All To Bag
        </button>
      </div>

      {/* Grid Display */}
      {data.length === 0 ? (
        <p className="text-gray-500 text-sm text-center py-8">Your wishlist is currently empty.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {data.map((entry) => (
            <WishlistItem key={entry._id} item={entry} />
          ))}
        </div>
      )}
    </div>
  );
}

export default WishList;
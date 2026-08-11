import { useGetWhishListQuery } from "../../RTK/WhishListApi";
import { useGetCartsQuery, useCreateCartMutation } from "../../RTK/CartApi";
import WishlistItem from "./WishlistItem";

function WishList() {
  const { data: wishlistData } = useGetWhishListQuery()
  const data = wishlistData?.wishlist ?? []

  const { data: cartData } = useGetCartsQuery()
  const cartdata = cartData?.cart ?? []

  const [addToCartDB] = useCreateCartMutation()

  const moveAllToBag = () => {
    for (let entry of data) {
      const alreadyInCart = cartdata.find((c) => c.product._id === entry.product._id)
      if (!alreadyInCart) {
        addToCartDB({ productId: entry.product._id, quantity: 1 })
      }
    }
  };

  return (
    <div className="grid gap-6">
      <div className="flex justify-between">
        <p>Wishlist({data.length})</p>
        <button
          onClick={moveAllToBag}
          className="border rounded border-gray-400 py-2 px-4 hover:bg-black hover:text-white cursor-pointer"
        >
          Move All To Bag
        </button>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        {data.map((entry) => (
          <WishlistItem key={entry._id} item={entry} />
        ))}
      </div>
    </div>
  );
}

export default WishList;
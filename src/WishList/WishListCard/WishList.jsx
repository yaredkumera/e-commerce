import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../Carts/CartsDetal/cartsSlice";
import WishlistItem from "./WishlistItem";

function WishList() {
  const data = useSelector((state) => state.wishlist.items);
  const cartdata = useSelector((state) => state.cartslice.items);
  const dispatch = useDispatch();

  let moveAllToBag = () => {
    for (let p of data) {
      if (!cartdata.find(e => e.id === p.id)) {
        dispatch(addToCart(p));
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
        {data.map((item,i) => (
          <WishlistItem index={i} key={item.id} item={item} cartdata={cartdata} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
}

export default WishList;
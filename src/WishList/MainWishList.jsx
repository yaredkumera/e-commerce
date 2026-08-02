import NavLinks from "../common/NavLinks"
import RelatedItem from "./WishListCard/RelatedItem"
import WishList from "./WishListCard/WishList"
function MainWishList() {
  return (
    <div>
        <NavLinks/>
<div className="px-20 py-14  bg-bg-secondary text-text-primary">
    <WishList/>
    <RelatedItem/>
</div>
    </div>
  )
}

export default MainWishList
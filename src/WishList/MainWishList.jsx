import NavLinks from "../common/NavLinks"
import RelatedItem from "./WishListCard/RelatedItem"
import WishList from "./WishListCard/WishList"
function MainWishList() {
  return (
    <div>
        <NavLinks/>
<div className="mx-20 my-14">
    <WishList/>
    <RelatedItem/>
</div>
    </div>
  )
}

export default MainWishList
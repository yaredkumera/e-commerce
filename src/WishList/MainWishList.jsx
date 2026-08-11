import NavLinks from "../common/NavLinks";
import RelatedItem from "./WishListCard/RelatedItem";
import WishList from "./WishListCard/WishList";

function MainWishList() {
  return (
    <div className="min-h-screen bg-bg-secondary text-text-primary flex flex-col">
      <NavLinks />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8 sm:space-y-12">
        <WishList />
        <RelatedItem />
      </main>
    </div>
  );
}

export default MainWishList;
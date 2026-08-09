import Footer from "./Footer/footer";
import Header from "./Header/header";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFoundPage/NotFound";
import BodyAbout from "./About/bodyAbout";
import MainContact from "./Contact/MainContact";
import MainSignUP from "./SignUp/MainSignUP";
import MainLogin from "./Login/MainLogin";
import MainHome from "./Home/MainHome";
import CheckOut from "./CheckOut/CheckOut";
import ManCart from "./Carts/ManCart";
import MainProductDetail from "./ProductDetail/MainProductDetail";
import MainAccount from "./Account/MainAccount";
import MainWishList from "./WishList/MainWishList";
import BroweserComponent from "./common/BroweserComponent"
export default function App() {
  return (
    <div>
      <Header />
      <Routes>
         <Route path="/shop" element={<BroweserComponent />} />
        <Route path="/wishlist" element={<MainWishList />} />
        <Route path="/account" element={<MainAccount />} />
        <Route path="/Product" element={<MainProductDetail />} />
        <Route path="/" element={<MainHome />} />
        <Route path="/signUp" element={<MainSignUP />} />
        <Route path="/about" element={<BodyAbout />} />
        <Route path="/cart" element={<ManCart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route
          path="/contact"
          element={
            <>
              <MainContact />
            </>
          }
        />
        <Route path="/login" element={<MainLogin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

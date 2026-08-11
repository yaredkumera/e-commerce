import LinkPage from "../common/LinkPage";
import NavLinks from "../common/NavLinks";
import ChecOutForm from "./ChecOutDetals/ChecOutForm";

function CheckOut() {
  return (
    <div className="min-h-screen bg-bg-secondary text-text-primary">
      <NavLinks />
      <div className="px-4 sm:px-8 md:px-16 py-6 max-w-7xl mx-auto">
        <LinkPage
          items={[
            { label: "Account", path: "/account" },
            { label: "My Account", path: "/myAccount" },
            { label: "Product", path: "/product" },
            { label: "View Cart", path: "/cart" },
            { label: "CheckOut", path: "/checkout" },
          ]}
        />
        <h1 className="text-2xl sm:text-3xl font-bold my-6">Billing Details</h1>
        <ChecOutForm />
      </div>
    </div>
  );
}

export default CheckOut;
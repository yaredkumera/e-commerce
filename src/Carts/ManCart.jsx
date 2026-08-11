import LinkPage from "../common/LinkPage";
import NavLinks from "../common/NavLinks";
import CartForm from "./CartsDetal/CartForm";

function ManCart() {
  return (
    <div className="min-h-screen bg-bg-secondary text-text-primary overflow-x-hidden">
      <NavLinks />
      <div className="px-4 sm:px-8 md:px-16">
        <LinkPage
          items={[
            { label: `Home`, path: `/` },
            { label: `Cart`, path: `/cart` },
          ]}
        />
      </div>
      <div className="px-4 sm:px-8 md:px-16 py-6">
        <CartForm />
      </div>
    </div>
  );
}

export default ManCart;
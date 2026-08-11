import LinkPage from "../common/LinkPage";
import NavLinks from "../common/NavLinks";
import ContactForm from "./ContactForm";

function MainContact() {
  return (
    <div className="bg-bg-secondary text-text-primary border border-transparent min-h-screen w-full overflow-x-hidden">
      <NavLinks />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <LinkPage
          items={[
            { label: "Home", path: "/" },
            { label: "Contact", path: "/contact" },
          ]}
        />
        <ContactForm />
      </div>
    </div>
  );
}

export default MainContact;
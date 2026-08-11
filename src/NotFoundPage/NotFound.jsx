import LinkPage from "../common/LinkPage";
import BodyPage from "./bodyPage";
import NavLinks from "../common/NavLinks";

function NotFound() {
  return (
    <div className="min-h-screen bg-bg-secondary text-text-primary flex flex-col">
      <NavLinks />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <LinkPage items={[{ label: "Home", path: "/" }, { label: "404 error", path: "" }]} />
        <BodyPage />
      </main>
    </div>
  );
}

export default NotFound;
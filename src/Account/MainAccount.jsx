import EditProfile from "./accountdetail/EditProfile";
import NavLinks from "../common/NavLinks";
import LinkPage from "../common/LinkPage";

function MainAccount() {
  const username = localStorage.getItem("currentUser") || "Md Rimel!";

  return (
    <div className="min-h-screen bg-bg-secondary text-text-primary">
      <NavLinks />
      <div className="px-4 sm:px-8 md:px-16 py-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
          <LinkPage
            items={[
              { label: "Home", path: "/" },
              { label: "My Account", path: "/myAccount" },
            ]}
          />
          <p className="text-sm sm:text-base font-normal">
            Welcome! <span className="text-[#DB4444] font-semibold">{username}</span>
          </p>
        </div>
        <EditProfile />
      </div>
    </div>
  );
}

export default MainAccount;
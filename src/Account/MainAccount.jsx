import EditProfile from "./accountdetail/EditProfile";
import NavLinks from "../common/NavLinks";
import LinkPage from "../common/LinkPage";
function MainAccount() {
  return (
    <div>
      <NavLinks />
      <div className="px-20 bg-bg-secondary text-text-primary border border-transparent">
        <div className="flex justify-between">
          <LinkPage
            items={[
              { label: `Home`, path: `/` },
              { label: `My Account `, path: `/myaccont` },
            ]}
          />
          <p className="whitespace-nowrap px-16 py-9">
          wellcome <span className="text-red-500">{localStorage.getItem("currentUser")||"Md Rimel!"}</span>
          </p>
        </div>
        <EditProfile />
      </div>
    </div>
  );
}

export default MainAccount;

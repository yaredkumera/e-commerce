import LoginForm from "./Logindetail/LoginForm"
import NavLinks from "../common/NavLinks";

export function MainLogin() {
  return (
    <div className="bg-bg-secondary text-text-primary min-h-screen w-full overflow-x-hidden">
      <NavLinks bool={true} />
      <LoginForm />
    </div>
  );
}
export default MainLogin
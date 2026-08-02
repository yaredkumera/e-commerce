 import LoginForm from "./Logindetail/LoginForm"
 import NavLinks from "../common/NavLinks"
function MainLogin() {
  return (
    <div className="bg-bg-secondary text-text-primary border border-transparent">
        <NavLinks bool={true}/>
        <LoginForm/>
    </div>
  )
}

export default MainLogin
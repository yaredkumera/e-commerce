import SignupForm from "./SignupForm";
import NavLinks from "../common/NavLinks";
 
function MainSignUP() {
  return (
    <div  className="bg-bg-secondary text-text-primary border border-transparent">
        <NavLinks bool={true}/>
        <SignupForm/>
    </div>
  )
}
export default MainSignUP
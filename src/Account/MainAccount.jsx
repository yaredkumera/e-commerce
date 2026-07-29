import EditProfile from "./accountdetail/EditProfile"
import NavLinks from "../common/NavLinks"
import LinkPage from "../common/LinkPage"
function MainAccount() {
  return (
    <div>
       <NavLinks/>
       <div className="mx-20">
       <LinkPage items={[{label:`Home`,path:`/`},{label:`My Account `,path:`/myaccont`}]}/>
       <EditProfile/>
       </div>
    </div>
  )
}

export default MainAccount
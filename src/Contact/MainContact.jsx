import LinkPage from "../common/LinkPage"
import NavLinks from "../common/NavLinks"
import ContactForm from "./ContactForm"

function MainContact() {
  return (
    <div>
       <NavLinks/> 
       <LinkPage items={[{label:'Home',path:'/'},{label:'Contact',path:'/contact'}]}/>
       <ContactForm/>


    </div>
  )
}

export default MainContact
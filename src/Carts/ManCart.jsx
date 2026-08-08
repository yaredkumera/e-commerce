import LinkPage from "../common/LinkPage"
import NavLinks from "../common/NavLinks"
import CartForm from "./CartsDetal/CartForm"
function ManCart() {
  return (
    <div>
                <NavLinks/> 
        <LinkPage items={[{label:`Home`,path:`/`},{label:`Cart`,path:`/cart`}]}/>
    <div className="px-20 py-9 bg-bg-secondary text-text-primary">

         <CartForm />
    </div>
    </div>
  )
}

export default ManCart
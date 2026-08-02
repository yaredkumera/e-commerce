import LinkPage from "../common/LinkPage"
import NavLinks from "../common/NavLinks"
import ChecOutForm from "./ChecOutDetals/ChecOutForm"
function CheckOut() {
  return (
    <div>
      <NavLinks/>
    <div className="px-20 pb-21 bg-bg-secondary text-text-primary">
      
       <LinkPage items={[{label:'Account',path:'/account'},{label:'My Accouny',path:'/myAccount'},{label:'Product',path:'/product'},{label:'View Cart',path:'/viewCart'},{label:'CheckOut',path:'/checkout'}]}/>
       <p className="text-3xl font-bold mb-7 pl-10">Billing Details</p>
       <ChecOutForm/>
    </div>
    </div>
  )
}

export default CheckOut
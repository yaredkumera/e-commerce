import LinkPage from "../common/LinkPage"
import NavLinks from "../common/NavLinks"
import CartForm from "./CartsDetal/CartForm"
function ManCart() {
    let Cart=[{name:"LCD Monitor",image:"Checkout1.png",price:650,Quantity:1,Subtotal:650},
        {name:"H1 Gamepad",image:"Checkout2.png",price:550,Quantity:2,Subtotal:1100}
    ]
  return (
    <div>
                <NavLinks/> 
        <LinkPage items={[{label:`Home`,path:`/`},{label:`Cart`,path:`/cart`}]}/>
    <div className="px-20 py-9 bg-bg-secondary text-text-primary">

         <CartForm data={Cart}/>
    </div>
    </div>
  )
}

export default ManCart
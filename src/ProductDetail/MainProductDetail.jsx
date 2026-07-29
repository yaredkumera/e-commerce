import LinkPage from "../common/LinkPage"
import NavLinks from "../common/NavLinks"
import ProductDetailCard from "./ProductDetailCard"
function MainProductDetail() {
let items=[{image:`Detail1.png`,id:1},{image:`Detail2.png`,id:2}
    ,{image:`Detail3.png`,id:3},{image:`Detail4.png`,id:4}
]
  return (
    <div>
        <NavLinks/>
        <LinkPage items={[{label:`Account`,path:`/account`},{label:`Gaming`,path:`/gaming`},{label:`Havic HV G-92 Gamepad`,path:`/havic`}]}/>
        <div className="mx-24">
<ProductDetailCard data={items}/>
</div>
    </div> 
  )
}

export default MainProductDetail
import SectionHeader from "../common/SectionHeader"
import ProductCard from "../common/ProductCard"
import ButtonCreator from "../../common/ButtonCreator"
function Flash() {
const products = [
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    oldPrice: 160,
    rating: 5,
    reviews: 88,
    discount: 40,
    image: "/FlashSales1.png",
  },
  {
    name: "AK-900 Wired Keyboard",
    price: 960,
    oldPrice: 1160,
    rating: 4,
    reviews: 75,
    discount: 35,
    image: "/FlashSales2.png",
  },
  {
    name: "IPS LCD Gaming Monitor",
    price: 370,
    oldPrice: 400,
    rating: 5,
    reviews: 99,
    discount: 30,
    image: "/FlashSales3.png",
  },
  {
    name: "S-Series Comfort Chair",
    price: 375,
    oldPrice: 400,
    rating: 4,
    reviews: 99,
    discount: 25,
    image: "/FlashSales4.png",
  },
]
  return (
    <div className="grid gap-1 rounded-md overflow-hidden m-8">
< SectionHeader stat={true }label="Today's" title="Flash Sales"/>
<ProductCard data={products}/>
 
<ButtonCreator STYLE='bg-[#DB4444] text-white px-6 py-2 rounded-md block mx-auto my-6  hover:bg-red-600'
children="View All Products"
/>
    </div>   
  )
}
export default Flash
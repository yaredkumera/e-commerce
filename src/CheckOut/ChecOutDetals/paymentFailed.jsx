import { Link, useParams } from "react-router-dom"
import NavLinks from "../../common/NavLinks"
import { FiXCircle } from "react-icons/fi"

function PaymentFailed() {
  const { orderId } = useParams()

  return (
    <div>
      <NavLinks />
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <FiXCircle className="mx-auto text-red-500 mb-4" size={56} />
        <h1 className="text-2xl font-bold text-text-primary mb-2">Payment Failed</h1>
        <p className="text-gray-500 mb-8"> 
          We couldn't confirm payment for order #{orderId?.slice(-8)}. No charge was completed. You can try again from checkout.
        </p>
        <Link to="/checkout" className="bg-[#DB4444] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-red-600 transition-colors">
          Back to Checkout
        </Link>
      </div>
    </div>  
  )
}

export default PaymentFailed
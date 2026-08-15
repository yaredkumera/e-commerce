import { useParams, Link } from "react-router-dom";
import { useGetOneOrderQuery } from "../../RTK/orderApi";
import NavLinks from "../../common/NavLinks";
import { FiCheckCircle } from "react-icons/fi";

function PaymentSuccess() {
  const { orderId } = useParams();

  const {
    data,
    isLoading,
  } = useGetOneOrderQuery(orderId, {
    skip: !orderId,
    pollingInterval: 3000,
  });

  const order = data?.order;

  return (
    <div>
      <NavLinks />

      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        {isLoading ? (
          <p className="text-gray-500">
            Confirming your payment...
          </p>
        ) : order?.paymentStatus === "paid" ? (
          <>
            <FiCheckCircle
              className="mx-auto text-green-500 mb-4"
              size={56}
            />

            <h1 className="text-2xl font-bold text-text-primary mb-2">
              Payment Successful
            </h1>

            <p className="text-gray-500 mb-8">
              Your order #
              {order._id.slice(-8)}
              {" "}
              has been confirmed and is now being processed.
            </p>

            <Link
              to="/orders"
              className="bg-[#DB4444] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-red-600 transition-colors"
            >
              View My Orders
            </Link>
          </>
        ) : (
          <p className="text-gray-500">
            We're still confirming your payment.
            {" "}
            <Link
              to="/orders"
              className="text-[#DB4444] underline"
            >
              Check My Orders
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}

export default PaymentSuccess;
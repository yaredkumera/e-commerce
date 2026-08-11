import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetCartsQuery } from "../../RTK/CartApi";
import { useCreateOrderMutation } from "../../RTK/orderApi";

function OrderItem({ image, name, price }) {
  return (
    <div className="flex justify-between items-center py-2">
      <div className="flex items-center gap-3">
        <img src={image} alt={name} className="w-11 h-11 object-contain rounded-md bg-white p-1" />
        <p className="text-text-primary text-sm">{name}</p>
      </div>
      <p className="text-text-primary text-sm font-medium">${price}</p>
    </div>
  );
}

function OrderSummary({ form }) {
  const navigate = useNavigate();
  const { data: cartData } = useGetCartsQuery();
  const cartdata = cartData?.cart ?? [];

  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [error, setError] = useState("");

  let subtotal = cartdata.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  let shipping = 0;
  let total = subtotal + shipping;

  const handlePlaceOrder = async () => {
    const { firstName, streetAddress, townCity, phoneNumber, email } = form;
    if (!(firstName && streetAddress && townCity && phoneNumber && email)) {
      setError("Please fill out all required billing fields");
      return;
    }

    try {
      await createOrder({ ...form, paymentMethod }).unwrap();
      navigate("/orders");
    } catch (err) {
      setError(err.data?.message || "Failed to place order");
    }
  };

  return (
    <div className="grid gap-2 bg-bg-secondary border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      {error && <p className="text-red-600 text-sm font-medium mb-2">{error}</p>}

      <div className="grid gap-1 mb-2">
        {cartdata.map((item) => (
          <OrderItem key={item._id} image={item.product.image} name={item.product.name} price={item.product.price} />
        ))}
      </div>

      <hr className="border-gray-200 dark:border-gray-700" />
      <div className="flex justify-between py-2 text-text-primary text-sm">
        <p>Subtotal:</p>
        <p>${subtotal}</p>
      </div>
      <hr className="border-gray-200 dark:border-gray-700" />
      <div className="flex justify-between py-2 text-text-primary text-sm">
        <p>Shipping:</p>
        <p>{shipping === 0 ? "Free" : `$${shipping}`}</p>
      </div>
      <hr className="border-gray-200 dark:border-gray-700" />
      <div className="flex justify-between py-2 font-semibold text-text-primary">
        <p>Total:</p>
        <p>${total}</p>
      </div>

      <div className="grid gap-3 mt-2">
        <label className="flex items-center justify-between cursor-pointer">
          <span className="flex items-center gap-2">
            <input type="radio" name="payment" checked={paymentMethod === "bank"} onChange={() => setPaymentMethod("bank")} className="accent-[#DB4444]" />
            <span className="text-text-primary text-sm">Bank</span>
          </span>
          <img src="/VISA.png" alt="" className="h-5" />
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="payment" checked={paymentMethod === "cod"} onChange={() => setPaymentMethod("cod")} className="accent-[#DB4444]" />
          <span className="text-text-primary text-sm">Cash on delivery</span>
        </label>
      </div>

      <div className="flex gap-3 mt-3">
        <input
          type="text"
          placeholder="Coupon Code"
          className="flex-1 py-2.5 px-4 rounded-lg bg-bg-primary border border-gray-200 dark:border-gray-700 outline-none focus:border-[#DB4444] text-text-primary placeholder-gray-400 transition-colors"
        />
        <button className="bg-[#DB4444] text-white px-5 rounded-lg font-medium hover:bg-red-600 transition-colors whitespace-nowrap">
          Apply Coupon
        </button>
      </div>

      <button
        onClick={handlePlaceOrder}
        disabled={isLoading}
        className="bg-[#DB4444] text-white py-2.5 rounded-lg font-medium mt-3 hover:bg-red-600 transition-colors disabled:opacity-50"
      >
        {isLoading ? "Placing order..." : "Place Order"}
      </button>
    </div>
  );
}

export default OrderSummary;
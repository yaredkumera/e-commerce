import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetCartsQuery } from "../../RTK/CartApi";
import { useCreateOrderMutation } from "../../RTK/orderApi";

function OrderItem({ image, name, price }) {
  return (
    <div className="flex justify-between items-center py-2">
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 object-contain rounded-md bg-white p-1 flex-shrink-0"
        />
        <p className="text-text-primary text-xs sm:text-sm line-clamp-1">{name}</p>
      </div>
      <p className="text-text-primary text-xs sm:text-sm font-medium ml-2">${price}</p>
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

  const subtotal = cartdata.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = 0;
  const total = subtotal + shipping;

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
    <div className="grid gap-3 bg-bg-secondary border border-gray-200 dark:border-gray-800 rounded-xl p-4 sm:p-6">
      {error && <p className="text-red-500 text-xs sm:text-sm font-medium">{error}</p>}

      <div className="grid gap-1 mb-2 max-h-60 overflow-y-auto pr-1">
        {cartdata.map((item) => (
          <OrderItem
            key={item._id}
            image={item.product.image}
            name={item.product.name}
            price={item.product.price}
          />
        ))}
      </div>

      <hr className="border-gray-200 dark:border-gray-800" />
      <div className="flex justify-between py-1.5 text-text-primary text-sm">
        <p>Subtotal:</p>
        <p>${subtotal}</p>
      </div>
      <hr className="border-gray-200 dark:border-gray-800" />
      <div className="flex justify-between py-1.5 text-text-primary text-sm">
        <p>Shipping:</p>
        <p>{shipping === 0 ? "Free" : `$${shipping}`}</p>
      </div>
      <hr className="border-gray-200 dark:border-gray-800" />
      <div className="flex justify-between py-1.5 font-bold text-text-primary">
        <p>Total:</p>
        <p>${total}</p>
      </div>

      <div className="grid gap-3 my-2">
        <label className="flex items-center justify-between cursor-pointer p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800/50">
          <span className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              checked={paymentMethod === "bank"}
              onChange={() => setPaymentMethod("bank")}
              className="accent-emerald-600"
            />
            <span className="text-text-primary text-xs sm:text-sm">Bank</span>
          </span>
          <img src="/VISA.png" alt="Visa" className="h-4" />
        </label>
        <label className="flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800/50">
          <input
            type="radio"
            name="payment"
            checked={paymentMethod === "cod"}
            onChange={() => setPaymentMethod("cod")}
            className="accent-emerald-600"
          />
          <span className="text-text-primary text-xs sm:text-sm">Cash on delivery</span>
        </label>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 mt-1">
        <input
          type="text"
          placeholder="Coupon Code"
          className="flex-1 py-2 px-3 rounded-md bg-bg-primary border border-gray-200 dark:border-gray-800 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-text-primary placeholder-gray-400 transition-colors text-sm"
        />
        <button className="bg-[#DB4444] text-white px-4 py-2 rounded-md font-medium hover:bg-red-600 active:bg-red-700 transition-colors text-sm whitespace-nowrap">
          Apply Coupon
        </button>
      </div>

      <button
        onClick={handlePlaceOrder}
        disabled={isLoading}
        className="w-full bg-[#DB4444] text-white py-3 rounded-md font-medium mt-2 hover:bg-red-600 active:bg-red-700 transition-colors disabled:opacity-50 text-sm"
      >
        {isLoading ? "Placing order..." : "Place Order"}
      </button>
    </div>
  );
}

export default OrderSummary;
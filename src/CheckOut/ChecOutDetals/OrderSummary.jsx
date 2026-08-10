import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetCartsQuery } from "../../RTK/CartApi";
import { useCreateOrderMutation } from "../../RTK/orderApi";

function OrderItem({ image, name, price }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-3">
        <img src={image} alt={name} className="w-10 h-10 object-contain" />
        <p>{name}</p>
      </div>
      <p>${price}</p>
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

  let subtotal = cartdata.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );
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
    <div className="grid gap-4 ">
      {error && <p className="text-red-600 font-semibold">{error}</p>}

      {cartdata.map((item) => (
        <OrderItem
          key={item._id}
          image={item.product.image}
          name={item.product.name}
          price={item.product.price}
        />
      ))}

      <div className="flex justify-between">
        <p>Subtotal:</p>
        <p>${subtotal}</p>
      </div>
      <hr className="text-gray-300 " />
      <div className="flex justify-between">
        <p>Shipping:</p>
        <p>{shipping === 0 ? "Free" : `$${shipping}`}</p>
      </div>
      <hr className="text-gray-300" />
      <div className="flex justify-between font-semibold mb-4">
        <p>Total:</p>
        <p>${total}</p>
      </div>

      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <input
            type="radio"
            name="payment"
            id="bank"
            checked={paymentMethod === "bank"}
            onChange={() => setPaymentMethod("bank")}
          />
          <label htmlFor="bank">Bank</label>
        </div>
        <img src="/VISA.png" alt="" />
      </div>
      <div className="flex items-center gap-2">
        <input
          type="radio"
          name="payment"
          id="cod"
          checked={paymentMethod === "cod"}
          onChange={() => setPaymentMethod("cod")}
        />
        <label htmlFor="cod">Cash on delivery</label>
      </div>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Coupon Code"
          className="py-2 px-3 rounded-md bg-gray-200 w-full outline-none text-black font-semibold"
        />
        <button className="bg-[#DB4444] text-white px-4 rounded-md whitespace-nowrap">
          Apply Coupon
        </button>
      </div>

      <button
        onClick={handlePlaceOrder}
        disabled={isLoading}
        className="bg-[#DB4444] text-white py-2 rounded-md w-fit px-6 mt-4 disabled:opacity-50"
      >
        {isLoading ? "Placing order..." : "Place Order"}
      </button>
    </div>
  );
}

export default OrderSummary;

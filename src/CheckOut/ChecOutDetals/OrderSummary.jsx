import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useGetCartsQuery } from "../../RTK/CartApi";
import { useCreateOrderMutation } from "../../RTK/orderApi";
import { useInitializeChapaPaymentMutation } from "../../RTK/ChapaApi";

function OrderItem({ image, name, price }) {
  return (
    <div className="flex justify-between items-center py-2">
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="w-11 h-11 object-contain rounded-md bg-white p-1"
        />

        <p className="text-text-primary text-sm">
          {name}
        </p>
      </div>

      <p className="text-text-primary text-sm font-medium">
        ${price}
      </p>
    </div>
  );
}

function OrderSummary({ form }) {
  const navigate = useNavigate();

  const { data: cartData } = useGetCartsQuery();
  const cartdata = cartData?.cart ?? [];

  const [createOrder, { isLoading: isCreating }] =
    useCreateOrderMutation();

  const [
    initializeChapaPayment,
    { isLoading: isInitializing },
  ] = useInitializeChapaPaymentMutation();

  const [paymentMethod, setPaymentMethod] =
    useState("cod");

  const [error, setError] = useState("");

  const isLoading =
    isCreating || isInitializing;

  const subtotal = cartdata.reduce(
    (sum, item) =>
      sum +
      item.product.price * item.quantity,
    0
  );

  const shipping = 0;

  const total = subtotal + shipping;

  const handlePlaceOrder = async () => {
    setError("");

    const {
      firstName,
      streetAddress,
      townCity,
      phoneNumber,
      email,
    } = form;

    if (
      !firstName ||
      !streetAddress ||
      !townCity ||
      !phoneNumber ||
      !email
    ) {
      setError(
        "Please fill out all required billing fields"
      );

      return;
    }

    try {
   

      const result = await createOrder({
        ...form,
        paymentMethod,
      }).unwrap();

      console.log(
        "Order created:",
        result
      );

      const newOrder = result.data;

     

      if (paymentMethod === "cod") {
        navigate("/orders");
        return;
      }



      const paymentResult =
        await initializeChapaPayment(
          newOrder._id
        ).unwrap();

      console.log(
        "Chapa initialization:",
        paymentResult
      );


    

      const checkoutUrl =
        paymentResult.data.checkoutUrl;

      if (!checkoutUrl) {
        throw new Error(
          "Chapa checkout URL was not returned"
        );
      }


      window.location.assign(
        checkoutUrl
      );

    } catch (err) {
      console.error(
        "Order/payment error:",
        err
      );

      setError(
        err?.data?.message ||
        err?.message ||
        "Failed to place order"
      );
    }
  };

  return (
    <div className="grid gap-2 bg-bg-secondary border border-gray-200 dark:border-gray-700 rounded-xl p-6">

      {error && (
        <p className="text-red-600 text-sm font-medium mb-2">
          {error}
        </p>
      )}

      <div className="grid gap-1 mb-2">
        {cartdata.map((item) => (
          <OrderItem
            key={item._id}
            image={item.product.image}
            name={item.product.name}
            price={item.product.price}
          />
        ))}
      </div>

      <hr className="border-gray-200 dark:border-gray-700" />

      {/* Subtotal */}
      <div className="flex justify-between py-2 text-text-primary text-sm">
        <p>Subtotal:</p>
        <p>${subtotal}</p>
      </div>

      <hr className="border-gray-200 dark:border-gray-700" />

      {/* Shipping */}
      <div className="flex justify-between py-2 text-text-primary text-sm">
        <p>Shipping:</p>

        <p>
          {shipping === 0
            ? "Free"
            : `$${shipping}`}
        </p>
      </div>

      <hr className="border-gray-200 dark:border-gray-700" />

      {/* Total */}
      <div className="flex justify-between py-2 font-semibold text-text-primary">
        <p>Total:</p>
        <p>${total}</p>
      </div>

      {/* Payment methods */}
      <div className="grid gap-3 mt-2">

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="payment"
            value="chapa"
            checked={
              paymentMethod === "chapa"
            }
            onChange={() =>
              setPaymentMethod("chapa")
            }
            className="accent-[#DB4444]"
          />

          <span className="text-text-primary text-sm">
            Pay with Chapa
          </span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="payment"
            value="cod"
            checked={
              paymentMethod === "cod"
            }
            onChange={() =>
              setPaymentMethod("cod")
            }
            className="accent-[#DB4444]"
          />

          <span className="text-text-primary text-sm">
            Cash on delivery
          </span>
        </label>

      </div>

      {/* Submit */}
      <button
        type="button"
        onClick={handlePlaceOrder}
        disabled={isLoading}
        className="bg-[#DB4444] text-white py-2.5 rounded-lg font-medium mt-3 hover:bg-red-600 transition-colors disabled:opacity-50"
      >
        {isLoading
          ? "Processing..."
          : paymentMethod === "chapa"
            ? "Pay with Chapa"
            : "Place Order"}
      </button>

    </div>
  );
}

export default OrderSummary;
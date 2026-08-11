import { useState } from "react";
import ButtonCreator from "../../common/ButtonCreator";
import {
  useGetCartsQuery,
  useUpdateCartMutation,
  useDeleteCartMutation,
} from "../../RTK/CartApi";
import { NavLink, useNavigate } from "react-router-dom";

function CartForm() {
  const navigate = useNavigate();
  const [deleteFromCart] = useDeleteCartMutation();
  const [updateCart] = useUpdateCartMutation();
  const { data: cartData } = useGetCartsQuery();
  const cartList = cartData?.cart ?? [];

  const subtotal = cartList.reduce((acc, cur) => {
    return acc + cur.quantity * cur.product.price;
  }, 0);

  return (
    <div className="grid gap-6 w-full max-w-6xl mx-auto my-4">
      {/* Desktop table header */}
      <div className="hidden sm:grid grid-cols-4 py-4 px-6 bg-bg-secondary border border-gray-200 dark:border-gray-800 rounded-lg font-medium text-gray-500 text-sm">
        <p>Product</p>
        <p className="text-center">Price</p>
        <p className="text-center">Quantity</p>
        <p className="text-right">Subtotal</p>
      </div>

      {cartList.length === 0 ? (
        <div className="text-center py-12 border border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
          <p className="text-gray-500 font-medium">Your cart is empty</p>
        </div>
      ) : (
        cartList.map((item) => (
          <div
            key={item._id}
            className="relative flex flex-col sm:grid sm:grid-cols-4 gap-4 p-4 sm:px-6 items-center bg-bg-secondary border border-gray-200 dark:border-gray-800 rounded-lg transition-shadow hover:shadow-md"
          >
            {/* Delete button - always visible on mobile, hover/touch ready */}
            <button
              onClick={() => deleteFromCart(item._id)}
              className="absolute top-2 right-2 sm:top-2 sm:left-2 text-white font-bold rounded-full w-6 h-6 bg-[#DB4444] active:bg-red-700 hover:bg-red-600 transition-colors flex items-center justify-center text-xs z-10"
              aria-label="Remove product"
            >
              ✕
            </button>

            {/* Product description */}
            <div className="flex gap-3 items-center w-full sm:w-auto">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-16 h-16 sm:w-12 sm:h-12 object-contain rounded-md bg-white p-1 flex-shrink-0"
              />
              <p className="font-medium text-text-primary text-sm sm:text-base line-clamp-2">
                {item.product.name}
              </p>
            </div>

            {/* Price */}
            <div className="flex justify-between items-center w-full sm:justify-center">
              <span className="sm:hidden text-gray-500 text-xs">Price:</span>
              <p className="text-center text-text-primary font-medium">
                ${item.product.price}
              </p>
            </div>

            {/* Quantity */}
            <div className="flex justify-between items-center w-full sm:justify-center">
              <span className="sm:hidden text-gray-500 text-xs">Quantity:</span>
              <input
                type="number"
                value={item.quantity}
                className="w-16 p-1.5 text-center bg-bg-primary border border-gray-200 dark:border-gray-700 rounded-lg focus:border-red-500 outline-none text-text-primary transition-colors text-sm"
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value >= 1 && value <= item.product.stock) {
                    updateCart({ _id: item._id, quantity: value });
                  }
                }}
                min={1}
                max={item.product.stock}
              />
            </div>

            {/* Row subtotal */}
            <div className="flex justify-between items-center w-full sm:justify-end">
              <span className="sm:hidden text-gray-500 text-xs font-semibold">
                Subtotal:
              </span>
              <p className="text-right font-semibold text-text-primary">
                ${item.quantity * item.product.price}
              </p>
            </div>
          </div>
        ))
      )}

      {/* Form actions */}
      <div className="flex flex-col sm:flex-row justify-between gap-3 mt-2">
        <ButtonCreator
          STYLE={
            "w-full sm:w-auto border border-gray-300 dark:border-gray-700 py-2.5 px-6 rounded-md font-medium text-text-primary active:bg-[#DB4444] active:text-white hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444] transition-colors text-sm text-center"
          }
          children={"Return To Shop"}
          onclick={() => navigate("/")}
        />
        <ButtonCreator
          STYLE={
            "w-full sm:w-auto border border-gray-300 dark:border-gray-700 py-2.5 px-6 rounded-md font-medium text-text-primary active:bg-[#DB4444] active:text-white hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444] transition-colors text-sm text-center"
          }
          children={"Update Cart"}
        />
      </div>

      {/* Cart summary section */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 my-8">
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:max-w-md">
          <input
            type="text"
            placeholder="Coupon Code"
            className="w-full px-4 py-2.5 rounded-md bg-bg-secondary border border-gray-300 dark:border-gray-700 text-text-primary placeholder-gray-400 outline-none focus:border-red-500 transition-colors text-sm"
          />
          <ButtonCreator
            STYLE={
              "w-full sm:w-auto sm:whitespace-nowrap px-6 py-2.5 rounded-md bg-[#DB4444] text-white font-medium active:bg-red-700 hover:bg-red-600 transition-colors text-sm text-center"
            }
            children={"Apply Coupon"}
          />
        </div>

        <div className="grid gap-4 p-6 bg-bg-secondary border border-gray-300 dark:border-gray-700 rounded-md w-full lg:w-96">
          <p className="text-lg font-bold text-text-primary">Cart Total</p>

          <Simlify
            STYLE={"flex justify-between text-text-primary text-sm"}
            name="Subtotal:"
            value={subtotal}
          />
          <hr className="border-gray-200 dark:border-gray-800" />
          <Simlify
            STYLE={"flex justify-between text-text-primary text-sm"}
            name="Shipping:"
            value={"Free"}
          />
          <hr className="border-gray-200 dark:border-gray-800" />
          <Simlify
            STYLE={"flex justify-between font-bold text-text-primary text-base"}
            name="Total:"
            value={subtotal}
          />

          <NavLink to={"/checkout"} className="w-full mt-2">
            <ButtonCreator
              STYLE={
                "bg-[#DB4444] text-white block px-5 py-3 rounded-md font-medium active:bg-red-700 hover:bg-red-600 transition-colors w-full text-center text-sm"
              }
              children={"Proceed to Checkout"}
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

function Simlify({ name, value, STYLE }) {
  return (
    <div className={STYLE}>
      <p>{name}</p>
      <p>{typeof value === "number" ? `$${value}` : value}</p>
    </div>
  );
}

export default CartForm;
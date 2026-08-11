import { useState } from "react";
import ButtonCreator from "../../common/ButtonCreator";
import {
  useGetCartsQuery,
  useUpdateCartMutation,
  useDeleteCartMutation,
} from "../../RTK/CartApi";
import { NavLink,useNavigate } from "react-router-dom";

function CartForm() {
  const  navigate=useNavigate()
  const  [index, setIndex] = useState(null);
  const [deleteFromCart] = useDeleteCartMutation();
  const [updateCart] = useUpdateCartMutation();
  const { data: cartData } = useGetCartsQuery();
  const cartList = cartData?.cart ?? [];

  const subtotal = cartList.reduce((acc, cur) => {
    return acc + cur.quantity * cur.product.price;
  }, 0);

  return (
    <div className=" grid gap-6 w-full mt-7 ">
      <div className="grid grid-cols-4 py-3 px-5 bg-bg-secondary rounded-lg font-medium text-gray-500 text-sm">
        <p>Product</p>
        <p className=" text-center">Price</p>
        <p className="text-center">Quantity</p>
        <p className="text-right">Subtotal</p>
      </div>
      {cartList.map((item, inedx) => (
        <div
          key={item._id}
          onMouseOver={() => setIndex(inedx)}
          onMouseLeave={() => setIndex(null)}
          className=" relative  grid grid-cols-4 gap-4 py-5 px-5 items-center bg-bg-secondary border border-gray-200 dark:border-gray-700 rounded-lg transition-shadow hover:shadow-md "
        >
          {index === inedx && (
            <p
              onClick={() => deleteFromCart(item._id)}
              className="absolute top-2 left-2 text-white font-bold rounded-full w-6 h-6 bg-[#DB4444] flex items-center justify-center leading-none cursor-pointer z-10 hover:bg-red-600 transition-colors"
            >
              ✕
            </p>
          )}
          <div className="flex gap-3 items-center ">
            <img
              src={item.product.image}
              alt={item.product.name}
              className="w-12 h-12 object-contain rounded-md bg-white p-1"
            />
            <p className="font-medium text-text-primary">{item.product.name}</p>
          </div>
          <p className=" text-center text-text-primary">${item.product.price}</p>
          <div className="flex justify-center">
            <input
              type="number"
              value={item.quantity}
              className="w-16 p-2 text-center bg-bg-primary border border-gray-200 dark:border-gray-700 rounded-lg  focus:border-green-400  outline-none text-text-primary transition-colors"
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
          <p className="text-right font-medium text-text-primary">${item.quantity * item.product.price}</p>
        </div>
      ))}
      <div className="flex justify-between ">
        <ButtonCreator
          STYLE={"border border-gray-200 dark:border-gray-700 py-2.5 px-5 rounded-lg font-medium text-text-primary hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444] transition-colors "}
         children={" Return To Shop"}
          onclick={()=>navigate('/')}
        />
        <ButtonCreator
          STYLE={"border border-gray-200 dark:border-gray-700 py-2.5 px-5 rounded-lg font-medium text-text-primary hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444] transition-colors"}
          children={" Update Cart"}
        />
      </div>
      <div className="flex justify-between items-start my-10">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Coupon Code"
            className="max-w-48 px-4 py-2.5 rounded-lg bg-bg-secondary border border-gray-200 dark:border-gray-700 text-text-primary placeholder-gray-400 outline-none focus:border-green-400 transition-colors"
          />

          <ButtonCreator
            STYLE={
              "max-w-48 px-5 py-2.5 rounded-lg bg-[#DB4444] text-white font-medium hover:bg-red-600 transition-colors"
            } 
            children={"  Apply Coupon"}
          />
        </div>

        <div className="grid gap-3 p-5 bg-bg-secondary border border-gray-200 dark:border-gray-700 rounded-xl w-80">
          <p className="text-xl font-semibold text-text-primary">Cart Total</p>

          <Simlify
            STYLE={"flex justify-between text-text-primary"}
            name="Subtotal:"
            value={subtotal}
          />
          <hr className="border-gray-200 dark:border-gray-700" />
          <Simlify
            STYLE={"flex justify-between text-text-primary"}
            name="Shipping:"
            value={"Free"}
          />
          <hr className="border-gray-200 dark:border-gray-700" />
          <Simlify
            STYLE={"flex justify-between font-semibold text-text-primary"}
            name="Total:"
            value={subtotal}
          />

          <NavLink to={"/checkout"}>
            <ButtonCreator
              STYLE={"bg-[#DB4444] text-white block mx-auto px-5 py-2.5 rounded-lg font-medium hover:bg-red-600 transition-colors w-full"}
              children={"  Proceed to Checkout"}
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
      <p>${value}</p>
    </div>
  );
}

export default CartForm;
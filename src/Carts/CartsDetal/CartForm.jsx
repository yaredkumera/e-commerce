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
    <div className=" grid gap-8 w-full mt-7 ">
      <div className="grid grid-cols-4 py-2 px-4 items-center shadow-md ">
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
          className=" relative  grid grid-cols-4 gap-4 py-6 px-4 items-center shadow-lg rounded "
        >
          {index === inedx && (
            <p
              onClick={() => deleteFromCart(item._id)}
              className="absolute top-2 left-2 text-white font-bold rounded-full w-6 h-6 bg-[#DB4444] flex items-center justify-center leading-none cursor-pointer z-10"
            >
              ✕
            </p>
          )}
          <div className="flex gap-3 items-center ">
            <img
              src={item.product.image}
              alt={item.product.name}
              className="w-10 h-10 object-contain"
            />
            <p>{item.product.name}</p>
          </div>
          <p className=" text-center">${item.product.price}</p>
          <div className="flex justify-center">
            <input
              type="number"
              value={item.quantity}
              className="w-16 p-2   text-center border border-gray-300 rounded focus:border-green-600 outline-none cursor-pointer"
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
          <p className="text-right ">${item.quantity * item.product.price}</p>
        </div>
      ))}
      <div className="flex justify-between ">
        <ButtonCreator
          STYLE={"border border-gray-400 dark:border-gray-600 py-2 px-3 rounded text-text-primary hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444] active:bg-red-500 transition-colors"}
         children={" Return To Shop"}
          onclick={()=>navigate('/')}
        />
        <ButtonCreator
          STYLE={"border border-gray-400 dark:border-gray-600 py-2 px-3 rounded text-text-primary hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444] active:bg-red-500 transition-colors"}
          children={" Update Cart"}
        />
      </div>
      <div className="flex justify-between items-start my-10">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Coupon Code"
            className="max-w-48 px-4 py-2 rounded border border-gray-600 dark:border-gray-500 bg-transparent text-text-primary placeholder-gray-500 dark:placeholder-gray-400"
          />

          <ButtonCreator
            STYLE={
              "max-w-48 px-4 py-2 rounded border border-gray-600 dark:border-gray-500 bg-[#DB4444] text-white hover:bg-red-600 active:bg-red-700 transition-colors"
            } 
            children={"  Apply Coupon"}
          />
        </div>

        <div className="grid gap-3 p-3 border border-gray-400 dark:border-gray-600 rounded w-80">
          <p className="text-2xl font-medium">Cart Total</p>

          <Simlify
            STYLE={"flex justify-between"}
            name="Subtotal:"
            value={subtotal}
          />
          <hr className="text-gray-500" />
          <Simlify
            STYLE={"flex justify-between"}
            name="Shipping:"
            value={"Free"}
          />
          <hr className="text-gray-500" />
          <Simlify
            STYLE={"flex justify-between"}
            name="Total:"
            value={subtotal}
          />

          <NavLink to={"/checkout"}>
            <ButtonCreator
              STYLE={"bg-[#DB4444] text-white block mx-auto px-4 py-2 rounded hover:bg-red-600 active:bg-red-700 transition-colors"}
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
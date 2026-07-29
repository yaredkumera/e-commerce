import ButtonCreator from "../../common/ButtonCreator";
function CartForm({ data }) {
  return (
    <div className=" grid gap-8 w-full mt-7">
      <div className="grid grid-cols-4 py-2 px-4 items-center shadow-md">
        <p>Product</p>
        <p className=" text-center">Price</p>
        <p className="text-center">Quantity</p>
        <p className="text-right">Subtotal</p>
      </div>
      {data.map((item, inedx) => (
        <div className="grid grid-cols-4 gap-4 py-6 px-4 items-center shadow-lg rounded">
          <div className="flex gap-3 items-center ">
            <img
              src={item.image}
              alt={item.image}
              className="w-10 h-10 object-contain"
            />
            <p>{item.name}</p>
          </div>
          <p className=" text-center">${item.price}</p>
          <div className="flex justify-center">
            <input
              type="number"
              value={item.Quantity}
              className="w-16 p-2   text-center border border-gray-300 rounded focus:border-green-600 outline-none"
            />
          </div>
          <p className="text-right ">${item.Subtotal}</p>
        </div>
      ))}
      <div className="flex justify-between ">
 
        <ButtonCreator STYLE={"border border-gray-400 py-2 px-3 rounded"}
        children={" Return To Shop"}/>
        <ButtonCreator STYLE={"border border-gray-400 py-2 px-3 rounded"}
        children={" Uppdate Cart"}/>
     
      </div>
      <div className="flex justify-between items-start my-10">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Coupon Code"
            className="max-w-48 px-4 py-2 rounded border border-gray-600"
          />
          
           <ButtonCreator STYLE={"max-w-48 px-4 py-2 rounded border bg-[#DB4444] text-white border-gray-600"}
        children={"  Apply Coupon"}/>
        </div>

        <div className="grid gap-3 p-3 border border-gray-400 rounded w-80">
          <p className="text-2xl font-medium">Cart Total</p>

          <Simlify
            STYLE={"flex justify-between"}
            name="Subtotal:"
            value={"$1282"}
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
            value={"$1282"}
          />
 
           <ButtonCreator STYLE={"bg-[#DB4444] text-white block mx-auto px-4 py-2 rounded"}
        children={"  Proceed to Checkout"}/>
        </div>
      </div>
    </div>
  );
}
function Simlify({ name, value, STYLE }) {
  return (
    <div className={STYLE}>
      <p>{name}</p>
      <p>{value}</p>
    </div>
  );
}
export default CartForm;

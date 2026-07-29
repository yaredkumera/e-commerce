import InputGenerator from "./InputGenerator"
import OrderSummary from "./OrderSummary"
function ChecOutForm() {
    let Style=`py-2 px-3 rounded-md bg-gray-200 w-full outline-none focus:border focus:border-green-400 `
  return (
    <div className="grid md:grid-cols-2 gap-12 ">
        <div className="grid gap-4 px-10">
<InputGenerator name="First Name" type={"text"} STYLE={Style} />
<InputGenerator name="Campany Name" type={"text"} STYLE={Style} />

<InputGenerator name="Street Address" type={"text"} STYLE={Style} />

<InputGenerator name="Appartment,floor,etc.(Optional)" type={"text"} STYLE={Style} />
<InputGenerator name="Town/City" type={"text"} STYLE={Style} />
<InputGenerator name="Phone Number" type={"tel"} STYLE={Style} />
<InputGenerator name={'Email Address'} type="email" STYLE={Style} />
<div className="flex gap-2">
<input type="checkbox" className="border border-1 bg-gray-300 w-5 h-5"/>
<p>save this information for faster check-out next time</p>
</div>

        </div>
<div className="px-10">
<OrderSummary/>
</div>
    </div>
  )
}

export default ChecOutForm
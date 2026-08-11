import { useState } from "react";
import InputGenerator from "../../common/InputGenerator";
import OrderSummary from "./OrderSummary";

function ChecOutForm() {
  const [form, setForm] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    townCity: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  let Style = `w-full py-2.5 px-4 rounded-lg bg-bg-secondary border border-gray-200 dark:border-gray-700 outline-none focus:border-[#DB4444] text-text-primary placeholder-gray-400 transition-colors`;

  return (
    <div className="grid md:grid-cols-2 gap-12 py-8">
      <div className="grid gap-4 px-10 max-h-[600px]">
        <InputGenerator label="First Name" name="firstName" type="text" value={form.firstName} onChange={handleChange} STYLE={Style} />
        <InputGenerator label="Company Name" name="companyName" type="text" value={form.companyName} onChange={handleChange} STYLE={Style} />
        <InputGenerator label="Street Address" name="streetAddress" type="text" value={form.streetAddress} onChange={handleChange} STYLE={Style} />
        <InputGenerator label="Apartment, floor, etc. (Optional)" name="apartment" type="text" value={form.apartment} onChange={handleChange} STYLE={Style} />
        <InputGenerator label="Town/City" name="townCity" type="text" value={form.townCity} onChange={handleChange} STYLE={Style} />
        <InputGenerator label="Phone Number" name="phoneNumber" type="tel" value={form.phoneNumber} onChange={handleChange} STYLE={Style} />
        <InputGenerator label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} STYLE={Style} />
        <label className="flex items-center gap-2.5 cursor-pointer mt-1">
          <input type="checkbox" className="w-4 h-4 accent-[#DB4444]" />
          <p className="text-sm text-gray-500">Save this information for faster check-out next time</p>
        </label>
      </div>
      <div className="px-10">
        <OrderSummary form={form} />
      </div>
    </div>
  );
}

export default ChecOutForm;
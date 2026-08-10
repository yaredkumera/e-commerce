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

  let Style = `py-2 px-3 rounded-md bg-gray-200 w-full outline-none focus:border focus:border-green-400 text-black font-semibold`;

  return (
    <div className="grid md:grid-cols-2 gap-12">
      <div className="grid gap-4 px-10">
        <InputGenerator
          label="First Name"
          name="firstName"
          type="text"
          value={form.firstName}
          onChange={handleChange}
          STYLE={Style}
        />
        <InputGenerator
          label="Company Name"
          name="companyName"
          type="text"
          value={form.companyName}
          onChange={handleChange}
          STYLE={Style}
        />
        <InputGenerator
          label="Street Address"
          name="streetAddress"
          type="text"
          value={form.streetAddress}
          onChange={handleChange}
          STYLE={Style}
        />
        <InputGenerator
          label="Apartment, floor, etc. (Optional)"
          name="apartment"
          type="text"
          value={form.apartment}
          onChange={handleChange}
          STYLE={Style}
        />
        <InputGenerator
          label="Town/City"
          name="townCity"
          type="text"
          value={form.townCity}
          onChange={handleChange}
          STYLE={Style}
        />
        <InputGenerator
          label="Phone Number"
          name="phoneNumber"
          type="tel"
          value={form.phoneNumber}
          onChange={handleChange}
          STYLE={Style}
        />
        <InputGenerator
          label="Email Address"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          STYLE={Style}
        />
        <div className="flex gap-2">
          <input
            type="checkbox"
            className="border border-1 bg-gray-300 w-5 h-5"
          />
          <p>Save this information for faster check-out next time</p>
        </div>
      </div>
      <div className="px-10">
        <OrderSummary form={form} />
      </div>
    </div>
  );
}

export default ChecOutForm;

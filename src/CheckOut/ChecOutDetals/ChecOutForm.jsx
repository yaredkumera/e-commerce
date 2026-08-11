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

  const inputStyle = `w-full py-2.5 px-4 rounded-lg bg-bg-primary border border-gray-200 dark:border-gray-800 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-text-primary placeholder-gray-400 transition-colors text-sm`;

  return (
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 py-4">
      {/* Billing Form Fields */}
      <div className="lg:col-span-7 grid gap-4">
        <InputGenerator
          label="First Name *"
          name="firstName"
          type="text"
          value={form.firstName}
          onChange={handleChange}
          STYLE={inputStyle}
        />
        <InputGenerator
          label="Company Name"
          name="companyName"
          type="text"
          value={form.companyName}
          onChange={handleChange}
          STYLE={inputStyle}
        />
        <InputGenerator
          label="Street Address *"
          name="streetAddress"
          type="text"
          value={form.streetAddress}
          onChange={handleChange}
          STYLE={inputStyle}
        />
        <InputGenerator
          label="Apartment, floor, etc. (Optional)"
          name="apartment"
          type="text"
          value={form.apartment}
          onChange={handleChange}
          STYLE={inputStyle}
        />
        <InputGenerator
          label="Town/City *"
          name="townCity"
          type="text"
          value={form.townCity}
          onChange={handleChange}
          STYLE={inputStyle}
        />
        <InputGenerator
          label="Phone Number *"
          name="phoneNumber"
          type="tel"
          value={form.phoneNumber}
          onChange={handleChange}
          STYLE={inputStyle}
        />
        <InputGenerator
          label="Email Address *"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          STYLE={inputStyle}
        />

        <label className="flex items-start sm:items-center gap-2.5 cursor-pointer mt-2">
          <input
            type="checkbox"
            className="w-4 h-4 mt-0.5 sm:mt-0 accent-emerald-600 rounded"
          />
          <span className="text-xs sm:text-sm text-gray-500">
            Save this information for faster check-out next time
          </span>
        </label>
      </div>

      {/* Order Summary Column */}
      <div className="lg:col-span-5">
        <OrderSummary form={form} />
      </div>
    </div>
  );
}

export default ChecOutForm;
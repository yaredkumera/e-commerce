import { useState } from "react";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { useSendMessageMutation } from "../RTK/contactApi";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", msg: "" });

  const [sendMessage, { isLoading }] = useSendMessageMutation();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", msg: "" });

    try {
      await sendMessage(formData).unwrap();
      setStatus({ type: "success", msg: "Message sent successfully!" });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus({
        type: "error",
        msg: err?.data?.message || "Something went wrong. Please try again.",
      });
    }
  };

  const inputStyle =
    "w-full bg-bg-secondary border border-gray-200 dark:border-gray-800 focus:border-[#DB4444] outline-none px-4 py-3 rounded-lg text-sm sm:text-base text-text-primary placeholder-gray-400 transition-colors";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-6 lg:gap-8 py-6 sm:py-10 mb-10 w-full">
      <div className="bg-bg-secondary border border-gray-200 dark:border-gray-800 py-6 px-6 sm:px-8 rounded-xl shadow-sm h-fit flex flex-col gap-3">
        <div className="flex gap-4 mb-2 items-center">
          <div className="rounded-full bg-[#DB4444] text-white text-lg p-3 shrink-0">
            <FiPhoneCall />
          </div>
          <p className="text-lg sm:text-xl font-bold text-text-primary">Call To Us</p>
        </div>
        <p className="text-xs sm:text-sm text-gray-500">We are available 24/7, 7 days a week.</p>
        <p className="text-xs sm:text-sm font-medium text-text-primary mb-2">Phone: +8801611112222</p>

        <hr className="border-gray-200 dark:border-gray-800 my-2" />

        <div className="flex gap-4 mb-2 items-center pt-2">
          <div className="rounded-full bg-[#DB4444] text-white text-lg p-3 shrink-0">
            <FiMail />
          </div>
          <p className="text-lg sm:text-xl font-bold text-text-primary">Write To Us</p>
        </div>
        <p className="text-xs sm:text-sm text-gray-500">Fill out our form and we will contact you within 24 hours.</p>
        <p className="text-xs sm:text-sm font-medium text-text-primary">Emails: customer@exclusive.com</p>
        <p className="text-xs sm:text-sm font-medium text-text-primary">Emails: support@exclusive.com</p>
      </div>

      <div className="bg-bg-secondary border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm py-6 px-6 sm:px-8 flex flex-col justify-between">
        <form onSubmit={handleSubmit} className="flex flex-col h-full justify-between gap-6">
          <div className="space-y-4">
            {status.msg && (
              <div
                className={`p-3 rounded-lg text-sm font-medium ${
                  status.type === "success"
                    ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
                    : "bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800"
                }`}
              >
                {status.msg}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name *"
                className={inputStyle}
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email *"
                className={inputStyle}
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone *"
                className={inputStyle}
                required
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`${inputStyle} min-h-[160px] resize-none`}
              placeholder="Your Message *"
              rows={5}
              required
            ></textarea>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full sm:w-auto bg-[#DB4444] text-white py-3 px-8 rounded-lg font-semibold text-sm hover:bg-red-600 transition-colors shadow-sm cursor-pointer disabled:opacity-50"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
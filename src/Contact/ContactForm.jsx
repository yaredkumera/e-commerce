import { FiPhoneCall, FiMail } from "react-icons/fi";

function ContactForm() {
  const inputStyle =
    "w-full bg-bg-secondary border border-gray-200 dark:border-gray-800 focus:border-[#DB4444] outline-none px-4 py-3 rounded-lg text-sm sm:text-base text-text-primary placeholder-gray-400 transition-colors";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-6 lg:gap-8 py-6 sm:py-10 mb-10 w-full">
      {/* Contact Info Sidebar */}
      <div className="bg-bg-secondary border border-gray-200 dark:border-gray-800 py-6 px-6 sm:px-8 rounded-xl shadow-sm h-fit flex flex-col gap-3">
        {/* Call Us Section */}
        <div className="flex gap-4 mb-2 items-center">
          <div className="rounded-full bg-[#DB4444] text-white text-lg p-3 shrink-0">
            <FiPhoneCall />
          </div>
          <p className="text-lg sm:text-xl font-bold text-text-primary">Call To Us</p>
        </div>
        <p className="text-xs sm:text-sm text-gray-500">We are available 24/7, 7 days a week.</p>
        <p className="text-xs sm:text-sm font-medium text-text-primary mb-2">Phone: +8801611112222</p>

        <hr className="border-gray-200 dark:border-gray-800 my-2" />

        {/* Write To Us Section */}
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

      {/* Main Form Section */}
      <div className="bg-bg-secondary border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm py-6 px-6 sm:px-8 flex flex-col justify-between">
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col h-full justify-between gap-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <input type="text" placeholder="Your Name *" className={inputStyle} required />
              <input type="email" placeholder="Your Email *" className={inputStyle} required />
              <input type="tel" placeholder="Your Phone *" className={inputStyle} required />
            </div>

            <textarea
              className={`${inputStyle} min-h-[160px] resize-none`}
              placeholder="Your Message"
              rows={5}
              required
            ></textarea>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#DB4444] text-white py-3 px-8 rounded-lg font-semibold text-sm hover:bg-red-600 transition-colors shadow-sm cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
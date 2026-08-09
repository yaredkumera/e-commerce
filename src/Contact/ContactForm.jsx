import { FiPhoneCall, FiMail } from "react-icons/fi";

function ContactForm() {
  return (
    <div className="grid md:grid-cols-[1fr_2fr] gap-8 px-16 py-10 mb-18">
      <div className="grid py-5 px-6 rounded-md shadow-md h-fit gap-3">
        <div className="flex gap-4 mb-3 items-center">
          <p className="rounded-full bg-red-700 text-white text-xl p-3">
            <FiPhoneCall />
          </p>
          <p className="text-xl font-bold">Call To Us</p>
        </div>
        <p>We are available 24/7, 7 days a week.</p>
        <p className="mb-4">Phone: +8801611112222</p>
        <hr className="mb-4" />

        <div className="flex gap-4 mb-3 items-center">
          <p className="rounded-full bg-red-700 text-white text-xl p-3">
            <FiMail />
          </p>
          <p className="text-xl font-bold">Write To Us</p>
        </div>
        <p>Fill out our form and we will contact you within 24 hours.</p>
        <p>Emails: customer@exclusive.com</p>
        <p>Emails: support@exclusive.com</p>
      </div>

      <div className="rounded-md shadow-md py-5 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-black font-semibold">
          <input
            type="text"
            placeholder="Your Name*"
            className="bg-[#f5f5f5] placeholder-gray-400 px-4 py-3 rounded outline-none focus:border border-green-600  "
          />
          <input
            type="email"
            placeholder="Your Email*"
            className="bg-[#f5f5f5] placeholder-gray-400 px-4 py-3 rounded outline-none focus:border border-green-600 "
          />
          <input
            type="tel"
            placeholder="Your Phone*"
            className="bg-[#f5f5f5] placeholder-gray-400 px-4 py-3 rounded outline-none focus:border border-green-600 "
          />
        </div>
        <textarea
          className="bg-[#f5f5f5] w-full min-h-[150px] p-4 mt-4 rounded border border-transparent outline-none focus:border-green-600 placeholder-gray-400 text-black font-semibold"
          placeholder="Your Message"
        ></textarea>

        <div className="flex justify-end mt-18">
          <button className="bg-red-700 text-white py-3 px-8 rounded">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;

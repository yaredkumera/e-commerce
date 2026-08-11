import InputGenerator from "../../common/InputGenerator";
import ButtonCreator from "../../common/ButtonCreator";
import AccountDropdown from "./AccountDropdown";

function EditProfile() {
  const inputStyle = `w-full rounded-lg bg-bg-primary border border-gray-200 dark:border-gray-800 outline-none px-4 py-2.5 placeholder-gray-400 text-text-primary text-sm transition-colors focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500`;

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-4 mb-20">
      {/* Sidebar Navigation */}
      <div className="md:col-span-4 lg:col-span-3">
        <AccountDropdown />
      </div>

      {/* Profile Form Card */}
      <div className="md:col-span-8 lg:col-span-9 grid gap-6 bg-bg-secondary border border-gray-200 dark:border-gray-800 rounded-xl p-4 sm:p-8 shadow-sm">
        <h2 className="text-[#DB4444] text-xl sm:text-2xl font-semibold">Edit Your Profile</h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 mb-1.5 block">First Name</label>
            <InputGenerator placeholder="Md" STYLE={inputStyle} />
          </div>
          <div>
            <label className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 mb-1.5 block">Last Name</label>
            <InputGenerator placeholder="Rimel" STYLE={inputStyle} />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 mb-1.5 block">Email</label>
            <InputGenerator placeholder="tirtu@gmail.com" STYLE={inputStyle} type="email" />
          </div>
          <div>
            <label className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 mb-1.5 block">Address</label>
            <InputGenerator placeholder="Texas, USA" STYLE={inputStyle} />
          </div>
        </div>

        <hr className="border-gray-200 dark:border-gray-800 my-1" />

        <div className="grid gap-4">
          <p className="font-medium text-sm sm:text-base text-text-primary">Password Changes</p>
          <div>
            <label className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 mb-1.5 block">Current Password</label>
            <InputGenerator placeholder="••••••••" STYLE={inputStyle} type="password" />
          </div>
          <div>
            <label className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 mb-1.5 block">New Password</label>
            <InputGenerator placeholder="••••••••" STYLE={inputStyle} type="password" />
          </div>
          <div>
            <label className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 mb-1.5 block">Confirm New Password</label>
            <InputGenerator placeholder="••••••••" STYLE={inputStyle} type="password" />
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-2">
          <ButtonCreator
            STYLE="px-5 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            children="Cancel"
          />
          <ButtonCreator
            STYLE="px-5 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-medium text-white bg-[#DB4444] hover:bg-red-600 active:bg-red-700 transition-colors"
            children="Save Changes"
          />
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
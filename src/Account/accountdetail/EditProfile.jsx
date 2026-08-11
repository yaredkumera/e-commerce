import InputGenerator from "../../common/InputGenerator";
import ButtonCreator from "../../common/ButtonCreator";
import AccountDropdown from "./AccountDropdown";

function EditProfile() {
  let Style = `w-full rounded-lg bg-bg-secondary border border-gray-200 dark:border-gray-700 outline-none  px-4 py-2.5 placeholder-gray-400 text-text-primary transition-colors`;

  return (
    <div className="grid grid-cols-[1fr_2fr] gap-6 my-10 mb-32">
      <AccountDropdown />
      <div className="grid gap-5 bg-bg-secondary border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-sm">
        <p className="text-[#DB4444] text-2xl font-semibold">Edit Your Profile</p>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-gray-500 mb-1.5 block">First Name</label>
            <InputGenerator placeholder={`Md`} STYLE={Style} />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-500 mb-1.5 block">Last Name</label>
            <InputGenerator placeholder={`Rimel`} STYLE={Style} />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-gray-500 mb-1.5 block">Email</label>
            <InputGenerator placeholder={`tirtu@gmail.com`} STYLE={Style} type="email" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-500 mb-1.5 block">Address</label>
            <InputGenerator placeholder={`Texas, USA`} STYLE={Style} />
          </div>
        </div>

        <hr className="border-gray-200 dark:border-gray-700 my-2" />

        <div className="grid gap-4">
          <p className="font-medium text-text-primary">Password Changes</p>
          <div>
            <label className="text-sm font-medium text-gray-500 mb-1.5 block">Current Password</label>
            <InputGenerator placeholder={`••••••••`} STYLE={Style} type={"password"} />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-500 mb-1.5 block">New Password</label>
            <InputGenerator placeholder={`••••••••`} STYLE={Style} type={"password"} />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-500 mb-1.5 block">Confirm New Password</label>
            <InputGenerator placeholder={`••••••••`} STYLE={Style} type={"password"} />
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-2">
          <ButtonCreator
            STYLE={"px-6 py-2.5 rounded-lg font-medium text-gray-500 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"}
            children={"Cancel"}
          />
          <ButtonCreator
            STYLE={"px-6 py-2.5 rounded-lg font-medium text-white bg-[#DB4444] hover:bg-red-600 transition-colors"}
            children={"Save Changes"}
          />
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
import InputGenerator from "../../CheckOut/ChecOutDetals/InputGenerator";
import ButtonCreator from "../../common/ButtonCreator";
import AccountDropdown from "./AccountDropdown";
function EditProfile() {

    let Style=`rounded bg-[#F5F5F5] outline-none focus:border  focus:border-blue-600 px-3 py-2 placeholder-gray-400  `
  return ( 
    <div className="grid grid-cols-[1fr_2fr] gap-2 my-10 mb-32">
<AccountDropdown/>
      <div className="grid gap-4 shadow-md rounded p-6">
      <p className="text-red-500 text-2xl text-left">Edit Your Profile</p>

      <div className="grid gap-4 md:grid-cols-2">
        <InputGenerator placeholder={`Md`} name={`First Name`} STYLE={Style} />
        <InputGenerator placeholder={`Rimel`} name={`Last Name`} STYLE={Style} />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <InputGenerator placeholder={`tirtu@gmail.com`} name={`Email`} STYLE={Style} type="email" />
        <InputGenerator placeholder={`texsas,USA`} name={`Address`} STYLE={Style} />
      </div>

      <div className="grid gap-4">
        <p className="mt-2">Password Changes</p>
        <InputGenerator placeholder={`Current Password`} name={``} STYLE={Style} type={"password"} />
        <InputGenerator placeholder={`New Password`} name={``} STYLE={Style} type={"password"} />
        <InputGenerator placeholder={`Confirm New Password`} name={``} STYLE={Style} type={"password"} />
      </div>

      <div className="flex justify-end gap-4">
        <ButtonCreator STYLE={"p-2 rounded"} children={"Cancel"} />
        <ButtonCreator STYLE={"p-2 px-6 rounded text-white bg-[#DB4444]"} children={"Save Changes"} />
      </div>
    </div>
     </div>
  );
}

export default EditProfile;

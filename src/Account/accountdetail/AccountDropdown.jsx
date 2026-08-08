import { useState } from "react";
function AccountDropdown() {
  let [isOpen, setisOpen] = useState(0);
  return (
    <div className="flex flex-col gap-2 px-6 ">
      <div className="flex flex-col gap-2 ">
        <p
          onClick={() => setisOpen(1)}
          className=" font-medium text-text-primary cursor-pointer"
        >
          Manage My Account{" "}
        </p>
        {isOpen === 1 && (
          <div className="flex flex-col gap-2 pl-4 cursor-pointer">
            <p className="text-red-500">My Profile</p>
            <p className="text-text-primary">Address Book</p>
            <p className="text-text-primary">My Payment Options</p>
          </div>
        )}
      </div>
      <div className="grid  gap-2">
        <p
          onClick={() => setisOpen(2)}
          className="font-medium text-text-primary cursor-pointer"
        >
          {" "}
          My Orders
        </p>
        {isOpen === 2 && (
          <div className="flex flex-col gap-2 pl-4 cursor-pointer">
            <p className="text-text-primary">My Returns</p>
            <p className="text-text-primary">My Canceltions</p>
          </div>
        )}
      </div>
      <div className="grid  gap-2 cursor-pointer font-medium text-text-primary">
        <p onClick={() => setisOpen(3)}> My WishLists</p>
      </div>
    </div>
  );
}

export default AccountDropdown;

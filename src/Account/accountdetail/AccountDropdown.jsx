import { useState } from "react";
import { FiUser, FiPackage, FiHeart, FiChevronDown } from "react-icons/fi";

function AccountDropdown() {
  const [isOpen, setIsOpen] = useState(1);

  const sections = [
    {
      id: 1,
      label: "Manage My Account",
      icon: <FiUser size={16} />,
      items: ["My Profile", "Address Book", "My Payment Options"],
    },
    {
      id: 2,
      label: "My Orders",
      icon: <FiPackage size={16} />,
      items: ["My Returns", "My Cancellations"],
    },
    {
      id: 3,
      label: "My WishLists",
      icon: <FiHeart size={16} />,
      items: [],
    },
  ];

  return (
    <div className="flex flex-col gap-1 px-2">
      {sections.map((section) => (
        <div key={section.id}>
          <button
            onClick={() => setIsOpen(isOpen === section.id ? 0 : section.id)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              isOpen === section.id
                ? "text-[#DB4444]"
                : "text-text-primary hover:bg-black/5 dark:hover:bg-white/5"
            }`}
          >
            <span className="text-gray-400">{section.icon}</span>
            <span className="flex-1 text-left">{section.label}</span>
            {section.items.length > 0 && (
              <FiChevronDown
                size={14}
                className={`text-gray-400 transition-transform ${isOpen === section.id ? "rotate-180" : ""}`}
              />
            )}
          </button>

          {isOpen === section.id && section.items.length > 0 && (
            <div className="flex flex-col gap-1 pl-11 py-1">
              {section.items.map((item, i) => (
                <p
                  key={i}
                  className={`text-sm py-1.5 cursor-pointer transition-colors ${
                    i === 0 && section.id === 1
                      ? "text-[#DB4444] font-medium"
                      : "text-gray-500 hover:text-text-primary"
                  }`}
                >
                  {item}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default AccountDropdown;
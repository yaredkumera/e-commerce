import SectionHeader from "../common/SectionHeader";
import BrowserCard from "./BrowserCard";

function BrowseCategory() {
  const items = [
    { name: "Phones", image: "/BrowseBY1.png" },
    { name: "Computers", image: "/BrowseBY2.png" },
    { name: "SmartWatch", image: "/BrowseBY3.png" },
    { name: "Camera", image: "/BrowseBY4.png" },
    { name: "HeadPhone", image: "/BrowseBY5.png" },
    { name: "Gaming", image: "/BrowseBY6.png" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 my-4">
      <SectionHeader label="Categories" title="Browse By Category" hide={true} />
      <BrowserCard data={items} />
    </div>
  );
}

export default BrowseCategory;
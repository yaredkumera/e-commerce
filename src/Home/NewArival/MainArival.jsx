import NewArival from "./NewArival";
import SectionHeader from "../common/SectionHeader";
import LastPart from "../../About/OurStory/LastPart";

function MainArival() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 my-4">
      <SectionHeader title="New Arrival" label="Featured" hide={true} />
      <NewArival />
      <LastPart />
    </div>
  );
}

export default MainArival;
import LinkPage from "../common/LinkPage";
import OurStory from "./OurStory/ourStory";
import NavLinks from "../common/NavLinks";
import StateCard from "./OurStory/StateCard";
import TeamPhoto from "./OurStory/TeamPhoto";
import LastPart from "./OurStory/LastPart";

function BodyAbout() {
  return (
    <div className="bg-bg-secondary text-text-primary border border-transparent w-full overflow-x-hidden">
      <NavLinks />
      <div className="px-4 sm:px-8 md:px-16">
        <LinkPage
          items={[
            { label: "Home", path: "/" },
            { label: "About", path: "/about" },
          ]}
        />
      </div>
      <OurStory />
      <StateCard />
      <TeamPhoto />
      <LastPart />
    </div>
  );
}
export default BodyAbout;
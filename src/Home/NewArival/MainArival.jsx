import NewArival from "./NewArival";
import SectionHeader from "../common/SectionHeader";
import LastPart from "../../About/OurStory/LastPart";

function MainArival() {
  return (
    <div >
        <SectionHeader title="New Arival" label="Featured" hide={true}/>
        <NewArival/>
        <LastPart/>
    </div>
  )
}

export default MainArival
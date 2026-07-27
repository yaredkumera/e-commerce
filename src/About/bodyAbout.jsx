 import LinkPage from "../common/LinkPage"
 import OurStory from "./OurStory/ourStory"
 import NavLinks from "../common/NavLinks/NavLinks"
import StateCard from "./OurStory/StateCard"
import TeamPhoto from "./OurStory/TeamPhoto"
import LastPart from "./OurStory/LastPart"
function BodyAbout() {
  return (
    <div> 
<NavLinks/>
 <LinkPage items={[{label:'Home',path:'/'},{label:'About',path:'/about'} ]}/>
      <OurStory/>
      <StateCard/>
      <TeamPhoto/>
      <LastPart/>
    </div>
  )
}
export default BodyAbout
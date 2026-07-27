import HomeForm from "./Dropdown/HomeForm";
import Flash from "./FlashSales/Flash";
import BrowseCategory from "./BrowserCategory/BrowseCategory";
import BestSeling from "./BestSelingProduct/BestSeling";
import MusicBanner from "./MusicBanner/MusicBanner";
import NavLinks from "../common/NavLinks";
import BaseExplore from "./ExploreProducts/BaseExplore";
import MainArival from "./NewArival/MainArival";
function MainHome() {
  return (
    <div className="mx-18">
      <NavLinks hide={1}/> 
        <HomeForm/>
        <Flash/>
        <BrowseCategory/>
        <BestSeling/>
        <MusicBanner/>
        <BaseExplore/>
        <MainArival/>
    </div>
  )
}
export default MainHome
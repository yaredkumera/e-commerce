import HomeForm from "./HomeForm";
import Flash from "./FlashSales/Flash";
import BrowseCategory from "./BrowseCategory";
function MainHome() {
  return (
    <div>
        <HomeForm/>
        <Flash/>
        <BrowseCategory/>
    </div>
  )
}
export default MainHome
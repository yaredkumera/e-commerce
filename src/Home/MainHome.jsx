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
    <div className="min-h-screen bg-bg-secondary text-text-primary">
      <NavLinks />
      <main className="w-full space-y-6 sm:space-y-10 pb-12">
        <HomeForm />
        <Flash />
        <BrowseCategory />
        <BestSeling />
        <MusicBanner />
        <BaseExplore />
        <MainArival />
      </main>
    </div>
  );
}

export default MainHome;
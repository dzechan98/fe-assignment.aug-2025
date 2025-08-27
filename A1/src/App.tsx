import BestRecommendPlace from "./components/best-recommend-place";
import Header from "./components/header";
import HeroSection from "./components/hero-section";
import PlanTrip from "./components/plan-trip";
import PopularDestinations from "./components/popular-destinations";
import Rate from "./components/rate";
import RecentGallery from "./components/recent-gallery";
import TourCategories from "./components/tour-categories";

function App() {
  return (
    <div className="text-dark font-inter font-normal">
      <Header />
      <main>
        <HeroSection />
        <TourCategories />
        <PopularDestinations />
        <PlanTrip />
        <BestRecommendPlace />
        <RecentGallery />
        <Rate />
      </main>
    </div>
  );
}

export default App;

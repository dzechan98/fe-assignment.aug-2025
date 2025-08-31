import AboutUs from "./components/about-us";
import BestRecommendPlace from "./components/best-recommend-place";
import Footer from "./components/footer";
import Header from "./components/header";
import HeroSection from "./components/hero-section";
import PlanTrip from "./components/plan-trip";
import PopularDestinations from "./components/popular-destinations";
import Rate from "./components/rate";
import RecentGallery from "./components/recent-gallery";
import Testimonial from "./components/testimonial";
import TourCategories from "./components/tour-categories";
import TourGuide from "./components/tour-guide";

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
        <TourGuide />
        <Testimonial />
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;

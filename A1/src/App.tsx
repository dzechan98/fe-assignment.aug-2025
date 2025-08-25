import Header from "./components/header";
import HeroSection from "./components/hero-section";
import PopularDestinations from "./components/popular-destinations";
import TourCategories from "./components/tour-categories";

function App() {
  return (
    <div className="text-dark font-inter font-normal">
      <Header />
      <main>
        <HeroSection />
        <TourCategories />
        <PopularDestinations />
      </main>
    </div>
  );
}

export default App;

import Categories from "../components/Categories";
import Cities from "../components/Cities";
import DownloadApplication from "../components/DownloadApplication";
import FoodCategorySection from "../components/FoodCategorySection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import SellersSection from "../components/SellersSection";

export default function Home() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Hero />
        <Categories />
        <FoodCategorySection />
        <DownloadApplication />
        <SellersSection />
      </div>
      <Cities />
      <Footer />
    </>
  );
}

import Categories from "../components/Categories";
import DownloadApplication from "../components/DownloadApplication";
import FoodCategorySection from "../components/FoodCategorySection";
import Hero from "../components/Hero";
import SellersSection from "../components/SellersSection";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Hero />
      <Categories />
      <FoodCategorySection />
      <DownloadApplication />
      <SellersSection />
    </div>
  );
}

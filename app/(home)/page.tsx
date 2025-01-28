import Categories from "../components/Categories";
import FoodCategorySection from "../components/FoodCategorySection";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Hero />
      <Categories />
      <FoodCategorySection />
    </div>
  );
}

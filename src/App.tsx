import { Routes, Route } from "react-router-dom";
import { Header } from "./widgets/Header/Header";
import { FeaturedCars } from "./widgets/FeaturedCars/FeaturedCars";
import { Hero } from "./widgets/Hero/Hero";
import { Features } from "./widgets/Features/Features";
import { Footer } from "./widgets/Footer/Footer";
import { CarDetails } from "./pages/CarDetails";
import { Catalog } from "./pages/Catalog"; // 1. Импортируй компонент
import { ScrollToTop } from "./components/ScrollToTop";
import { CustomOrder } from "./pages/CustomOrder";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0F0F0F] text-white antialiased overflow-x-hidden">
      <ScrollToTop />
      <Header />

      <Routes>
        {/* Главная страница */}
        <Route path="/" element={
          <>
            <Hero />
            <FeaturedCars />
            <Features />
          </>
        } />

        {/* 2. Добавь этот маршрут */}
        <Route path="/catalog" element={<Catalog />} />

        {/* Страница деталей машины */}
        <Route path="/cars/:id" element={<CarDetails />} />

        <Route path="/custom" element={<CustomOrder />} />
      </Routes>
      
      <Footer />
    </div>
  );
}
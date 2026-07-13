import { Routes, Route } from "react-router-dom";
import { Header } from "./widgets/Header/Header";
import { FeaturedCars } from "./widgets/FeaturedCars/FeaturedCars";
import { Hero } from "./widgets/Hero/Hero";
import { Features } from "./widgets/Features/Features";
import { Footer } from "./widgets/Footer/Footer";
import { CarDetails } from "./pages/CarDetails";
import { Catalog } from "./pages/Catalog";
import { ScrollToTop } from "./components/ScrollToTop";
import { CustomOrder } from "./pages/CustomOrder";
import { Service } from "./pages/Service"; // 1. Импортируй компонент Service

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

        <Route path="/catalog" element={<Catalog />} />
        
        {/* 2. Добавь маршрут для страницы Сервис */}
        <Route path="/service" element={<Service />} />

        {/* Страница деталей машины */}
        <Route path="/cars/:id" element={<CarDetails />} />

        <Route path="/custom" element={<CustomOrder />} />
      </Routes>
      
      <Footer />
    </div>
  );
}
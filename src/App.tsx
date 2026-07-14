import { Routes, Route, useLocation } from "react-router-dom"; // Добавили useLocation
import { Header } from "./widgets/Header/Header";
import { FeaturedCars } from "./widgets/FeaturedCars/FeaturedCars";
import { Hero } from "./widgets/Hero/Hero";
import { Features } from "./widgets/Features/Features";
import { Footer } from "./widgets/Footer/Footer";
import { CarDetails } from "./pages/CarDetails";
import { Catalog } from "./pages/Catalog";
import { ScrollToTop } from "./components/ScrollToTop";
import { CustomOrder } from "./pages/CustomOrder";
import { Service } from "./pages/Service";
import { About } from "./pages/About";

export default function App() {
  const location = useLocation(); // Отслеживаем текущий путь

  return (
    <div className="min-h-screen w-full bg-[#0F0F0F] text-white antialiased overflow-x-hidden">
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={
          <>
            {/* Ключ location.pathname заставляет Hero пересоздаться при возврате */}
            <Hero key={location.pathname} /> 
            <FeaturedCars />
            <Features />
          </>
        } />

        <Route path="/catalog" element={<Catalog />} />
        <Route path="/service" element={<Service />} />
        <Route path="/cars/:id" element={<CarDetails />} />
        <Route path="/custom" element={<CustomOrder />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
      <Footer />
    </div>
  );
}
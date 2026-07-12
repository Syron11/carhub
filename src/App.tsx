import { Routes, Route } from "react-router-dom";
import { Header } from "./widgets/Header/Header";
import { FeaturedCars } from "./widgets/FeaturedCars/FeaturedCars";
import { Hero } from "./widgets/Hero/Hero";
import { Features } from "./widgets/Features/Features";
import { Footer } from "./widgets/Footer/Footer";
import { CarDetails } from "./pages/CarDetails"; // Убедись, что этот компонент экспортируется

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0F0F0F] text-white antialiased overflow-x-hidden">
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

        {/* Страница деталей машины */}
        <Route path="/cars/:id" element={<CarDetails />} />
      </Routes>
      
      <Footer />
    </div>
  );
}
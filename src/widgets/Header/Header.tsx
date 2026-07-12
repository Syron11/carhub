import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, User, Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn] = useState(false);

  const navigation = [
    { name: "Каталог", to: "/catalog" },
    { name: "Индивидуальный заказ", to: "/custom" },
    { name: "Сервис", to: "/service" },
    { name: "О компании", to: "/about" },
  ];

  return (
    <>
      <header className="sticky top-0 w-full h-20 bg-[#0F0F0F]/70 backdrop-blur-md border-b border-neutral-900/80 z-40">
        <div className="container mx-auto h-full px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="text-xl font-medium tracking-[0.2em] text-white uppercase hover:opacity-80 transition-opacity">
            CAR<span className="text-neutral-500 font-light">HUB</span>
          </Link>

          {/* Десктопная навигация */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navigation.map((item) => (
              <Link key={item.name} to={item.to} className="text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors">
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/favorites" className="p-2 text-neutral-400 hover:text-white transition-colors"><Heart className="w-5 h-5" /></Link>
            <Link to={isLoggedIn ? "/profile" : "/login"} className="flex items-center space-x-2 p-2 text-neutral-400 hover:text-white transition-colors">
              <User className="w-5 h-5" />
              <span className="text-xs font-medium uppercase tracking-widest hidden xl:inline">{isLoggedIn ? "Профиль" : "Войти"}</span>
            </Link>
            {!isLoggedIn && (
              <Link 
                to="/register" 
                className="px-5 py-2.5 border border-neutral-800 text-xs font-medium uppercase text-white transition-all duration-300 hover:!bg-white hover:!text-black"
              >
                Регистрация
              </Link>
            )}
          </div>

          {/* Мобильные элементы: иконка избранного + бургер */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/favorites" className="text-neutral-400"><Heart className="w-5 h-5" /></Link>
            <button onClick={() => setIsMenuOpen(true)} className="text-neutral-400 p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Мобильное меню (вынесено за пределы header) */}
      <div className={`fixed inset-0 z-[100] bg-[#0F0F0F] flex flex-col items-center justify-center space-y-8 transition-opacity duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 text-neutral-400 p-2">
          <X className="w-8 h-8" />
        </button>

        <nav className="flex flex-col items-center space-y-8 w-full px-6">
          {navigation.map((item) => (
            <Link key={item.name} to={item.to} onClick={() => setIsMenuOpen(false)} className="text-xl uppercase tracking-widest text-neutral-300 hover:text-white">
              {item.name}
            </Link>
          ))}
          
          <div className="w-12 h-[1px] bg-neutral-800" />

          <Link to={isLoggedIn ? "/profile" : "/login"} onClick={() => setIsMenuOpen(false)} className="text-lg text-neutral-300 hover:text-white uppercase">
            {isLoggedIn ? "Личный кабинет" : "Войти"}
          </Link>

          {!isLoggedIn && (
            <Link to="/register" onClick={() => setIsMenuOpen(false)} className="px-8 py-3 border border-white text-white text-sm uppercase tracking-widest rounded-sm hover:bg-white hover:text-black transition-all">
              Регистрация
            </Link>
          )}
        </nav>
      </div>
    </>
  );
}
import type { JSX } from "react";
import { useState } from "react";
import { Heart, User, Menu, X } from "lucide-react";

export function Header(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Читаем состояние избранного один раз при инициализации
  const [favoritesCount] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("favorites");
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed) ? parsed.length : 0;
    }
    return 0;
  });

  // Читаем состояние авторизации один раз при инициализации
  const [isLoggedIn] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("isLoggedIn") === "true";
    }
    return false;
  });

  const navigation = [
    { name: "Каталог", href: "#catalog" },
    { name: "Индивидуальный заказ", href: "#custom" },
    { name: "Сервис", href: "#service" },
    { name: "О компании", href: "#about" },
  ];

  return (
    <header className="sticky top-0 w-full h-20 bg-[#0F0F0F]/70 backdrop-blur-md border-b border-neutral-900/80 z-50 transition-all duration-300">
      <div className="container mx-auto h-full px-6 md:px-12 flex items-center justify-between">
        
        <a href="/" className="text-xl font-medium tracking-[0.2em] text-white uppercase hover:opacity-80 transition-opacity">
          CAR<span className="text-neutral-500 font-light">HUB</span>
        </a>

        <nav className="hidden lg:flex items-center space-x-10">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-6">
          <a href="#favorites" className="relative p-2 text-neutral-400 hover:text-white transition-colors group" title="Избранное">
            <Heart className="w-5 h-5 stroke-[1.5]" />
            {favoritesCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-blue-600 text-[9px] font-medium text-white rounded-full flex items-center justify-center animate-pulse">
                {favoritesCount}
              </span>
            )}
          </a>

          <a 
            href={isLoggedIn ? "/profile" : "#login"} 
            className="flex items-center space-x-2 p-2 text-neutral-400 hover:text-white transition-colors group" 
          >
            <User className="w-5 h-5 stroke-[1.5]" />
            <span className="text-xs font-medium uppercase tracking-widest hidden xl:inline">
              {isLoggedIn ? "Профиль" : "Войти"}
            </span>
          </a>

          {!isLoggedIn && (
            <>
              <div className="h-4 w-[1px] bg-neutral-800" />
              <a 
                href="#register" 
                className="px-5 py-2.5 border border-neutral-800 text-xs font-medium uppercase tracking-widest !text-white rounded-sm hover:!bg-white hover:!text-black transition-all duration-300"
              >
                Регистрация
              </a>
            </>
          )}
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <a href="#favorites" className="relative p-2 text-neutral-400">
            <Heart className="w-5 h-5 stroke-[1.5]" />
            {favoritesCount > 0 && (
              <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-blue-600 text-[8px] font-bold text-white rounded-full flex items-center justify-center">
                {favoritesCount}
              </span>
            )}
          </a>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-neutral-400 hover:text-white p-2 cursor-pointer"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 stroke-[1.5]" />
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 w-full h-screen bg-[#0F0F0F] z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-500 ease-in-out md:hidden ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
        <button onClick={() => setIsMenuOpen(false)} className="absolute top-7 right-6 text-neutral-400 hover:text-white p-2">
          <X className="w-6 h-6 stroke-[1.5]" />
        </button>

        <nav className="flex flex-col items-center space-y-6 w-full px-6">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className="text-lg font-light uppercase tracking-widest text-neutral-300 hover:text-white transition-colors">
              {item.name}
            </a>
          ))}
          
          <div className="w-24 h-[1px] bg-neutral-900 my-4" />

          <a 
            href={isLoggedIn ? "/profile" : "#login"}
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center justify-center space-x-2 text-neutral-300 hover:text-white text-sm font-medium uppercase tracking-widest w-full"
          >
            <User className="w-4 h-4" />
            <span>{isLoggedIn ? "Личный кабинет" : "Войти"}</span>
          </a>

          {!isLoggedIn && (
            <a 
              href="#register"
              onClick={() => setIsMenuOpen(false)}
              style={{ color: "#000000" }}
              className="mt-4 block mx-auto px-8 py-3 bg-white text-black text-xs font-medium uppercase tracking-widest rounded-sm text-center w-full max-w-[240px] hover:bg-neutral-200 transition-colors"
            >
              Регистрация
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}
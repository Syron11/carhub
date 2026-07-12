import type { JSX } from "react";

export function Footer(): JSX.Element {
  return (
    <footer className="py-20 bg-[#050505] border-t border-neutral-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          <div className="space-y-4 max-w-sm">
            <h3 className="text-white font-bold text-xl tracking-tighter">CARHUB</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Профессиональный подбор и качественные комплектующие. 
              Ваш автомобиль заслуживает лучшего.
            </p>
          </div>

          <div className="flex gap-12">
            <div className="flex flex-col gap-3">
              <span className="text-white text-xs uppercase tracking-widest font-semibold mb-2">Навигация</span>
              <a href="#" className="text-neutral-500 hover:text-white transition-colors text-sm">Каталог</a>
              <a href="#" className="text-neutral-500 hover:text-white transition-colors text-sm">О нас</a>
            </div>
            
            <div className="flex flex-col gap-3">
              <span className="text-white text-xs uppercase tracking-widest font-semibold mb-2">Контакты</span>
              <a href="#" className="text-neutral-500 hover:text-white transition-colors text-sm">Telegram</a>
              <a href="#" className="text-neutral-500 hover:text-white transition-colors text-sm">Instagram</a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-neutral-600 gap-4">
          <p className="text-[10px] uppercase tracking-widest">© 2026 CarHub. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-[10px] uppercase tracking-widest">Privacy Policy</span>
            <span className="text-[10px] uppercase tracking-widest">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
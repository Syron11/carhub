import type { JSX } from "react";
import { ShieldCheck, Lock, Truck } from "lucide-react"; // Добавляем иконки

const items = [
  { icon: ShieldCheck, title: "Юридическая чистота", desc: "Все авто проверены по базам данных." },
  { icon: Lock, title: "Безопасная сделка", desc: "Сопровождение на всех этапах покупки." },
  { icon: Truck, title: "Доставка", desc: "Бережная транспортировка в любую точку." },
];

export function Features(): JSX.Element {
  return (
    <section className="py-20 border-t border-neutral-900 bg-[#0A0A0A]">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-12">
        {items.map((item) => (
          <div key={item.title}>
            {/* Иконка в тонком исполнении */}
            <item.icon className="w-6 h-6 text-neutral-700 mb-6 stroke-[1]" />
            <h4 className="text-white font-medium uppercase tracking-widest text-sm mb-3">{item.title}</h4>
            <p className="text-neutral-500 text-xs leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
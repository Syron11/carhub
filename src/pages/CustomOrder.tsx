import { useState } from "react";
import { Link } from "react-router-dom";

const bodyTypes = ["Купе", "Родстер", "Гиперкар", "Кабриолет", "Тарга", "Шутинг-брейк"];
const carData: Record<string, string[]> = {
  Ferrari: ["SF90 Stradale", "296 GTB", "812 Superfast", "Roma"],
  Lamborghini: ["Revuelto", "Huracan", "Aventador", "Urus"],
  Porsche: ["911 Turbo", "911 GT3", "Taycan", "Panamera"],
  McLaren: ["750S", "Artura", "GT", "Senna"],
};
const engines = ["3.0L", "4.0L", "5.0L", "6.0L+"];

export function CustomOrder() {
  const [step, setStep] = useState(1);
  const [orderData, setOrderData] = useState({
    bodyType: "",
    brand: "",
    model: "",
    engineVolume: "",
    contact: "",
  });

  const updateOrder = (key: string, value: string) => {
    setOrderData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSend = () => {
    console.log("Отправка в админ-панель:", orderData);
    setStep(6); // Переход на финальный экран подтверждения
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white py-20">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-2xl md:text-4xl font-light uppercase tracking-widest leading-tight mb-12">
          Индивидуальный <br className="md:hidden" /> заказ
        </h1>

        {/* Блок выбора */}
        {step < 6 && (
          <div className="mb-12 p-6 border border-neutral-800 bg-neutral-900/50">
            <h3 className="text-neutral-500 text-xs uppercase tracking-widest mb-2">Ваш выбор:</h3>
            <div className="flex flex-wrap gap-4 text-sm">
              {Object.entries(orderData).map(([key, value]) => value && (
                <span key={key} className="border-b border-white pb-1">{key.toUpperCase()}: {value}</span>
              ))}
            </div>
          </div>
        )}

        {/* Шаги 1-3 */}
        {step === 1 && (
          <div className="animate-in fade-in duration-500">
            <h2 className="text-xl text-neutral-400 mb-8 uppercase tracking-widest">Шаг 1: Тип кузова</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {bodyTypes.map((type) => (
                <button key={type} onClick={() => { updateOrder("bodyType", type); setStep(2); }} className="p-6 border border-neutral-800 hover:border-white transition-all uppercase">{type}</button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in duration-500">
            <h2 className="text-xl text-neutral-400 mb-8 uppercase tracking-widest">Шаг 2: Марка</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.keys(carData).map((brand) => (
                <button key={brand} onClick={() => { updateOrder("brand", brand); setStep(3); }} className="p-6 border border-neutral-800 hover:border-white transition-all uppercase">{brand}</button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in duration-500">
            <h2 className="text-xl text-neutral-400 mb-8 uppercase tracking-widest">Шаг 3: Модель {orderData.brand}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {carData[orderData.brand].map((model) => (
                <button key={model} onClick={() => { updateOrder("model", model); setStep(4); }} className="p-6 border border-neutral-800 hover:border-white transition-all uppercase">{model}</button>
              ))}
            </div>
          </div>
        )}

        {/* Шаг 4: Объем двигателя */}
        {step === 4 && (
          <div className="animate-in fade-in duration-500">
            <h2 className="text-xl text-neutral-400 mb-8 uppercase tracking-widest">Шаг 4: Объем двигателя</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {engines.map((vol) => (
                <button key={vol} onClick={() => { updateOrder("engineVolume", vol); setStep(5); }} className="p-6 border border-neutral-800 hover:border-white transition-all uppercase">{vol}</button>
              ))}
            </div>
          </div>
        )}

        {/* Шаг 5: Контакты */}
        {step === 5 && (
          <div className="animate-in fade-in duration-500">
            <h2 className="text-xl text-neutral-400 mb-8 uppercase tracking-widest">Шаг 5: Контактные данные</h2>
            <input type="text" placeholder="Введите ваш номер или email" className="w-full bg-transparent border border-neutral-800 p-4 mb-6 focus:border-white outline-none" onChange={(e) => updateOrder("contact", e.target.value)} />
            <button onClick={handleSend} className="px-10 py-4 bg-white text-black font-bold uppercase hover:bg-neutral-200 transition-all">Отправить заявку</button>
          </div>
        )}

        {/* Финальный шаг */}
        {step === 6 && (
          <div className="animate-in zoom-in duration-500 text-center py-20">
            <h2 className="text-3xl mb-6">Заявка принята!</h2>
            <p className="text-neutral-400 mb-10">Наш менеджер свяжется с вами в ближайшее время.</p>
            <div className="flex gap-4 justify-center">
              <Link to="/" className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-all">На главную</Link>
              <Link to="/catalog" className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-all">В каталог</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
import { useState } from "react";
import { Link } from "react-router-dom";
import { carData } from "../data/carData"; 

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

  const handleFinalSubmit = () => {
    if (!orderData.contact.trim()) {
      alert("Пожалуйста, укажите ваш номер телефона или email для связи.");
      return;
    }
    console.log("Отправка данных:", orderData);
    setStep(6);
  };

  // Вычисляем данные
  const availableBrands = orderData.bodyType ? Object.keys(carData[orderData.bodyType] || {}) : [];
  const availableModels = (orderData.bodyType && orderData.brand) 
    ? carData[orderData.bodyType][orderData.brand] 
    : [];

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white py-20">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-2xl md:text-4xl font-light uppercase tracking-widest mb-12">Индивидуальный заказ</h1>

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

        {/* Шаг 1: Тип кузова */}
        {step === 1 && (
          <div className="animate-in fade-in duration-500">
            <h2 className="text-xl text-neutral-400 mb-8 uppercase">Шаг 1: Тип кузова</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Object.keys(carData).map((type) => (
                <button key={type} onClick={() => { updateOrder("bodyType", type); setStep(2); }} className="p-6 border border-neutral-800 hover:border-white transition-all uppercase">{type}</button>
              ))}
            </div>
          </div>
        )}

        {/* Шаг 2: Марка (Используем availableBrands) */}
        {step === 2 && (
          <div className="animate-in fade-in duration-500">
            <h2 className="text-xl text-neutral-400 mb-8 uppercase">Шаг 2: Марка</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {availableBrands.map((brand) => (
                <button key={brand} onClick={() => { updateOrder("brand", brand); setStep(3); }} className="p-6 border border-neutral-800 hover:border-white transition-all uppercase">{brand}</button>
              ))}
            </div>
          </div>
        )}

        {/* Шаг 3: Модель (Используем availableModels) */}
        {step === 3 && (
          <div className="animate-in fade-in duration-500">
            <h2 className="text-xl text-neutral-400 mb-8 uppercase">Шаг 3: Модель</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {availableModels.map((model: string) => (
                <button key={model} onClick={() => { updateOrder("model", model); setStep(4); }} className="p-6 border border-neutral-800 hover:border-white transition-all uppercase">{model}</button>
              ))}
            </div>
          </div>
        )}

        {/* Шаг 4: Двигатель (Используем engines) */}
        {step === 4 && (
          <div className="animate-in fade-in duration-500">
            <h2 className="text-xl text-neutral-400 mb-8 uppercase">Шаг 4: Объем двигателя</h2>
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
            <h2 className="text-xl text-neutral-400 mb-8 uppercase">Шаг 5: Контакты</h2>
            <input 
              type="text" 
              value={orderData.contact}
              placeholder="Ваш номер или email" 
              className="w-full bg-transparent border border-neutral-800 p-4 mb-6 focus:border-white outline-none" 
              onChange={(e) => updateOrder("contact", e.target.value)} 
            />
            <button onClick={handleFinalSubmit} className="px-10 py-4 bg-white text-black font-bold uppercase hover:bg-neutral-200 transition-all">Отправить</button>
          </div>
        )}
        
        {step === 6 && (
           <div className="text-center py-20 animate-in zoom-in duration-500">
             <h2 className="text-3xl mb-6">Заявка принята!</h2>
             <Link to="/" className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-all">На главную</Link>
           </div>
        )}
      </div>
    </div>
  );
}
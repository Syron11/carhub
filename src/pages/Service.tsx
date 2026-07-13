import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function Service() {
  const busyDates = ["13.07.2026", "15.07.2026", "20.07.2026"];

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [service, setService] = useState("");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Функция для полного сброса формы
  const resetForm = () => {
    setSelectedDate(new Date());
    setService("");
    setComment("");
    setStatus('idle');
  };

  const handleBooking = () => {
    if (!service) {
      alert("Пожалуйста, выберите вид услуги");
      return;
    }

    const selectedDateStr = selectedDate ? selectedDate.toLocaleDateString('ru-RU') : "";
    const isDateBusy = busyDates.includes(selectedDateStr);

    if (isDateBusy) {
      setStatus('error');
    } else {
      console.log("Заявка отправлена:", { service, date: selectedDateStr, comment });
      setStatus('success');
    }
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white py-20">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-4xl font-light uppercase tracking-widest mb-12">Сервис CARHUB</h1>

        {status === 'idle' ? (
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl mb-6">Выберите услугу:</h2>
              <div className="flex flex-col gap-4">
                {["ТО и диагностика", "Детейлинг", "Тюнинг", "Ремонт"].map((s) => (
                  <button
                    key={s}
                    onClick={() => setService(s)}
                    className={`p-4 border text-left transition-all ${service === s ? "border-white bg-white text-black" : "border-neutral-800"}`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <h2 className="text-xl mb-4">Опишите ситуацию:</h2>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Например: появился странный стук в подвеске..."
                  className="w-full bg-[#171717] border border-neutral-800 p-4 text-white focus:border-white outline-none transition-all h-32 resize-none"
                />
              </div>
            </div>

            <div>
              <h2 className="text-xl mb-6">Выберите дату визита:</h2>
              <div className="bg-neutral-900 p-6 inline-block">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date: Date | null) => setSelectedDate(date)}
                  inline
                  minDate={new Date()}
                  dateFormat="dd.MM.yyyy"
                />
              </div>
              
              <button 
                onClick={handleBooking}
                className={`block mt-8 px-10 py-4 uppercase font-bold transition-all ${
                  !service ? "bg-neutral-800 text-neutral-500 cursor-not-allowed" : "bg-white text-black hover:bg-neutral-200"
                }`}
              >
                {service ? "Записаться" : "Выберите услугу для записи"}
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
            {status === 'success' ? (
              <h2 className="text-3xl mb-4">Заявка на <span className="text-neutral-500">{service.toLowerCase()}</span> принята</h2>
            ) : (
              <h2 className="text-3xl text-red-500 mb-4">К сожалению, этот день занят</h2>
            )}
            {/* Вызываем resetForm при клике на кнопку */}
            <button 
              onClick={resetForm} 
              className="mt-8 px-8 py-3 border border-white hover:bg-white hover:text-black transition-all uppercase"
            >
              Вернуться
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
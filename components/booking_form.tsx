"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function BookingForm() {
    const [step, setStep] = useState(1);

    // Adım 1 & 2 Stateleri
    const [selectedService, setSelectedService] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");

    // Dolu Saatleri Tutacağımız State
    const [bookedTimes, setBookedTimes] = useState<string[]>([]);
    const [isLoadingTimes, setIsLoadingTimes] = useState(false);

    // Adım 3 Stateleri
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [notes, setNotes] = useState("");

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const timeSlots = ["09:00", "10:00", "11:00", "13:30", "14:30", "15:30", "16:30", "17:30"];

    // Tarih her değiştiğinde Supabase'den o günün dolu saatlerini çek
    // Tarih her değiştiğinde Güvenli API'den o günün dolu saatlerini çek
    useEffect(() => {
        if (!selectedDate) return;

        const fetchBookedTimes = async () => {
            setIsLoadingTimes(true);
            setSelectedTime("");

            try {
                // Supabase'e doğrudan gitmek yerine, kendi güvenli backend'imize istek atıyoruz
                const response = await fetch(`/api/times?date=${selectedDate}`);
                const result = await response.json();

                if (!response.ok) {
                    throw new Error(result.error || 'Saatler çekilemedi');
                }

                // API'den sadece saatler temiz bir dizi olarak geliyor, onları state'e kaydediyoruz
                setBookedTimes(result.bookedTimes || []);
            } catch (error) {
                console.error("Dolu saatler çekilemedi:", error);
            } finally {
                setIsLoadingTimes(false);
            }
        };

        fetchBookedTimes();
    }, [selectedDate]);

    const handleSubmit = async () => {
        setIsSubmitting(true);

        try {
      // 1. Doğrudan Supabase'e yazmak yerine yeni yazdığımız güvenli API'ye istek atıyoruz
            const bookingResponse = await fetch('/api/booking', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    phone,
                    service: selectedService,
                    date: selectedDate,
                    time: selectedTime,
                    notes
                }),
            });

            const bookingResult = await bookingResponse.json();

            if (!bookingResponse.ok) {
                throw new Error(bookingResult.error || 'Randevu kaydedilemedi.');
            }

      // 2. Veritabanı kaydı başarılı olduktan sonra çalışan mevcut e-posta tetikleyicin
            await fetch('/api/email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    phone,
                    service: selectedService,
                    date: selectedDate,
                    time: selectedTime
                }),
            });

            // 3. Başarılı ekranına geçiş sağlayan mevcut state güncellemen
            setIsSubmitted(true);
        } catch (error: any) {
            console.error("Kayıt hatası:", error);
            alert(error.message || "Randevu kaydedilirken bir sorun oluştu. Lütfen tekrar deneyin.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="w-full bg-white p-12 rounded-3xl border border-slate-100 shadow-sm text-center animate-in zoom-in duration-500">
                <div className="w-24 h-24 bg-[#e5fbf0] text-[#00d061] rounded-full flex items-center justify-center text-5xl mx-auto mb-6">✓</div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Randevunuz Alındı!</h2>
                <p className="text-slate-600 max-w-md mx-auto mb-8 text-lg">
                    Sayın <span className="font-semibold">{firstName} {lastName}</span>,
                    <span className="font-semibold"> {selectedDate.split("-").reverse().join(".")}</span> tarihinde saat
                    <span className="font-semibold"> {selectedTime}</span> için talebiniz başarıyla oluşturuldu.
                </p>
                <button onClick={() => window.location.reload()} className="text-[#00d061] font-bold hover:underline">
                    Yeni bir randevu al
                </button>
            </div>
        );
    }

    return (
        <div className="w-full">
            <div className="mb-8">
                <div className="flex justify-between text-sm font-medium text-slate-500 mb-2">
                    <span className="text-[#00d061] font-bold tracking-wider">RANDEVU ADIMI</span>
                    <span className="text-[#00d061] font-bold">{step} / 4</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#00d061] h-full transition-all duration-500 ease-in-out" style={{ width: `${(step / 4) * 100}%` }}></div>
                </div>
                <div className="flex justify-between text-xs mt-3 font-medium hidden sm:flex">
                    <span className={step >= 1 ? "text-slate-800" : "text-slate-400"}>Hizmet</span>
                    <span className={step >= 2 ? "text-slate-800" : "text-slate-400"}>Tarih & Saat</span>
                    <span className={step >= 3 ? "text-slate-800" : "text-slate-400"}>Bilgiler</span>
                    <span className={step >= 4 ? "text-slate-800" : "text-slate-400"}>Onay</span>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">

                    {step === 1 && (
                        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm animate-in fade-in slide-in-from-bottom-4">
                            <h3 className="font-bold text-xl text-slate-900 mb-6 flex items-center gap-3"><span className="bg-[#e5fbf0] text-[#00d061] w-10 h-10 rounded-lg flex items-center justify-center text-xl">📋</span> Hizmet Seçimi</h3>
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-slate-700 mb-2">Uygulanacak Tedavi</label>

                                {/* YENİLENEN DROPDOWN MENÜSÜ */}
                                <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)} className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00d061] bg-white cursor-pointer">
                                    <option value="">Lütfen bir hizmet seçin</option>
                                    <option value="Fizyoterapi">Fizyoterapi</option>
                                    <option value="Manuel Terapi">Manuel Terapi</option>
                                    <option value="Ortopedik Rehabilitasyon">Ortopedik Rehabilitasyon</option>
                                    <option value="Nörolojik Rehabilitasyon">Nörolojik Rehabilitasyon</option>
                                    <option value="Fitness">Fitness</option>
                                    <option value="Pilates">Pilates</option>
                                </select>

                            </div>
                            <div className="mt-8 flex justify-end">
                                <button onClick={() => setStep(2)} disabled={!selectedService} className={`px-10 py-3.5 rounded-xl font-bold transition-all flex items-center gap-2 ${selectedService ? "bg-[#00d061] hover:bg-[#00b353] text-white shadow-md" : "bg-slate-200 text-slate-400 cursor-not-allowed"}`}>
                                    İleri <span>→</span>
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm animate-in fade-in slide-in-from-bottom-4">
                            <h3 className="font-bold text-xl text-slate-900 mb-6 flex items-center gap-3"><span className="bg-[#e5fbf0] text-[#00d061] w-10 h-10 rounded-lg flex items-center justify-center text-xl">📅</span> Tarih ve Saat Seçimi</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Tarih</label>
                                    <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} min={new Date().toISOString().split('T')[0]} className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00d061] cursor-pointer" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Müsait Saatler {isLoadingTimes && <span className="text-[#00d061] ml-2 text-xs">Kontrol ediliyor...</span>}
                                    </label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {timeSlots.map((time, idx) => {
                                            const isBooked = bookedTimes.includes(time);
                                            return (
                                                <button
                                                    key={idx}
                                                    onClick={() => setSelectedTime(time)}
                                                    disabled={isBooked || !selectedDate}
                                                    className={`py-2 rounded-lg border text-sm font-medium transition-colors ${
                                                        isBooked
                                                            ? "bg-slate-100 border-slate-200 text-slate-400 line-through cursor-not-allowed"
                                                            : selectedTime === time
                                                                ? "bg-[#e5fbf0] border-[#00d061] text-[#00d061]"
                                                                : "border-slate-200 text-slate-600 hover:border-[#00d061]"
                                                    }`}
                                                >
                                                    {time} {isBooked && "(Dolu)"}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center border-t border-slate-100 pt-6">
                                <button onClick={() => setStep(1)} className="text-slate-500 font-semibold hover:text-slate-800">← Geri Dön</button>
                                <button onClick={() => setStep(3)} disabled={!selectedDate || !selectedTime} className={`px-10 py-3.5 rounded-xl font-bold transition-all flex items-center gap-2 ${(selectedDate && selectedTime) ? "bg-[#00d061] hover:bg-[#00b353] text-white shadow-md" : "bg-slate-200 text-slate-400 cursor-not-allowed"}`}>
                                    İleri <span>→</span>
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm animate-in fade-in slide-in-from-bottom-4">
                            <h3 className="font-bold text-xl text-slate-900 mb-6 flex items-center gap-3"><span className="bg-[#e5fbf0] text-[#00d061] w-10 h-10 rounded-lg flex items-center justify-center text-xl">👤</span> Kişisel Bilgileriniz</h3>
                            <div className="space-y-5 mb-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div><label className="block text-sm font-medium text-slate-700 mb-2">Adınız</label><input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Örn: Ayşe" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00d061]" /></div>
                                    <div><label className="block text-sm font-medium text-slate-700 mb-2">Soyadınız</label><input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Örn: Yılmaz" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00d061]" /></div>
                                </div>
                                <div><label className="block text-sm font-medium text-slate-700 mb-2">Telefon Numaranız</label><input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="05XX XXX XX XX" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00d061]" /></div>
                                <div><label className="block text-sm font-medium text-slate-700 mb-2">Eklemek İstedikleriniz (Opsiyonel)</label><textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Şikayetinizden kısaca bahsedebilirsiniz..." rows={3} className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00d061] resize-none"></textarea></div>
                            </div>
                            <div className="flex justify-between items-center border-t border-slate-100 pt-6">
                                <button onClick={() => setStep(2)} className="text-slate-500 font-semibold hover:text-slate-800">← Geri Dön</button>
                                <button onClick={() => setStep(4)} disabled={!firstName || !lastName || !phone} className={`px-10 py-3.5 rounded-xl font-bold transition-all flex items-center gap-2 ${(firstName && lastName && phone) ? "bg-[#00d061] hover:bg-[#00b353] text-white shadow-md" : "bg-slate-200 text-slate-400 cursor-not-allowed"}`}>
                                    Son Adım <span>→</span>
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm animate-in fade-in slide-in-from-bottom-4">
                            <div className="text-center mb-8">
                                <h3 className="font-bold text-2xl text-slate-900 mb-2">Randevuyu Onaylayın</h3>
                                <p className="text-slate-500">Lütfen bilgilerinizi kontrol edip randevunuzu tamamlayın.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8 space-y-4">
                                <div className="flex justify-between border-b border-slate-200 pb-4"><span className="text-slate-500">Hasta:</span><span className="font-bold text-slate-900">{firstName} {lastName}</span></div>
                                <div className="flex justify-between border-b border-slate-200 pb-4"><span className="text-slate-500">Telefon:</span><span className="font-bold text-slate-900">{phone}</span></div>
                                <div className="flex justify-between border-b border-slate-200 pb-4"><span className="text-slate-500">Hizmet:</span><span className="font-bold text-slate-900">{selectedService}</span></div>
                                <div className="flex justify-between"><span className="text-slate-500">Zaman:</span><span className="font-bold text-[#00d061]">{selectedDate.split("-").reverse().join(".")} - {selectedTime}</span></div>
                            </div>
                            <div className="flex justify-between items-center">
                                <button onClick={() => setStep(3)} disabled={isSubmitting} className="text-slate-500 font-semibold hover:text-slate-800 disabled:opacity-50">← Düzenle</button>
                                <button onClick={handleSubmit} disabled={isSubmitting} className="bg-slate-900 hover:bg-slate-800 disabled:bg-slate-700 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-md flex items-center gap-2 text-lg">
                                    {isSubmitting ? "Kaydediliyor..." : "Randevuyu Onayla ✓"}
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="w-full lg:w-[350px]">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm sticky top-24">
                        <h3 className="font-bold text-lg text-slate-900 mb-4 border-b border-slate-100 pb-4">Randevu Özeti</h3>
                        <div className="space-y-5">
                            <div className="flex gap-3"><div className="text-[#00d061] mt-0.5 text-lg">📋</div><div><p className="text-xs text-slate-400 font-medium uppercase tracking-wider">HİZMET</p><p className="text-sm font-semibold text-slate-800">{selectedService || "Henüz seçilmedi"}</p></div></div>
                            <div className="flex gap-3"><div className="text-[#00d061] mt-0.5 text-lg">🕒</div><div><p className="text-xs text-slate-400 font-medium uppercase tracking-wider">TARİH & SAAT</p><p className="text-sm font-semibold text-slate-800">{selectedDate ? selectedDate.split("-").reverse().join(".") : "Tarih seçilmedi"}{selectedTime && ` - ${selectedTime}`}</p></div></div>
                            {firstName && <div className="flex gap-3"><div className="text-[#00d061] mt-0.5 text-lg">👤</div><div><p className="text-xs text-slate-400 font-medium uppercase tracking-wider">DANIŞAN</p><p className="text-sm font-semibold text-slate-800">{firstName} {lastName}</p></div></div>}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
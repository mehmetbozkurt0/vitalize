"use client";

import { useState } from "react";

export default function ContactPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("İlk Danışmanlık");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handlePhoneClick = () => {
        if (typeof window !== "undefined") {
            const win = window as unknown as { gtag: (cmd: string, action: string, params: object) => void };
            if (win.gtag) {
                win.gtag('event', 'conversion', {
                    'send_to': 'AW-788816291/tyUfCMbuoa4bEKPDkfgC',
                    'value': 1.0,
                    'currency': 'TRY'
                });
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, subject, message }),
            });

            if (response.ok) {
                setIsSubmitted(true);
                setName("");
                setEmail("");
                setMessage("");
                setSubject("İlk Danışmanlık");
            } else {
                alert("Mesaj gönderilirken bir sorun oluştu.");
            }
        } catch (error) {
            console.error("Mail gönderme hatası:", error);
            alert("Bir hata oluştu, lütfen daha sonra tekrar deneyin.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full py-20 px-6 md:px-12 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto">

                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">İletişime Geçin</h1>
                    <p className="text-slate-500 max-w-xl text-lg">
                        Tedavilerimiz hakkında sorularınız mı var veya bir danışmanlık mı planlamak istiyorsunuz? Fizyoterapi uzmanlarımız size yardımcı olmak için burada.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sol Kolon - İletişim Bilgileri */}
                    <div className="w-full lg:w-1/3 space-y-6">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <h3 className="font-bold text-lg text-slate-900 mb-6">Ofisimiz</h3>
                            <div className="space-y-6 text-slate-600">
                                <div className="flex gap-4">
                                    <span className="text-[#00d061] text-xl">📍</span>
                                    <div>
                                        <p className="font-medium text-slate-900">Adres</p>
                                        <p className="text-sm">Cumhuriyet Mahallesi<br/>Mehmet Tevfik Çamcı Sokak<br/>Merkez / Uşak</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[#00d061] text-xl">📞</span>
                                    <div>
                                        <p className="font-medium text-slate-900">Bizi Arayın</p>
                                        <a
                                            href="tel:05432100276"
                                            onClick={handlePhoneClick}
                                            className="text-sm font-bold text-slate-900 hover:text-[#00d061] transition-colors"
                                        >
                                            0543 210 02 76
                                        </a>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[#00d061] text-xl">✉️</span>
                                    <div>
                                        <p className="font-medium text-slate-900">E-posta</p>
                                        <p className="text-sm">iletisim@fztveyisbozkurt.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sağ Kolon - İletişim Formu */}
                    <div className="w-full lg:w-2/3 bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100">
                        {isSubmitted ? (
                            <div className="flex flex-col items-center justify-center h-full text-center py-10 animate-in fade-in zoom-in duration-500">
                                <div className="w-20 h-20 bg-[#e5fbf0] text-[#00d061] rounded-full flex items-center justify-center text-4xl mb-6">✓</div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Mesajınız Alındı!</h3>
                                <p className="text-slate-500 mb-6">En kısa sürede sizinle iletişime geçeceğiz.</p>
                                <button onClick={() => setIsSubmitted(false)} className="text-[#00d061] font-bold hover:underline">
                                    Yeni bir mesaj gönder
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Ad Soyad</label>
                                        <input
                                            type="text"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Adınız ve Soyadınız"
                                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00d061] transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">E-posta Adresi</label>
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="ornek@mail.com"
                                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00d061] transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Konu</label>
                                    <select
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00d061] transition-all bg-white cursor-pointer"
                                    >
                                        <option value="İlk Danışmanlık">İlk Danışmanlık</option>
                                        <option value="Randevu İptali / Değişikliği">Randevu İptali / Değişikliği</option>
                                        <option value="Genel Bilgi">Genel Bilgi</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Mesajınız</label>
                                    <textarea
                                        required
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        rows={4}
                                        placeholder="Size nasıl yardımcı olabiliriz?"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00d061] transition-all resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#00d061] hover:bg-[#00b353] disabled:bg-slate-300 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md"
                                >
                                    <span>{isSubmitting ? "Gönderiliyor..." : "Mesajı Gönder"}</span>
                                    {!isSubmitting && <span className="text-xl">→</span>}
                                </button>
                            </form>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}
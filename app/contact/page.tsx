export default function ContactPage() {
    return (
        <div className="w-full py-20 px-6 md:px-12 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto">

                {/* Üst Başlık Kısmı */}
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
                                        <p className="text-sm">[Açık Adres Bilgisi]<br/>[İlçe, İl, Posta Kodu]</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[#00d061] text-xl">📞</span>
                                    <div>
                                        <p className="font-medium text-slate-900">Bizi Arayın</p>
                                        <p className="text-sm">[Telefon Numarası]</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[#00d061] text-xl">✉️</span>
                                    <div>
                                        <p className="font-medium text-slate-900">E-posta</p>
                                        <p className="text-sm">[E-posta Adresi]</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sağ Kolon - İletişim Formu */}
                    <div className="w-full lg:w-2/3 bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Ad Soyad</label>
                                    <input
                                        type="text"
                                        placeholder="Adınız ve Soyadınız"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00d061] focus:border-transparent transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">E-posta Adresi</label>
                                    <input
                                        type="email"
                                        placeholder="ornek@mail.com"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00d061] focus:border-transparent transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Konu</label>
                                <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00d061] focus:border-transparent transition-all bg-white">
                                    <option>İlk Danışmanlık</option>
                                    <option>Randevu İptali / Değişikliği</option>
                                    <option>Genel Bilgi</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Mesajınız</label>
                                <textarea
                                    rows={4}
                                    placeholder="Size nasıl yardımcı olabiliriz?"
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00d061] focus:border-transparent transition-all resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="w-full bg-[#00d061] hover:bg-[#00b353] text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                            >
                                <span>Mesajı Gönder</span>
                                <span className="text-xl">→</span>
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default function ServicesPage() {
    const treatments = [
        {
            name: "Manuel Terapi",
            description: "Ağrıyı azaltmak ve eklem hareket açıklığını artırmak için özel elle müdahale teknikleri.",
            badge: "MANUEL"
        },
        {
            name: "Elektroterapi",
            description: "TENS, EMS ve Ultrason tedavileri ile iyileşmeyi hızlandırma ve kronik ağrı yönetimi.",
            badge: "TEKNOLOJİ"
        },
        {
            name: "Rehabilitasyon",
            description: "Ameliyat, yaralanma veya nörolojik durumlar sonrası gücü ve işlevi geri kazandırmaya yönelik egzersizler.",
            badge: "İYİLEŞME"
        },
        {
            name: "Klinik Pilates",
            description: "Duruş bozukluklarını düzeltmek ve kas dengesini sağlamak için fizyoterapist eşliğinde pilates.",
            badge: "SAĞLIKLI YAŞAM"
        }
    ];

    return (
        <div className="w-full py-20 px-6 md:px-12 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Özel Tedavilerimiz</h1>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        Daha hızlı iyileşmenize, daha iyi hareket etmenize ve ağrısız yaşamanıza yardımcı olmak için klinik uzmanlığı kişiselleştirilmiş bir yaklaşımla birleştiriyoruz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {treatments.map((treatment, index) => (
                        <div key={index} className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all">
                            <div className="h-48 bg-slate-200 w-full flex items-center justify-center text-slate-400">
                                [Görsel Alanı]
                            </div>
                            <div className="p-8 relative">
                <span className="absolute -top-4 left-8 bg-[#00d061] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {treatment.badge}
                </span>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">{treatment.name}</h3>
                                <p className="text-slate-600 mb-6">{treatment.description}</p>
                                <button className="w-full py-3 border-2 border-slate-200 rounded-lg text-slate-700 font-semibold hover:border-[#00d061] hover:text-[#00d061] transition-colors">
                                    Daha Fazla Bilgi
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
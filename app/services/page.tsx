import Link from "next/link";

export default function ServicesPage() {
    const treatments = [
        {
            name: "Fizyoterapi",
            description: "Kas, eklem ve sinir sistemi kaynaklı ağrıları azaltmak ve hareket kabiliyetini artırmak için bilimsel yöntemlerle kişiye özel fizyoterapi programları uygulanır.",
            badge: "TEDAVİ"
        },
        {
            name: "Manuel Terapi",
            description: "Elle yapılan özel tekniklerle kas gerginliği, eklem sertliği ve duruş bozuklukları giderilerek doğal iyileşme süreci desteklenir.",
            badge: "MANUEL"
        },
        {
            name: "Ortopedik Rehabilitasyon",
            description: "Ameliyat sonrası veya yaralanma sonrası süreçlerde eklem ve kas fonksiyonlarını geri kazandırmaya yönelik egzersiz ve tedavi programları uygulanır.",
            badge: "REHABİLİTASYON"
        },
        {
            name: "Nörolojik Rehabilitasyon",
            description: "Felç, sinir hasarı veya nörolojik rahatsızlıklar sonrası hareket kabiliyetini artırmak için özel egzersiz ve terapi yöntemleri uygulanır.",
            badge: "NÖROLOJİ"
        },
        {
            name: "Fitness",
            description: "Uzman eşliğinde hazırlanan antrenman programlarıyla kas gücü, dayanıklılık ve genel vücut sağlığı geliştirilir.",
            badge: "SAĞLIKLI YAŞAM"
        },
        {
            name: "Pilates",
            description: "Denge, esneklik ve postür odaklı egzersizlerle hem bedensel farkındalık hem de core kas gücü artırılır.",
            badge: "EGZERSİZ"
        }
    ];

    return (
        <div className="w-full py-20 px-6 md:px-12 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Özel Tedavilerimiz</h1>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        Daha hızlı iyileşmenize, daha iyi hareket etmenize ve ağrısız yaşamanıza yardımcı olmak için klinik uzmanlığı kişiselleştirilmiş bir yaklaşımla birleştiriyoruz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {treatments.map((treatment, index) => (
                        <div key={index} className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl hover:bg-white transition-all duration-300">
                            {/* Görsel Alanı */}
                            <div className="h-48 bg-slate-200 w-full flex items-center justify-center text-slate-400">
                                [Görsel Alanı]
                            </div>

                            {/* İçerik Alanı */}
                            <div className="p-8 relative">
                                <span className="absolute -top-4 left-8 bg-[#00d061] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                                    {treatment.badge}
                                </span>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">{treatment.name}</h3>
                                <p className="text-slate-600 mb-8 leading-relaxed">{treatment.description}</p>

                                <Link href="/booking" className="block w-full text-center py-3.5 border-2 border-slate-200 rounded-xl text-slate-700 font-bold hover:border-[#00d061] hover:text-[#00d061] transition-colors">
                                    Randevu Al
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
import Link from "next/link";

export default function Services() {
    const mainServices = [
        {
            title: "Fizyoterapi",
            description: "Kas, eklem ve sinir sistemi kaynaklı ağrıları azaltmak ve hareket kabiliyetini artırmak için bilimsel yöntemlerle kişiye özel fizyoterapi programları uygulanır.",
            icon: "🩺"
        },
        {
            title: "Manuel Terapi",
            description: "Elle yapılan özel tekniklerle kas gerginliği, eklem sertliği ve duruş bozuklukları giderilerek doğal iyileşme süreci desteklenir.",
            icon: "👐"
        },
        {
            title: "Ortopedik Rehabilitasyon",
            description: "Ameliyat sonrası veya yaralanma sonrası süreçlerde eklem ve kas fonksiyonlarını geri kazandırmaya yönelik egzersiz ve tedavi programları uygulanır.",
            icon: "🦴"
        }
    ];

    return (
        <section className="w-full bg-slate-50 py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Üst Kısım: Başlık ve Link */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Temel Hizmetlerimiz
                        </h2>
                        <p className="text-slate-500 max-w-2xl">
                            İşlevi geri kazandırmak ve yaşam kalitenizi artırmak için tasarlanmış kapsamlı terapi programları.
                        </p>
                    </div>
                    <Link
                        href="/services"
                        className="text-[#00d061] font-semibold hover:text-[#00b353] flex items-center gap-2 whitespace-nowrap transition-colors"
                    >
                        Tüm hizmetleri gör <span className="text-xl">→</span>
                    </Link>
                </div>

                {/* Hizmet Kartları */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {mainServices.map((service, index) => (
                        <div key={index} className="group cursor-pointer">
                            {/* İkon Alanı */}
                            <div className="w-full aspect-[4/3] bg-slate-100 rounded-3xl mb-6 overflow-hidden relative">
                                <div className="absolute inset-0 bg-slate-50 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-6xl">
                                    {service.icon}
                                </div>
                            </div>

                            {/* Metin Alanı */}
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#00d061] transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
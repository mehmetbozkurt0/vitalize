import Link from "next/link";

export default function Services() {
    const services = [
        {
            title: "Ortopedik Rehabilitasyon",
            description: "Kemik, eklem ve kas rahatsızlıkları için ameliyat öncesi ve sonrası uzman iyileşme programları."
        },
        {
            title: "Spor Yaralanmaları",
            description: "Sporcuların gelişmiş iyileşme protokolleri aracılığıyla en yüksek performansa güvenle dönmeleri için özel tedavi."
        },
        {
            title: "Pediatrik Terapi",
            description: "Çocukların gelişimsel büyümesine ve fiziksel hareketliliğine odaklanan nazik ve etkili terapi."
        },
        {
            title: "Fizyoterapi",
            description: "Çocukların gelişimsel büyümesine ve fiziksel hareketliliğine odaklanan nazik ve etkili terapi."
        }
    ];

    return (
        <section className="w-full bg-white py-20 px-6 md:px-12">
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
                    {services.map((service, index) => (
                        <div key={index} className="group cursor-pointer">
                            {/* Görsel Alanı (Şimdilik Yer Tutucu) */}
                            <div className="w-full aspect-[4/3] bg-slate-100 rounded-2xl mb-6 overflow-hidden relative">
                                {/* İleride buraya <Image /> etiketi ile gerçek resimler gelecek */}
                                <div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-slate-400 font-medium">
                                    [Hizmet Görseli Gelecek]
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
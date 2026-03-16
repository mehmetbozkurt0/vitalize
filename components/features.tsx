export default function Features() {
    const features = [
        {
            icon: "🛡️", // Figma'daki kalkan ikonunu temsil eden emoji, daha sonra SVG ile değişebilir
            title: "Uzman Kadro",
            description: "Farklı alanlarda yılların klinik tecrübesine sahip yüksek sertifikalı fizyoterapistlerden oluşan ekibimiz."
        },
        {
            icon: "🎯", // Hedef/Kişiselleştirme ikonu
            title: "Kişiselleştirilmiş Planlar",
            description: "Vücut mekaniğinize ve kişisel iyileşme hedeflerinize özel olarak hazırlanmış tedavi stratejileri üretiyoruz."
        },
        {
            icon: "✨", // Modern tesis/parıltı ikonu
            title: "Modern Tesis",
            description: "En etkili rehabilitasyon deneyimi için en son teknolojiyi ve birinci sınıf ekipmanları kullanıyoruz."
        }
    ];

    return (
        <section className="w-full bg-slate-50 py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Neden Bizi Seçmelisiniz?
                </h2>
                <p className="text-slate-500 max-w-2xl mx-auto mb-16">
                    Klinik uzmanlığı hasta odaklı yaklaşımla birleştirerek sağlığınız için en iyi sonuçları almanızı sağlıyoruz.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-left"
                        >
                            <div className="w-12 h-12 bg-[#e5fbf0] rounded-xl flex items-center justify-center text-2xl mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
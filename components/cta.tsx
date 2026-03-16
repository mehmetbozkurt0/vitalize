import Link from "next/link";

export default function CallToAction() {
    return (
        <section className="w-full py-20 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto bg-[#00d061] rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-lg">

                {/* Sol Taraf - Metin ve Butonlar */}
                <div className="flex-1 text-white">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        Ağrısız bir yaşam sürmeye <br className="hidden md:block" /> hazır mısınız?
                    </h2>
                    <p className="text-[#e5fbf0] mb-8 text-lg max-w-md">
                        İlk değerlendirmenizi bugün planlayın ve daha sağlıklı, daha aktif bir hayata doğru ilk adımı atın.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/randevu"
                            className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 rounded-lg font-semibold text-center transition-all shadow-md"
                        >
                            Randevu Al
                        </Link>
                        <a
                            href="tel:+905550000000"
                            className="bg-white hover:bg-slate-50 text-slate-900 px-8 py-3.5 rounded-lg font-semibold text-center transition-all shadow-md"
                        >
                            Ara: +90 (5XX) XXX XX XX
                        </a>
                    </div>
                </div>

                {/* Sağ Taraf - Harita / Konum Kartı */}
                <div className="w-full md:w-[400px] h-[250px] bg-white/90 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center text-slate-800 p-6 text-center shadow-inner">
                    <div className="w-12 h-12 bg-[#e5fbf0] text-[#00d061] rounded-full flex items-center justify-center mb-4 text-xl shadow-sm">
                        📍
                    </div>
                    <h3 className="font-bold text-lg mb-2">Kliniğimizi Ziyaret Edin</h3>
                    <p className="text-slate-500 text-sm">
                        [Açık Adres Bilgisi Buraya Gelecek] <br />
                        [İlçe, İl]
                    </p>
                </div>

            </div>
        </section>
    );
}
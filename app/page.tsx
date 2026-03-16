import Link from "next/link";

export default function HomePage() {
  return (
      <div className="w-full">
        {/* HERO SECTION - Giriş Alanı */}
        <section className="relative w-full py-16 md:py-32 px-6 md:px-12 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

            {/* Sol Taraf - Metinler */}
            <div className="flex-1 text-center lg:text-left z-10">
            <span className="inline-block bg-[#e5fbf0] text-[#00d061] px-4 py-1.5 rounded-full text-sm font-bold mb-6 tracking-wide">
              UZMAN FİZYOTERAPİ HİZMETLERİ
            </span>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Ağrısız Bir Yaşam İçin <br className="hidden md:block" />
                <span className="text-[#00d061]">Doğru Hareket Edin</span>
              </h1>
              <p className="text-slate-600 text-lg mb-10 max-w-xl mx-auto lg:mx-0">
                Klinik uzmanlığımızı kişiselleştirilmiş tedavi programlarıyla birleştiriyoruz. Hareket özgürlüğünüzü geri kazanın.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link href="/booking" className="bg-[#00d061] hover:bg-[#00b353] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all text-center">
                  Hemen Randevu Al
                </Link>
                <Link href="/services" className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:border-[#00d061] hover:text-[#00d061] transition-all text-center">
                  Hizmetlerimiz
                </Link>
              </div>
            </div>

            {/* Sağ Taraf - Görsel */}
            <div className="flex-1 relative w-full max-w-[500px] lg:max-w-none">
              <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden border-8 border-white shadow-2xl relative">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  [Klinik / Uygulama Görseli]
                </div>
                {/* Dekoratif yeşil yuvarlak */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00d061]/10 rounded-full -z-10 animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK STATS - Hızlı İstatistikler */}
        <section className="bg-slate-900 py-12 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-[#00d061] text-3xl font-bold mb-1">500+</div>
              <div className="text-slate-400 text-sm">Mutlu Danışan</div>
            </div>
            <div>
              <div className="text-[#00d061] text-3xl font-bold mb-1">10+</div>
              <div className="text-slate-400 text-sm">Yıllık Deneyim</div>
            </div>
            <div>
              <div className="text-[#00d061] text-3xl font-bold mb-1">15+</div>
              <div className="text-slate-400 text-sm">Uzmanlık Alanı</div>
            </div>
            <div>
              <div className="text-[#00d061] text-3xl font-bold mb-1">4.9/5</div>
              <div className="text-slate-400 text-sm">Başarı Puanı</div>
            </div>
          </div>
        </section>

        {/* FEATURES - Öne Çıkanlar */}
        <section className="py-24 px-6 md:px-12 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">Neden Vitalize?</h2>
              <div className="h-1 w-20 bg-[#00d061] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Kişiye Özel Plan", desc: "Her vücut farklıdır. Size özel tedavi protokolleri oluşturuyoruz.", icon: "🎯" },
                { title: "Modern Ekipman", desc: "En son teknoloji rehabilitasyon cihazları ile desteklenen süreçler.", icon: "⚡" },
                { title: "Uzman Kadro", desc: "Alanında uzman ve sürekli gelişimi takip eden fizyoterapistler.", icon: "🩺" }
              ].map((feature, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="text-4xl mb-6">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>
      </div>
  );
}
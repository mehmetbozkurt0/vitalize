import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 px-6 md:px-12 lg:px-24 mt-0">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                {/* Sol Sütun - Marka */}
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-[#00d061] rounded flex items-center justify-center text-white font-bold">F</div>
                        <span className="font-bold text-xl text-slate-800">Veyis Bozkurt</span>
                    </div>
                    <p className="text-slate-500 text-sm mb-4">
                        Uşak'ta uzman kadromuzla ağrısız ve sağlıklı bir yaşama adım atın.
                    </p>
                </div>

                {/* Orta Sol - Hizmetler */}
                <div>
                    <h4 className="font-bold text-slate-800 mb-4">Hizmetlerimiz</h4>
                    <ul className="space-y-2 text-sm text-slate-500">
                        <li><Link href="/services" className="hover:text-[#00d061]">FizyoTerapi</Link></li>
                        <li><Link href="/services" className="hover:text-[#00d061]">Manuel Terapi</Link></li>
                        <li><Link href="/services" className="hover:text-[#00d061]">Klinik Pilates</Link></li>
                        <li><Link href="/services" className="hover:text-[#00d061]">Fitness</Link></li>
                        <li><Link href="/services" className="hover:text-[#00d061]">Ortopedik Rehabilitasyon</Link></li>
                    </ul>
                </div>

                {/* Orta Sağ - Hızlı Linkler */}
                <div>
                    <h4 className="font-bold text-slate-800 mb-4">Kurumsal</h4>
                    <ul className="space-y-2 text-sm text-slate-500">
                        <li><Link href="/about" className="hover:text-[#00d061]">Hakkımızda</Link></li>
                        <li><Link href="/booking" className="hover:text-[#00d061]">Online Randevu</Link></li>
                        <li><Link href="/contact" className="hover:text-[#00d061]">İletişim</Link></li>
                    </ul>
                </div>

                {/* Sağ Sütun - İletişim */}
                <div>
                    <h4 className="font-bold text-slate-800 mb-4">İletişim</h4>
                    <ul className="space-y-2 text-sm text-slate-500">
                        <li>📍 Uşak, Merkez </li>
                        <li>📞 +90 543 210 0276</li>
                        <li>✉️ veyisbozkurt2@gmail.com</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
                <p>© {new Date().getFullYear()} Veyis Bozkurt Fizyoterapi Özel SMHB. Tüm hakları saklıdır.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <Link href="#" className="hover:text-slate-600">Gizlilik Politikası</Link>
                    <Link href="#" className="hover:text-slate-600">Kullanım Koşulları</Link>
                </div>
            </div>
        </footer>
    );
}
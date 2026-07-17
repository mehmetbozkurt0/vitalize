import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hakkımızda | Uşak Fizyoterapist Veyis Bozkurt",
    description: "9 yıllık deneyimi ve 1000+ danışanıyla Uşak'ın güvenilir fizyoterapi merkezi. Klinik uzmanlığı hasta odaklı yaklaşımla birleştiriyoruz.",
};

export default function About() {
    return (
        <div className="w-full py-20 px-6 md:px-12 bg-slate-50 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">

                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Fotoğraf Alanı */}
                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-slate-200 overflow-hidden shrink-0 border-4 border-[#e5fbf0] relative shadow-sm">
                        <Image
                            src="/images/veyis.jpeg"
                            alt="Fizyoterapist Veyis Bozkurt"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Metin Alanı */}
                    <div>
                        <div className="inline-block bg-[#e5fbf0] text-[#00d061] px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide mb-4">
                            KURUCU & FİZYOTERAPİST
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Veyis Bozkurt</h1>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Özel SMHB'nin kurucusu olarak, klinik uzmanlığı hasta odaklı şefkatli bir yaklaşımla birleştiriyorum. Amacım, sadece semptomları tedavi etmek değil, ağrının kaynağını bularak kalıcı iyileşme sağlamaktır.
                        </p>

                        <h3 className="font-bold text-slate-900 mb-2">Uzmanlık Alanları:</h3>
                        <ul className="list-disc list-inside text-slate-600 space-y-1 mb-6">
                            <li>Manuel Terapi ve Eklem Mobilizasyonu</li>
                            <li>Ortopedik Rehabilitasyon</li>
                            <li>Spor Yaralanmaları ve Spora Dönüş</li>
                        </ul>

                        <Link href="/booking" className="text-[#00d061] font-semibold hover:underline transition-colors">
                            Hemen bir değerlendirme randevusu alın →
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
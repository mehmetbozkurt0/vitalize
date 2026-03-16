"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">

                {/* YENİLENEN LOGO KISMI */}
                <Link href="/" className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
                    <span className="text-[#00d061] text-2xl md:text-3xl">✚</span> Fzt. Veyis Bozkurt
                </Link>

                {/* Masaüstü Menü (Telefonda Gizli) */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-slate-600 hover:text-[#00d061] font-medium transition-colors">Ana Sayfa</Link>
                    <Link href="/about" className="text-slate-600 hover:text-[#00d061] font-medium transition-colors">Hakkımızda</Link>
                    <Link href="/services" className="text-slate-600 hover:text-[#00d061] font-medium transition-colors">Hizmetler</Link>
                    <Link href="/contact" className="text-slate-600 hover:text-[#00d061] font-medium transition-colors">İletişim</Link>
                </div>

                {/* Masaüstü Buton (Telefonda Gizli) */}
                <div className="hidden md:block">
                    <Link href="/booking" className="bg-[#00d061] hover:bg-[#00b353] text-white px-6 py-2.5 rounded-lg font-bold transition-colors shadow-sm">
                        Randevu Al
                    </Link>
                </div>

                {/* Mobil Menü Butonu */}
                <button
                    className="md:hidden text-slate-900 text-3xl focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobil Açılır Menü */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-2 shadow-lg absolute w-full left-0 animate-in slide-in-from-top-2">
                    <Link href="/" onClick={() => setIsOpen(false)} className="text-slate-600 hover:text-[#00d061] font-medium py-3 border-b border-slate-50">Ana Sayfa</Link>
                    <Link href="/about" onClick={() => setIsOpen(false)} className="text-slate-600 hover:text-[#00d061] font-medium py-3 border-b border-slate-50">Hakkımızda</Link>
                    <Link href="/services" onClick={() => setIsOpen(false)} className="text-slate-600 hover:text-[#00d061] font-medium py-3 border-b border-slate-50">Hizmetler</Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)} className="text-slate-600 hover:text-[#00d061] font-medium py-3 border-b border-slate-50">İletişim</Link>
                    <Link href="/booking" onClick={() => setIsOpen(false)} className="bg-[#00d061] text-white text-center px-6 py-3.5 rounded-xl font-bold mt-4 shadow-md">
                        Randevu Al
                    </Link>
                </div>
            )}
        </nav>
    );
}
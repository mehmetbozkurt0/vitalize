import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar"; // Navbar'ı içe aktar
import Footer from "@/components/footer"; // Footer'ı içe aktar

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Veyis Bozkurt Fizyoterapi | Özel SMHB",
    description: "Turgutlu fizyoterapi, manuel terapi ve sağlıklı yaşam merkezi.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="tr">
        <body className={`${inter.className} bg-white text-slate-900`}>
        <Navbar /> {/* Sayfanın en üstünde Navbar */}
        <main className="min-h-screen">
            {children} {/* Senin sayfa içeriklerin buraya gelecek */}
        </main>
        <Footer /> {/* Sayfanın en altında Footer */}
        </body>
        </html>
    );
}
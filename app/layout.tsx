import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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
        {/* flex, flex-col ve min-h-screen ile footer her zaman en altta kalır */}
        <body className={`${inter.className} bg-slate-50 text-slate-900 flex flex-col min-h-screen`}>
        <Navbar />

        {/* flex-grow ile içerik ekranı kaplar, renk kesilmeleri önlenir */}
        <main className="flex-grow w-full">
            {children}
        </main>

        <Footer />
        </body>
        </html>
    );
}
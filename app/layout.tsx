import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Script from "next/script";
import WhatsAppButton from "@/components/whatsapp";

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
        <head>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=AW-788816291`}
            />
            <Script
                id="google-ads-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'AW-788816291');
                        
                        /* SAYFA GÖRÜNTÜLEME DÖNÜŞÜMÜ */
                        gtag('event', 'conversion', {
                            'send_to': 'AW-788816291/JxlzCMPuoa4bEKPDkfgC',
                            'value': 1.0,
                            'currency': 'TRY'
                        });
                    `,
                }}
            />
        </head>
        <body className={`${inter.className} bg-slate-50 text-slate-900 flex flex-col min-h-screen`}>
        <Navbar />

        <main className="w-full">
            {children}
        </main>

        <Footer />
        <WhatsAppButton />
        </body>
        </html>
    );
}
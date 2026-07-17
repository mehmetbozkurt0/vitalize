import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Script from "next/script";
import WhatsAppButton from "@/components/whatsapp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Uşak Fizyoterapist | Veyis Bozkurt Fizyoterapi Özel SMHB",
    description: "Uşak'ta uzman fizyoterapist. Manuel terapi, ortopedik ve nörolojik rehabilitasyon, klinik pilates. 9 yıllık deneyim, 1000+ danışan. Hemen randevu alın: 0543 210 02 76",
    keywords: "uşak fizyoterapist, uşak fizyoterapi, uşak manuel terapi, uşak rehabilitasyon, fizyoterapist uşak, uşak klinik pilates",
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
                id="gtm-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-TZFXRDDW');
                    `,
                }}
            />
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
        <noscript>
            <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-TZFXRDDW"
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
            ></iframe>
        </noscript>
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
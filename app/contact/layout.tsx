import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Randevu Al | Uşak Fizyoterapist Veyis Bozkurt",
    description: "Uşak Merkez'de fizyoterapi randevusu için bizi arayın: 0543 210 02 76. WhatsApp ile de ulaşabilirsiniz.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
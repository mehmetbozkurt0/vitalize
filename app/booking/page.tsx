import BookingForm from "@/components/booking_form";

export default function BookingPage() {
    return (
        <div className="w-full py-12 px-6 md:px-12 bg-slate-50 min-h-screen">
            <div className="max-w-5xl mx-auto">

                {/* Üst Başlık */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Randevu Alın</h1>
                    <p className="text-slate-500">
                        Size en uygun zamanı seçin ve iyileşme yolculuğunuza bugün başlayın.
                    </p>
                </div>

                {/* Form Bileşeni */}
                <BookingForm />

            </div>
        </div>
    );
}
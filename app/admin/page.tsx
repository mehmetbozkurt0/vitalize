"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {
    // Kimlik Doğrulama Stateleri
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [passwordInput, setPasswordInput] = useState("");
    const [authError, setAuthError] = useState("");
    const [isCheckingAuth, setIsCheckingAuth] = useState(true);

    // Veri Stateleri
    const [appointments, setAppointments] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Sayfa yüklendiğinde oturum var mı diye kontrol et
    useEffect(() => {
        const sessionAuth = sessionStorage.getItem("adminAuth");
        if (sessionAuth === "true") {
            setIsAuthenticated(true);
            fetchAppointments();
        } else {
            setIsCheckingAuth(false);
        }
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const correctPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

        if (passwordInput === correctPassword) {
            sessionStorage.setItem("adminAuth", "true");
            setIsAuthenticated(true);
            setAuthError("");
            setIsCheckingAuth(true); // Yükleme ekranına geçmesi için
            fetchAppointments();
        } else {
            setAuthError("Hatalı şifre girdiniz. Lütfen tekrar deneyin.");
            setPasswordInput("");
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem("adminAuth");
        setIsAuthenticated(false);
        setAppointments([]);
    };

    const fetchAppointments = async () => {
        setIsLoading(true);
        try {
            const { data, error } = await supabase
                .from('appointments')
                .select('*, patients(first_name, last_name, phone)')
                .order('created_at', { ascending: false });

            if (error) throw error;
            if (data) setAppointments(data);
        } catch (error) {
            console.error("Veri çekme hatası:", error);
        } finally {
            setIsLoading(false);
            setIsCheckingAuth(false);
        }
    };

    const updateStatus = async (id: string, newStatus: string) => {
        try {
            const { error } = await supabase
                .from('appointments')
                .update({ status: newStatus })
                .eq('id', id);

            if (error) throw error;

            setAppointments(appointments.map(appt =>
                appt.id === id ? { ...appt, status: newStatus } : appt
            ));
        } catch (error) {
            console.error("Güncelleme hatası:", error);
            alert("Durum güncellenirken bir hata oluştu.");
        }
    };

    // 1. DURUM: Doğrulama kontrol ediliyor veya veriler yükleniyorsa
    if (isCheckingAuth || (isAuthenticated && isLoading)) {
        return <div className="w-full min-h-screen flex items-center justify-center text-slate-500">Sistem yükleniyor...</div>;
    }

    // 2. DURUM: Şifre girilmediyse (Kilit Ekranı)
    if (!isAuthenticated) {
        return (
            <div className="w-full min-h-screen bg-slate-50 flex items-center justify-center px-6">
                <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 w-full max-w-md animate-in fade-in slide-in-from-bottom-4">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-[#e5fbf0] text-[#00d061] rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                            🔒
                        </div>
                        <h1 className="text-2xl font-bold text-slate-900 mb-2">Yönetici Girişi</h1>
                        <p className="text-slate-500 text-sm">Devam etmek için lütfen sistem şifresini girin.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <input
                                type="password"
                                value={passwordInput}
                                onChange={(e) => setPasswordInput(e.target.value)}
                                placeholder="Şifrenizi girin"
                                className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00d061] bg-slate-50 focus:bg-white transition-all text-center tracking-widest"
                            />
                            {authError && <p className="text-red-500 text-sm mt-2 text-center font-medium">{authError}</p>}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#00d061] hover:bg-[#00b353] text-white py-4 rounded-xl font-bold transition-all shadow-md flex items-center justify-center gap-2"
                        >
                            Giriş Yap <span className="text-xl">→</span>
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    // 3. DURUM: Şifre doğruysa (Ana Yönetim Paneli)
    return (
        <div className="w-full min-h-screen bg-slate-50 py-12 px-6 md:px-12 animate-in fade-in">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 mb-1">Yönetim Paneli</h1>
                        <p className="text-slate-500 text-sm">Gelen randevu taleplerini buradan yönetebilirsiniz.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 text-sm text-slate-600 font-medium shadow-sm">
                            Toplam: {appointments.length}
                        </div>
                        <button
                            onClick={handleLogout}
                            className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm"
                        >
                            Çıkış Yap
                        </button>
                    </div>
                </div>

                {/* Tablo Alanı */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                            <tr className="bg-slate-100/50 border-b border-slate-100 text-slate-500 text-sm uppercase tracking-wider">
                                <th className="p-5 font-medium">Tarih & Saat</th>
                                <th className="p-5 font-medium">Danışan</th>
                                <th className="p-5 font-medium">Hizmet</th>
                                <th className="p-5 font-medium">Durum</th>
                                <th className="p-5 font-medium text-right">İşlem</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                            {appointments.map((appt) => (
                                <tr key={appt.id} className="hover:bg-slate-50 transition-colors group">
                                    <td className="p-5">
                                        <div className="font-semibold text-slate-900">{appt.appointment_date.split("-").reverse().join(".")}</div>
                                        <div className="text-sm text-slate-500 flex items-center gap-1">
                                            <span className="text-[#00d061]">🕒</span> {appt.appointment_time}
                                        </div>
                                    </td>
                                    <td className="p-5">
                                        <div className="font-semibold text-slate-900">{appt.patients?.first_name} {appt.patients?.last_name}</div>
                                        <div className="text-sm text-slate-500">{appt.patients?.phone}</div>
                                    </td>
                                    <td className="p-5 text-slate-700">{appt.service}</td>
                                    <td className="p-5">
                      <span className={`text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide ${
                          appt.status === 'bekliyor' ? 'bg-amber-100 text-amber-700' :
                              appt.status === 'onaylandi' ? 'bg-green-100 text-green-700' :
                                  'bg-red-100 text-red-700'
                      }`}>
                        {appt.status}
                      </span>
                                    </td>
                                    <td className="p-5 text-right">
                                        <div className="flex justify-end gap-2">
                                            {appt.status === 'bekliyor' && (
                                                <>
                                                    <button
                                                        onClick={() => updateStatus(appt.id, 'onaylandi')}
                                                        className="bg-green-500 hover:bg-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
                                                    >
                                                        Onayla
                                                    </button>
                                                    <button
                                                        onClick={() => updateStatus(appt.id, 'iptal')}
                                                        className="bg-red-500 hover:bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
                                                    >
                                                        İptal
                                                    </button>
                                                </>
                                            )}
                                            {appt.status !== 'bekliyor' && (
                                                <button
                                                    onClick={() => updateStatus(appt.id, 'bekliyor')}
                                                    className="text-slate-400 hover:text-slate-600 text-xs font-medium px-3 py-1.5 border border-slate-200 rounded-lg transition-colors"
                                                >
                                                    Geri Al
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {appointments.length === 0 && (
                                <tr><td colSpan={5} className="p-10 text-center text-slate-500">Henüz hiçbir randevu bulunmuyor.</td></tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}
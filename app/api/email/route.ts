import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Şimdilik test amaçlı API anahtarını buraya koyacağız, sonra .env dosyasına taşıyacağız
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        // Formdan gelecek olan bilgileri yakalıyoruz
        const { firstName, lastName, phone, service, date, time } = await request.json();

        // Mail gönderme işlemi
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>', // Resend'in varsayılan test göndericisi
            to: ['mehmet.64.b@gmail.com'], // Veyis Bey'in veya senin test mail adresini buraya yazacağız
            subject: '🚨 Yeni Randevu Talebi!',
            html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #00d061;">Yeni Bir Randevu Talebi Aldınız!</h2>
          <p>Sistem üzerinden yeni bir danışan randevu oluşturdu. Detaylar aşağıdadır:</p>
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <p><strong>👤 Danışan:</strong> ${firstName} ${lastName}</p>
            <p><strong>📞 Telefon:</strong> ${phone}</p>
            <p><strong>📋 Hizmet:</strong> ${service}</p>
            <p><strong>📅 Tarih:</strong> ${date.split("-").reverse().join(".")} - ${time}</p>
          </div>
          <p style="margin-top: 20px; font-size: 14px; color: #666;">
            İşlem yapmak veya detayları görmek için yönetim paneline giriş yapın.
          </p>
        </div>
      `,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ message: 'Mail başarıyla gönderildi' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 });
    }
}
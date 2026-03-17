import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        const data = await resend.emails.send({
            from: 'FizyoCenter Iletisim Formu',
            to: ['mehmet.64.b@gmail.com', 'veyisbozkurt2@gmail.com'],
            subject: `Yeni Mesaj: ${subject}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
                    <div style="background-color: #00d061; padding: 24px; text-align: center;">
                        <h2 style="color: white; margin: 0; font-size: 24px;">Yeni İletişim Mesajı</h2>
                    </div>
                    <div style="padding: 32px; background-color: #ffffff;">
                        <p style="color: #64748b; font-size: 16px; margin-bottom: 24px;">Web sitenizdeki iletişim formundan yeni bir mesaj aldınız. Detaylar aşağıdadır:</p>
                        
                        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 24px;">
                            <p style="margin: 0 0 12px 0; color: #0f172a;"><strong style="color: #64748b; width: 100px; display: inline-block;">Ad Soyad:</strong> ${name}</p>
                            <p style="margin: 0 0 12px 0; color: #0f172a;"><strong style="color: #64748b; width: 100px; display: inline-block;">E-posta:</strong> ${email}</p>
                            <p style="margin: 0; color: #0f172a;"><strong style="color: #64748b; width: 100px; display: inline-block;">Konu:</strong> ${subject}</p>
                        </div>
                        
                        <h3 style="color: #0f172a; margin-bottom: 12px; font-size: 16px;">Mesaj İçeriği:</h3>
                        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; color: #334155; line-height: 1.6; border-left: 4px solid #00d061;">
                            ${message}
                        </div>
                    </div>
                </div>
            `,
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
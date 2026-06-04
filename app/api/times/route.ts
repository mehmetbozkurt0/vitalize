import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function GET(request: Request) {
  try {
    // 1. İstemciden (frontend) gelen tarihi alıyoruz
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');

    if (!date) {
      return NextResponse.json({ error: 'Tarih parametresi zorunludur.' }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    // DİKKAT: Burada anon_key DEĞİL, RLS kurallarını delip geçen gizli service_role_key kullanıyoruz!
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

    const supabase = createClient(supabaseUrl, supabaseServiceKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    // 2. Veritabanından o tarihteki dolu randevuları çekiyoruz
    const { data, error } = await supabase
      .from('appointments')
      .select('appointment_time')
      .eq('appointment_date', date)
      .neq('status', 'iptal');

    if (error) throw error;

    // 3. İsim, ID gibi hassas verileri eziyor, SADECE SAATLERİ temiz bir liste halinde arayüze gönderiyoruz.
    const times = data ? data.map(appt => appt.appointment_time) : [];

    return NextResponse.json({ bookedTimes: times });
  } catch (error: any) {
    console.error('Saatleri Çekme Hatası:', error);
    return NextResponse.json(
      { error: 'Saatler alınırken bir hata oluştu.' },
      { status: 500 }
    );
  }
}
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// RLS duvarını sunucu tarafında güvenle aşmak için Service Role kullanıyoruz
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, phone, service, date, time, notes } = body;

    // Eksik veri kontrolü
    if (!firstName || !lastName || !phone || !service || !date || !time) {
      return NextResponse.json(
        { error: 'Lütfen zorunlu alanları doldurun.' },
        { status: 400 }
      );
    }

    let patientId;

    // 1. Telefon numarasına göre mevcut hastayı ara
    const { data: existingPatients, error: searchError } = await supabase
      .from('patients')
      .select('id')
      .eq('phone', phone);

    if (searchError) throw searchError;

    if (existingPatients && existingPatients.length > 0) {
      patientId = existingPatients[0].id;
    } else {
      // 2. Hasta kayıtlı değilse yeni hasta oluştur
      const { data: newPatient, error: insertPatientError } = await supabase
        .from('patients')
        .insert([{ first_name: firstName, last_name: lastName, phone: phone }])
        .select('id')
        .single();

      if (insertPatientError) throw insertPatientError;
      patientId = newPatient.id;
    }

    // 3. Alınan patientId ile randevuyu oluştur
    const { error: insertApptError } = await supabase
      .from('appointments')
      .insert([
        {
          patient_id: patientId,
          service: service,
          appointment_date: date,
          appointment_time: time,
          notes: notes || '',
        },
      ]);

    if (insertApptError) throw insertApptError;

    // Her şey başarılıysa frontend'e olumlu dön
    return NextResponse.json({ success: true, message: 'Randevu başarıyla kaydedildi.' });
  } catch (error: any) {
    console.error('Randevu API Hatası:', error);
    return NextResponse.json(
      { error: error.message || 'Veritabanı işlemi sırasında bir hata oluştu.' },
      { status: 500 }
    );
  }
}
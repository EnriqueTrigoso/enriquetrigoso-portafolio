import { EmailTemplate } from '@/components/pages/home/Contact/EmailTemplate';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { ContactFormSchema } from '@/components/pages/home/Contact/schema/contactFormSchema';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {

    try {

        const body = await request.json();

        const result = ContactFormSchema.safeParse(body);

        if (!result.success) {
            return new NextResponse(JSON.stringify({ error: 'Datos inválidos' }), { status: 400 });
        }

        const { name, email, phone, service, message } = result.data;;


        const { data, error } = await resend.emails.send({
            from: 'Enrique Portafolio <onboarding@resend.dev>',
            to: ['enrique.el.capo@gmail.com'],
            subject: 'Vacante Disponible',
            react: EmailTemplate({ name, email, phone, service, message }),
        });

        if (error) {
            return new NextResponse(JSON.stringify({ error }), { status: 500 });
        }

        return new NextResponse(JSON.stringify(data));

    } catch (error) {
        console.log('error', error)
        return new NextResponse(JSON.stringify({ error }), { status: 500 });
    }

}
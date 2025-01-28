import { z } from 'zod';

export const ContactFormSchema = z.object({
    name: z.string().min(1, '').refine((value) => value.trim() !== '', {
        message: '',
    }),
    email: z.string().email(''),
    phone: z.string().min(11, '').refine((value) => value.startsWith('9'), {
        message: '',
    }),
    service: z.string().min(1, ''),
    message: z.string().min(1, '').refine((value) => value.trim() !== '', {
        message: '',
    }),
});
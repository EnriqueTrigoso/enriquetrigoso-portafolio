'use client';
import { motion } from 'motion/react';
import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from '@/components/ui/textarea'
import { BorderTrail } from '@/components/ui/border-trail'
import { Input, ShadcnInputClassname } from '@/components/ui/input'
import { useTranslations } from 'next-intl'
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactFormSchema } from './schema/contactFormSchema';
import { z } from 'zod';
import Cleave from 'cleave.js/react'
import { cn } from '@/lib/utils'
import { GlowEffect } from '@/components/ui/glow-effect';
import { TextShimmerWave } from '@/components/ui/text-shimmer-wave';

const Form = () => {

    const t = useTranslations("contact")

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<z.TypeOf<typeof ContactFormSchema>>({
        resolver: zodResolver(ContactFormSchema),
    });

    const [isFetching, setIsFetching] = useState(false);

    const onSubmit = async (formData: z.TypeOf<typeof ContactFormSchema>) => {

        setIsFetching(true)

        const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
            console.log('Email sent successfully:', data);
        } else {
            console.error('Error sending email:', data);
        }

        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsFetching(false)
    };

    return (
        <div className='relative'>

            <motion.div
                className='pointer-events-none absolute inset-0'
                animate={{
                    opacity: isFetching ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                    ease: 'easeOut',
                }}
            >
                <GlowEffect
                    colors={['#393E41', '#D3D0CB', '#E7E5DF', '#E7BB41']}
                    mode='flowHorizontal'
                    blur='medium'
                    duration={2}
                />
            </motion.div>

            <form
                id="contact-form"
                onSubmit={handleSubmit(onSubmit)}
                className="relative space-y-6 bg-neutral-800 p-8 rounded-xl shadow-lg"
            >
                <BorderTrail
                    style={{
                        boxShadow:
                            '0px 0px 60px 100px rgb(255 255 255 / 50%), 0 0 20px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
                    }}
                    size={50}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


                    <div>
                        <Input
                            type="text"
                            {...register('name')}
                            placeholder={t("inputs.name.placeholder")}
                            className="w-full border border-gray-500 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent" />
                        {errors.name && <div className='text-red-500 text-xs mt-1'>{t("inputs.name.error_msg")}</div>}
                    </div>

                    <div>
                        <Input
                            type="text"
                            {...register('email')}
                            placeholder={t("inputs.email.placeholder")}
                            className="w-full border border-gray-500 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent" />
                        {errors.email && <div className='text-red-500 text-xs mt-1'>{t("inputs.email.error_msg")}</div>}
                    </div>

                    <div>

                        <Controller
                            name="phone"
                            control={control}
                            render={({ field: { onChange, onBlur } }) => (
                                <Cleave
                                    placeholder={t("inputs.phone.placeholder")}
                                    options={
                                        {
                                            delimiter: ' ',
                                            blocks: [3, 3, 3],
                                            numericOnly: true,
                                        }}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    className={cn(
                                        ShadcnInputClassname,
                                        "w-full border border-gray-500 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent")}
                                />

                            )}
                        />

                        {errors.phone && <div className='text-red-500 text-xs mt-1'>{t("inputs.phone.error_msg")}</div>}
                    </div>

                    <div>
                        <Controller
                            name="service"
                            control={control}
                            render={({ field: { onChange } }) => (

                                <Select {...register('service')} onValueChange={onChange}>
                                    <SelectTrigger className="border-gray-500 text-paragraph" >
                                        <SelectValue placeholder={t("inputs.service.placeholder")} />
                                    </SelectTrigger>
                                    <SelectContent className='z-10 bg-black border-gray-500 text-paragraph' >
                                        {
                                            t.raw("inputs.service.elements").map((elem: string, index: string) => (
                                                <SelectItem key={index} value={elem}>{elem}</SelectItem>
                                            ))
                                        }

                                    </SelectContent>
                                </Select>

                            )}
                        />

                        {errors.service &&
                            <div className='text-red-500 text-xs mt-1'>
                                {t("inputs.service.error_msg")}
                            </div>
                        }

                    </div>

                </div>

                <div>
                    <Textarea
                        {...register('message')}
                        placeholder={t("inputs.message.placeholder")}
                        className="w-full border border-gray-500 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-paragraph"
                    />
                    {errors.message && <div className='text-red-500 text-xs mt-1'>{t("inputs.message.error_msg")}</div>}
                </div>

                <div className='flex justify-end'>
                    <button
                        type='submit'
                        className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-paragraph transition hover:scale-110">
                        <span>
                            {
                                isFetching ? (
                                    <TextShimmerWave
                                        className='[--base-color:#0D74CE] [--base-gradient-color:#5EB1EF]'
                                        duration={1.5}
                                        spread={1}
                                        zDistance={1}
                                        scaleDistance={1.1}
                                        rotateYDistance={20}
                                    >
                                        {t("button_text.sending")}
                                    </TextShimmerWave>
                                ) : (
                                    t("button_text.normal")
                                )
                            }
                        </span>
                        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                            <div className="relative h-full w-8 bg-white/20"></div>
                        </div>
                    </button>
                </div>

            </form>
        </div>
    )
}

export default Form
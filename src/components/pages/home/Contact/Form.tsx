import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from '@/components/ui/textarea'
import { BorderTrail } from '@/components/ui/border-trail'
import { Input } from '@/components/ui/input'
import { useTranslations } from 'next-intl'

const Form = () => {

    const t = useTranslations("contact")

    return (
        <form
            id="contact-form"
            method="POST"
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

                <Input type="text"
                    name="name"
                    placeholder={t("inputs.name.placeholder")}
                    className="w-full border border-gray-500 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent" />

                <Input
                    type="email"
                    name="email"
                    placeholder={t("inputs.email.placeholder")}
                    className="w-full border border-gray-500 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent" />

                <Input
                    type="text"
                    name="phone"
                    placeholder={t("inputs.phone.placeholder")}
                    className="w-full border border-gray-500 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent" />

                <Select>
                    <SelectTrigger className="w-[280px] border-gray-500 text-paragraph">
                        <SelectValue placeholder={t("inputs.service.placeholder")} />
                    </SelectTrigger>
                    <SelectContent className='z-10 bg-black border-gray-500 text-paragraph'>
                        {
                            t.raw("inputs.service.elements").map((elem: string, index: string) => (
                                <SelectItem key={index} value={elem}>{elem}</SelectItem>
                            ))
                        }

                    </SelectContent>
                </Select>

            </div>

            <Textarea
                name="message"
                placeholder={t("inputs.message.placeholder")}
                className="w-full border border-gray-500 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-paragraph"
            />

            <div className='flex justify-end'>
                <button
                    className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-paragraph transition hover:scale-110">
                    <span>{t("button_text")}</span>
                    <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                        <div className="relative h-full w-8 bg-white/20"></div>
                    </div>
                </button>
            </div>

        </form>
    )
}

export default Form
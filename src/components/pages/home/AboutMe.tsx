import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import TitleLines from '@/components/ui/title-lines'

const AboutMe = () => {

    const t = useTranslations("about-me")


    return (
        <div className='bg-black py-12'>
            <div className='container'>
                <div className='flex gap-6'>

                    <div className='bg-[#141414] p-2 rounded-xl w-[600px]'>
                        <Image
                            alt={"Enrique Trigoso"}
                            width={1300}
                            height={681}
                            className="h-full w-full rounded-xl"
                            src={'/assets/home/about_me/aboutme.webp'} />
                    </div>


                    <div className='flex-1'>

                        <TitleLines>
                            {t("title")}
                        </TitleLines>

                        <p className='text-paragraph'>
                            {t.rich("description", {
                                br: () => <br />
                            })}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutMe
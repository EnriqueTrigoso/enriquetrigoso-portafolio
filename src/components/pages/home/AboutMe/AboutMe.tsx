"use client"
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import TitleLines from '@/components/ui/title-lines'
import { Eye, FileDown } from 'lucide-react'
import { BorderTrail } from '@/components/ui/border-trail'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/ui/text-effect'

const AboutMe = () => {

    const t = useTranslations("about-me")

    return (
        <section className='py-12 overflow-hidden' id='about-me'>
            <div className='container'>
                <div className='flex flex-col lg:flex-row gap-6'>

                    <div
                        className='max-w-[550px] mx-auto lg:flex-1 relative bg-border p-2 rounded-xl'
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        <BorderTrail
                            style={{
                                boxShadow:
                                    '0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
                            }}
                            size={200}
                        />
                        <Image
                            alt={"Enrique Trigoso"}
                            width={1300}
                            height={681}
                            className="w-full max-w-[550px] lg:h-full lg:w-full lg:max-w-none rounded-xl object-cover"
                            src={'/assets/home/about_me/aboutme.webp'} />
                    </div>

                    <div
                        className='flex-1'
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    // data-aos-easing="ease-in-sine"
                    >

                        <TitleLines>
                            <TextEffect preset='fade-in-blur' speedReveal={1.1} speedSegment={0.3}>
                                {t("title")}
                            </TextEffect>
                        </TitleLines>


                        <p className='text-paragraph'>
                            {t.rich("description", {
                                br: () => <br />
                            })}
                        </p>

                        <div className='mt-6 md:float-end'>

                            <div className='flex gap-4 justify-between md:justify-end mt-2'

                            >
                                <div data-aos="fade-up"
                                    data-aos-easing="linear"
                                    data-aos-duration="400">

                                    <Button

                                    >
                                        <Eye />
                                        <p>{t("buttons.see_cv.text")}</p>
                                    </Button>
                                </div>

                                <div data-aos="fade-up"
                                    data-aos-easing="linear"
                                    data-aos-duration="500"
                                >
                                    <Button

                                    >
                                        <FileDown />
                                        <p>{t("buttons.download_cv.text")}</p>
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default AboutMe
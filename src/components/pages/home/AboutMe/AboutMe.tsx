import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import TitleLines from '@/components/ui/title-lines'
import { Eye, FileDown } from 'lucide-react'
import { BorderTrail } from '@/components/ui/border-trail'
import { Button } from '@/components/ui/button'

const AboutMe = () => {

    const t = useTranslations("about-me")

    return (
        <section className='py-12' id='about-me'>
            <div className='container'>
                <div className='flex gap-6'>

                    <div className='relative bg-border p-2 rounded-xl w-[600px]'>
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

                        <div className='mt-6 float-end'>

                            <div className='flex gap-4 justify-end mt-2'>

                                <Button>
                                    <Eye />
                                    <p>{t("buttons.see_cv.text")}</p>
                                </Button>

                                <Button>
                                    <FileDown />
                                    <p>{t("buttons.download_cv.text")}</p>
                                </Button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AboutMe
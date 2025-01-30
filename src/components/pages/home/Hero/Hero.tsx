'use client'
import { Button } from '@/components/ui/button';
import Sky from '@/components/ui/sky'
import { cn, scrollTo } from '@/lib/utils';
import { ChevronDown, Facebook, Github, Instagram, Linkedin, Send } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import useWaitWelcome from '@/components/hooks/useWaitWelcome';

const available: boolean = true

const Hero = () => {

    const t = useTranslations("home.hero");

    const { visible } = useWaitWelcome()

    return (
        <section className='relative w-full h-screen flex flex-col overflow-hidden p-0' id='hero'>
            <div className='flex items-center justify-center content-center flex-row flex-nowrap gap-2.5 h-min overflow-visible p-0 relative w-full'>
                <div className='flex-1 h-[430px] opacity-[0.44] relative filter grayscale'>
                    <video preload="auto" autoPlay loop muted playsInline className='cursor-auto w-full h-full rounded-none block object-cover bg-transparent object-center'>
                        <source src="assets/home/hero/hero.mp4" type="video/mp4" />
                    </video>
                </div>

                <div
                    className='flex flex-col gap-7 items-center absolute top-full -mt-56'
                >
                    {
                        !visible && (
                            <>
                                <div
                                    className='rounded-full overflow-hidden w-44 h-44 bg-gray-200 '
                                    data-aos="zoom-out-up"
                                    data-aos-duration="1500"
                                    data-aos-delay='0'
                                >
                                    <Image
                                        alt='Enrique Trigoso'
                                        src={'/assets/home/hero/EnriqueTrigoso.png'}
                                        width={860}
                                        height={964}
                                        className="w-full h-full"
                                        style={{
                                            objectFit: "cover",
                                            objectPosition: "center",
                                        }}
                                        priority={true}
                                    />

                                </div>

                                <div
                                    className='text-center mt-3 flex flex-col gap-4'
                                    data-aos="zoom-out-up"
                                    data-aos-duration="1500"
                                    data-aos-delay='0'
                                >

                                    <div className='flex gap-4 items-center justify-center'>
                                        <div className='flex justify-center items-center'>
                                            <span className={cn(
                                                "animate-ping absolute inline-flex h-3 w-3 rounded-full opacity-75",
                                                available ? 'bg-green-400' : 'bg-red-500'
                                            )}></span>
                                            <div className={cn(
                                                'rounded-full w-1 h-1',
                                                available ? 'bg-green-400' : 'bg-red-500'
                                            )}></div>
                                        </div>
                                        <p className='text-paragraph text-sm'>
                                            {available ? t("state.available") : t("state.not-available")}
                                        </p>
                                    </div>


                                    <h1
                                        className='text-6xl text-white font-instrument-serif italic'
                                        data-aos='fade-right'
                                        data-aos-duration='1000'
                                        data-aos-delay='200'
                                    >{t("title")}</h1>

                                    <p
                                        className='text-paragraph'
                                        data-aos='fade-right'
                                        data-aos-duration='1000'
                                        data-aos-delay='400'
                                    >{t("occupation")}</p>
                                </div>

                                <div
                                    className='flex gap-6 text-[#7a7a7a]'
                                    data-aos='fade-right'
                                    data-aos-duration='1000'
                                    data-aos-delay='600'
                                >

                                    <a href={t('social.github.url')} target='_blank'>
                                        <Github className='hover:text-white transition duration-300 hover:scale-110' />
                                    </a>

                                    <a href={t('social.linkedin.url')} target='_blank'>
                                        <Linkedin className='hover:text-white transition duration-300 hover:scale-110' />
                                    </a>

                                    <a href={t('social.facebook.url')} target='_blank'>
                                        <Facebook className='hover:text-white transition duration-300 hover:scale-110' />
                                    </a>

                                    <a href={t('social.instagram.url')} target='_blank'>
                                        <Instagram className='hover:text-white transition duration-300 hover:scale-110' />
                                    </a>
                                </div>

                                <Button
                                    variant="primary"
                                    onClick={() => scrollTo('contact')}
                                    data-aos='fade-right'
                                    data-aos-duration='1000'
                                    data-aos-delay='800'
                                >
                                    <Send />
                                    {t("button.text")}
                                    <div className="animate-shine-infinite absolute inset-0 -top-[20px] flex h-[calc(100%+40px)] w-full justify-center blur-[12px]">
                                        <div className="relative h-full w-8 bg-white/30"></div>
                                    </div>
                                </Button>
                            </>
                        )
                    }

                </div>

            </div>

            <div className='h-full'>
                <Sky />
            </div>

            <div className='absolute w-full bottom-5 flex justify-center items-center'>
                <a className='animate-bounce' onClick={() => {
                    scrollTo('about-me')
                }}>
                    <ChevronDown width={32} height={32} />
                </a>
            </div>



        </section>
    )
}

export default Hero
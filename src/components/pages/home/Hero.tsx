import { Button } from '@/components/ui/button';
// import Rays from '@/components/ui/rays'
import Sky from '@/components/ui/sky'
import { ChevronDown, Facebook, Github, Linkedin, Send } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';


const Hero = () => {

    const t = useTranslations("hero");


    return (
        <div className='w-full h-screen flex flex-col'>

            <div className='flex items-center justify-center content-center flex-row flex-nowrap gap-2.5 h-min overflow-visible p-0 relative w-full'>
                <div className='flex-1 h-[430px] opacity-[0.44] relative filter grayscale'>
                    <video autoPlay loop muted playsInline className='cursor-auto w-full h-full rounded-none block object-cover bg-transparent object-center'>
                        <source src="assets/hero.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className='flex flex-col gap-5 items-center absolute top-full -mt-20'>

                    <div className='rounded-full overflow-hidden w-44 h-44 bg-gray-200'>
                        <Image
                            alt='Enrique Trigoso'
                            src={'/assets/EnriqueTrigoso.png'}
                            width={860}
                            height={964}
                            className="w-full h-full"
                            style={{
                                objectFit: "cover",
                                objectPosition: "center",
                            }} />
                    </div>

                    <div className='text-center mt-3 flex flex-col gap-4'>

                        <div className='flex gap-4 items-center justify-center'>
                            <div className='flex justify-center items-center'>
                                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75"></span>
                                <div className='rounded-full bg-green-400 w-1 h-1'></div>
                            </div>
                            <p className='text-paragraph text-sm'>{t("state.available")}</p>
                        </div>


                        <h1 className='text-6xl text-white font-instrument-serif italic'>{t("title")}</h1>

                        <p className='text-paragraph'>{t("occupation")}</p>
                    </div>

                    <div className='flex gap-3 text-[#7a7a7a]'>
                        <Github />
                        <Facebook />
                        <Linkedin />
                    </div>

                    <Button variant="primary" className='rounded-3xl px-5'>
                        <Send />
                        {t("button.text")}
                    </Button>
                </div>

            </div>

            <div className='h-full overflow-hidden'>
                <Sky />
            </div>

            <div className='absolute w-full bottom-5 flex justify-center items-center'>
                <a href="" className='animate-bounce'>
                    <ChevronDown width={32} height={32} />
                </a>
            </div>



        </div>
    )
}

export default Hero
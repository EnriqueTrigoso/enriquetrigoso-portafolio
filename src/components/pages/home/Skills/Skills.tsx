import { skills_icons } from '@/components/ui/icons'
import TitleLines from '@/components/ui/title-lines'
import { Cpu, Network, Wrench } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const Skills = () => {

    const t = useTranslations('skills')


    return (
        <section className='py-10'>

            <div className='container'>
                <TitleLines>
                    {t('title')}
                </TitleLines>


                <div>

                    <div className='flex gap-8'>

                        {/* Technologies */}
                        <div>

                            <div className='flex gap-2 justify-center'>
                                <Cpu />
                                <h2 className='text-base mb-4 text-center'>{t("technologies_title")}</h2>
                            </div>

                            <div className='flex gap-6 flex-wrap justify-center'>
                                {
                                    t.raw("technologies").map((technology: string, index: string) => {

                                        return (
                                            <div key={index} className='w-20 h-28 flex flex-col items-center gap-1'>

                                                <div className='relative w-20 h-20 bg-white rounded-xl flex items-center justify-center'>
                                                    <Image
                                                        src={skills_icons[technology]}
                                                        alt='technology'
                                                        fill
                                                        className="rounded-lg p-2 object-contain object-center pointer-events-none"
                                                    />
                                                </div>
                                                <p className='text-xs text-center'>{technology}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>


                        {/* Tools */}
                        <div>
                            <div className='flex gap-2 justify-center'>
                                <Wrench />
                                <h2 className='text-base mb-4 text-center'>{t("tools_title")}</h2>
                            </div>

                            <div className='flex gap-6 flex-wrap justify-center'>
                                {
                                    t.raw("tools").map((technology: string, index: string) => {

                                        return (
                                            <div key={index} className='w-20 h-28 flex flex-col items-center gap-1'>

                                                <div className='relative w-20 h-20 bg-white rounded-xl overflow-hidden p-1 flex items-center justify-center'>
                                                    <Image
                                                        src={skills_icons[technology]}
                                                        alt='technology'
                                                        fill
                                                        className="rounded-lg p-2 object-contain object-center pointer-events-none"
                                                    />
                                                </div>
                                                <p className='text-xs text-center'>{technology}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        {/* Methodologies */}
                        <div>

                            <div className='flex gap-6 flex-wrap justify-center'>
                                <Network />
                                <h2 className='text-base mb-4 text-center'>{t("methodologies_title")}</h2>
                            </div>

                            <div className='flex gap-2 justify-center'>
                                {
                                    t.raw('methodologies').map((elem: string, index: string) => {
                                        return (
                                            <div key={index} className='px-2 py-1 bg-white rounded-lg w-20 h-20 flex items-center justify-center'>
                                                <p className='text-black font-instrument-serif text-xl font-medium text-center pointer-events-none select-none'>{elem}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Skills
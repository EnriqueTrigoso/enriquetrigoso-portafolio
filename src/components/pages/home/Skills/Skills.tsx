"use client"
import { skills_icons } from '@/components/ui/icons'
import { motion } from "framer-motion";
import TitleLines from '@/components/ui/title-lines'
import { Cpu, Network, Wrench } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import CardEffect from './CardEffect';

const itemVariants = {
    hidden: {
        opacity: 0,
        filter: "blur(12px)",
        y: -60,
        rotateX: 90,
    },
    visible: {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        rotateX: 0,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 1,
        },
    },
};

const Skills = () => {

    const t = useTranslations('skills')

    return (
        <section className='py-10' id='skills'>

            <div className='container'>

                <TitleLines className='mb-8'>
                    {t('title')}
                </TitleLines>

                <div>

                    <div className='flex flex-col gap-10'>

                        {/* Technologies */}
                        <div>


                            <div className='flex gap-2 justify-start' data-aos="fade-right" data-aos-duration="1000">
                                <Cpu />
                                <h2 className='text-base mb-4 text-center'>{t("technologies_title")}</h2>
                            </div>

                            <CardEffect className="flex gap-6 flex-wrap justify-start">
                                {t.raw("technologies").map((technology: string, index: string) => (
                                    <motion.div
                                        key={index}
                                        className="w-20 h-28 flex flex-col items-center gap-1"
                                        variants={itemVariants}
                                    >
                                        <div className="relative w-20 h-20 bg-[#2b2d2e] rounded-xl flex items-center justify-center">
                                            <Image
                                                src={skills_icons[technology]}
                                                alt="technology"
                                                fill
                                                sizes="(max-width: 80px) 80px"
                                                className="rounded-lg p-2 object-contain object-center pointer-events-none"
                                            />
                                        </div>
                                        <p className="text-xs text-center">{technology}</p>
                                    </motion.div>
                                ))}
                            </CardEffect>

                        </div>


                        {/* Tools */}
                        <div>
                            <div className='flex gap-2 justify-start' data-aos="fade-right" data-aos-duration="1000">
                                <Wrench />
                                <h2 className='text-base mb-4 text-center'>{t("tools_title")}</h2>
                            </div>

                            <CardEffect className="flex gap-6 flex-wrap justify-start">
                                {
                                    t.raw("tools").map((technology: string, index: string) => {

                                        return (
                                            <motion.div
                                                key={index}
                                                className="w-20 h-28 flex flex-col items-center gap-1"
                                                variants={itemVariants}
                                            >
                                                <div className='relative w-20 h-20 bg-[#2b2d2e] rounded-xl overflow-hidden p-1 flex items-center justify-center'>
                                                    <Image
                                                        src={skills_icons[technology]}
                                                        alt='technology'
                                                        fill
                                                        sizes="(max-width: 80px) 80px"
                                                        className="rounded-lg p-2 object-contain object-center pointer-events-none"
                                                    />
                                                </div>
                                                <p className='text-xs text-center'>{technology}</p>
                                            </motion.div>
                                        )
                                    })
                                }
                            </CardEffect>

                        </div>

                        {/* Methodologies */}
                        <div>

                            <div className='flex gap-6 justify-start' data-aos="fade-right" data-aos-duration="1000">
                                <Network />
                                <h2 className='text-base mb-4 text-center'>{t("methodologies_title")}</h2>
                            </div>

                            <CardEffect className="flex gap-6 flex-wrap justify-start">
                                {
                                    t.raw('methodologies').map((elem: string, index: string) => {
                                        return (
                                            <motion.div
                                                key={index}
                                                className='px-2 py-1 bg-[#2b2d2e] rounded-lg w-20 h-20 flex items-center justify-center'
                                                variants={itemVariants}
                                            >
                                                <p className='text-paragraph font-instrument-serif text-xl font-medium text-center pointer-events-none select-none'>{elem}</p>
                                            </motion.div>
                                        )
                                    })
                                }
                            </CardEffect>


                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Skills;
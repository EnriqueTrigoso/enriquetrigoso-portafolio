"use client"
import TitleLines from '@/components/ui/title-lines'
import { useTranslations } from 'next-intl'
import Card from './Card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Project } from '@/lib/types'
import { InfiniteSlider } from '@/components/ui/infinite-slider'


const Projects = () => {

    const t = useTranslations("projects")

    return (
        <section className='p-8 overflow-hidden' id='projects'>
            <div className='container'>

                <TitleLines className="mb-6 text-center">
                    {t("title")}
                </TitleLines>

                <InfiniteSlider duration={35} durationOnHover={85} gap={24}>
                    {
                        t.raw("list").map((project: Project, index: number) => {
                            return (
                                <div className="w-[400px]" key={index} >
                                    <Card project={project} index={index} />
                                </div>

                            )
                        })
                    }
                </InfiniteSlider>

                <div className='flex justify-center mt-10'
                    data-aos="fade-up"
                    data-aos-delay='150'
                    data-aos-duration="1000">
                    <Link href={t("button.path")}>
                        <Button variant='primary'>
                            {t("button.text")}
                            <ArrowRight />
                        </Button>
                    </Link>
                </div>

            </div>

        </section>
    )
}

export default Projects;
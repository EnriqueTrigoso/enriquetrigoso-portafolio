"use client"
import TitleLines from '@/components/ui/title-lines'
import { useTranslations } from 'next-intl'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Card from './Card'
import AutoScroll from 'embla-carousel-auto-scroll'
import { useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { type CarouselApi } from "@/components/ui/carousel"
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Project } from '@/lib/types'


const options: EmblaOptionsType = {
    align: "start",
    loop: true,
}

const Projects = () => {

    const t = useTranslations("projects")

    const [api, setApi] = useState<CarouselApi>()

    useEffect(() => {
        if (!api) {
            return
        }

        api.on("slideFocus", () => {
            console.log('entro en focus')
        })
    }, [api])

    return (
        <section className='p-8' id='projects'>
            <div className='container'>

                <TitleLines className="mb-6">
                    {t("title")}
                </TitleLines>

                <Carousel
                    setApi={setApi}
                    opts={options}
                    plugins={[
                        AutoScroll({
                            speed: 1,
                        }),
                    ]}
                    onMouseEnter={(event) => console.log(event)}
                    onMouseLeave={(event) => console.log(event)}
                >
                    <CarouselContent>

                        {
                            t.raw("list").map((project: Project, index: string) => {
                                return (
                                    <CarouselItem className="basis-1/3 pl-10" key={index}>
                                        <Card project={project} />
                                    </CarouselItem>
                                )
                            })
                        }

                    </CarouselContent>
                </Carousel>

                <div className='flex justify-center mt-10'>
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
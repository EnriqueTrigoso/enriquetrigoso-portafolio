import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CornerUpRight, SquareArrowOutUpRight } from 'lucide-react'
import { Project } from '@/lib/types'
import RichText from '@/components/ui/richtext'
import { BorderTrail } from '@/components/ui/border-trail'

interface Props {
    project: Project,
    index: number,
}

const Card = ({ project, index }: Props) => {

    const delay = index * 200

    return (

        <div className='h-full flex flex-col gap-2'>
            <div className="flex-1 relative group h-full bg-[#141414] py-6 px-4 rounded-lg space-y-6"
                data-aos="fade-up"
                data-aos-delay={delay.toString()}
                data-aos-duration="1000"
            >

                <BorderTrail
                    style={{
                        boxShadow:
                            '0px 0px 60px 100px rgb(255 255 255 / 50%), 0 0 20px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
                    }}
                    size={50}
                />

                <div className='relative w-full h-[250px]'>

                    <Link href={project.path}>
                        <Image
                            src={project.images_path.primary.src}
                            alt={project.images_path.primary.alt}
                            width={300}
                            height={200}
                            // fill
                            className="cursor-pointer transition-opacity duration-700 ease-in-out w-full h-full rounded-2xl overflow-hidden"
                        />

                        <Image
                            src={project.images_path.secondary.src}
                            alt={project.images_path.secondary.alt}
                            width={300}
                            height={200}
                            // fill
                            className="cursor-pointer absolute inset-0 opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 w-full h-full rounded-2xl overflow-hidden"
                        />

                    </Link>
                </div>

                <div className='space-y-4'>
                    <h3 className='text-xl text-start'>{project.project_name}</h3>
                    <p className='line-clamp-4 text-paragraph'>
                        {RichText(project.description, {
                            br: () => <br />
                        })}
                    </p>

                    <div className='flex gap-2 justify-between'>

                        <a href={project.buttons.live_demo.url} target='_blank'>
                            <Button>
                                {project.buttons.live_demo.title}
                                <SquareArrowOutUpRight />
                            </Button>
                        </a>

                        <Link href={project.buttons.see_details.url}>
                            <Button>
                                {project.buttons.see_details.title}
                                <CornerUpRight />
                            </Button>
                        </Link>
                    </div>
                </div>


            </div>
        </div >
    )
}

export default Card
import Image from 'next/image'
import React from 'react'
import { ImagesPath } from './Projects'
import Link from 'next/link'


interface Props {
    image: ImagesPath,
    project_name: string,
    path: string
}


const Card = ({ image, project_name, path }: Props) => {
    return (

        <div className='h-full flex flex-col gap-2'>

            <Link href={path}>

                <div className="flex-1 relative group h-full">
                    <Image
                        src={image.primary.src}
                        alt={image.primary.alt}
                        width={300}
                        height={200}
                        // fill
                        className="cursor-pointer transition-opacity duration-700 ease-in-out w-full h-full bg-[#141414] rounded-2xl overflow-hidden p-2"
                    />

                    <Image
                        src={image.secondary.src}
                        alt={image.secondary.alt}
                        width={300}
                        height={200}
                        // fill
                        className="cursor-pointer absolute inset-0 opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 w-full h-full bg-[#141414] rounded-2xl overflow-hidden p-2"
                    />

                </div>
            </Link>

            <div>
                <h3 className='text-xl text-center'>{project_name}</h3>
            </div>
        </div >
    )
}

export default Card
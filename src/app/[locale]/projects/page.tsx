import { Button } from '@/components/ui/button';
import RichText from '@/components/ui/richtext';
import { CodeXml, Github, Package, SquareArrowOutUpRight, Star } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react'

export interface Project {
  project_name: string
  images_path: ImagesPath
  path: string
  description: string
  buttons: Buttons
  key_features: string[]
  technologies_used: TechnologiesUsed[]
}

export interface ImagesPath {
  primary: Image
  secondary: Image
}

export interface Image {
  src: string
  alt: string
}
export interface TechnologiesUsed {
  name: string
  type: string
}

export interface Buttons {
  live_demo: Project_Button
  repository: Project_Button
}
export interface Project_Button {
  title: string
  url: string
}

const Project = () => {

  const t = useTranslations("projects")

  return (
    <section>
      <div className='container py-10'>

        <div className='flex flex-col gap-16'>

          {
            t.raw("list").map((elem: Project, index: string) => {
              return (
                <div key={index} className='grid grid-cols-2 gap-6'>

                  <div className='flex flex-col gap-10'>

                    <h2 className='text-5xl'>
                      {elem.project_name}
                    </h2>

                    <p className='text-paragraph'>
                      {
                        RichText(elem.description, {
                          br: () => <br />
                        })
                      }
                    </p>

                    <div className='flex gap-2'>

                      <a href={elem.buttons.live_demo.url} target='_blank'>
                        <Button>
                          <SquareArrowOutUpRight />
                          {elem.buttons.live_demo.title}
                        </Button>
                      </a>

                      <a href={elem.buttons.repository.url} target='_blank'>
                        <Button>
                          <Github />
                          {elem.buttons.repository.title}
                        </Button>
                      </a>
                    </div>

                    <div>

                      <div className='flex gap-2 mb-4'>
                        <CodeXml />
                        <h3 className='text-xl'>{t("project_detail.technology_title")}</h3>
                      </div>

                      <div className='flex flex-wrap gap-2'>

                        {
                          elem.technologies_used.map((technology, index) => (
                            <div key={index} className='group relative overflow-hidden px-3 py-2 md:px-4 md:py-2.5 bg-gradient-to-r from-gray-600/10 to-gray-600/10 rounded-3xl border border-gray-500/10 hover:border-gray-200/30 transition-all duration-300 cursor-default'>

                              <div className='absolute inset-0 bg-gradient-to-r from-gray-800/0 to-gray-100/0 group-hover:from-gray-900/10 group-hover:to-gray-400/10 transition-all duration-500'>
                              </div>

                              <div className='relative flex items-center gap-1.5 md:gap-2'>
                                <Package />
                                <span>{technology.name}</span>
                              </div>

                            </div>
                          ))

                        }


                      </div>


                    </div>
                  </div>


                  <div>
                    <div className='relative rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl group'>
                      <Image
                        src={elem.images_path.primary.src}
                        alt={elem.images_path.primary.alt}
                        width={400}
                        height={400}
                        className='w-full object-cover transform transition-transform duration-700 will-change-transform group-hover:scale-105 rounded-2xl'
                      />
                    </div>

                    <div className='mt-6 bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 space-y-4 hover:border-white/20 transition-colors duration-300 group md:space-y-4'>

                      <h3 className='text-xl flex items-center gap-2 font-bold'>
                        <Star className='w-5 h-5 text-yellow-400 group-hover:rotate-[20deg] transition-transform duration-300' />
                        {t("project_detail.key_features_title")}
                      </h3>

                      <ul>
                        {
                          elem.key_features.map((feature, index) => {
                            return (
                              <li key={index} className='group flex items-start space-x-3 p-2.5 md:p-3.5 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10'>
                                <div className='relative mt-2'>
                                  <div className='absolute -inset-1 bg-gradient-to-r from-gray-950/20 to-gray-600/20 rounded-full blur group-hover:opacity-100 opacity-0 transition-opacity duration-300'></div>
                                  <div className="relative w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-gray-800 to-gray-500 group-hover:scale-125 transition-transform duration-300"></div>
                                </div>
                                <span>
                                  {feature}
                                </span>
                              </li>
                            )
                          })
                        }
                      </ul>

                    </div>

                  </div>



                </div>
              )
            })
          }
        </div>
      </div>

    </section>
  )
}

export default Project;
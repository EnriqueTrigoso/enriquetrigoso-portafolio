"use client"
import useAOS from '@/components/hooks/useAOS';
import { VideoModal } from '@/components/pages/projects/VideoModal';
import { BorderTrail } from '@/components/ui/border-trail';
import { Button } from '@/components/ui/button';
import RichText from '@/components/ui/richtext';
import { enablePageScroll } from '@fluejs/noscroll';
import { Code, CodeXml, Github, MonitorPlay, Package, SquareArrowOutUpRight, Star } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useEffect } from 'react'

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
  watch_video: Project_Button
}
export interface Project_Button {
  title: string
  url: string
}

const custom_offset = '-500'

const Project = () => {

  const t = useTranslations("home.projects")

  useAOS()

  useEffect(() => {
    enablePageScroll();
    document.body.style.overflow = 'auto';
  }, [])

  return (
    <section>
      <div className='container py-10'>

        <div className='flex flex-col gap-20'>

          {
            t.raw("list").map((elem: Project, index: string) => {

              const is_last_project = (index + 1) === t.raw("list").length

              return (
                <div key={index} className='grid grid-cols-2 gap-6'>

                  <div className='flex flex-col gap-10'>

                    <h2 className='text-5xl' data-aos="fade-down">
                      {elem.project_name}
                    </h2>

                    <p className='text-paragraph' data-aos="fade-right" data-aos-duration='1000' data-aos-delay="100">
                      {
                        RichText(elem.description, {
                          br: () => <br />
                        })
                      }
                    </p>

                    {
                      (elem.buttons.live_demo.url || elem.buttons.watch_video.url || elem.buttons.repository.url) && (

                        <div className='flex gap-2'>

                          {
                            elem.buttons.live_demo.url && (
                              <a href={elem.buttons.live_demo.url} target='_blank' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='' data-aos-offset={is_last_project && custom_offset}>
                                <Button>
                                  <SquareArrowOutUpRight />
                                  {elem.buttons.live_demo.title}
                                </Button>
                              </a>
                            )
                          }

                          {
                            elem.buttons.watch_video.url && (
                              <VideoModal video={elem.buttons.watch_video.url} title={elem.project_name}>
                                <Button>
                                  <MonitorPlay />
                                  {elem.buttons.watch_video.title}
                                </Button>
                              </VideoModal>

                            )
                          }

                          {
                            elem.buttons.repository.url && (
                              <a href={elem.buttons.repository.url} target='_blank' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='100' data-aos-offset={is_last_project && custom_offset}>
                                <Button>
                                  <Github />
                                  {elem.buttons.repository.title}
                                </Button>
                              </a>
                            )
                          }



                        </div>
                      )
                    }

                    <div>

                      <div
                        className='flex gap-2 mb-4'
                        data-aos='fade-right'
                        data-aos-duration='1000'
                        data-aos-delay='300'
                        data-aos-offset={is_last_project && custom_offset}
                      >
                        <CodeXml />
                        <h3 className='text-xl'>{t("project_detail.technology_title")}</h3>
                      </div>


                      <div className='flex flex-wrap gap-2'>

                        {
                          elem.technologies_used.map((technology, index) => {

                            const delay = index * 150

                            return (
                              (
                                <div key={index}
                                  data-aos='fade-right'
                                  data-aos-duration='1000'
                                  data-aos-delay={delay}
                                  data-aos-offset={is_last_project && custom_offset}
                                >
                                  <div
                                    className='group relative overflow-hidden px-3 md:px-4 py-2 md:py-2.5 bg-gradient-to-r from-gray-600/10 to-gray-600/10 rounded-3xl border border-gray-500/10 hover:border-gray-200/30 transition-all duration-1000 cursor-default'
                                  >
                                    <div className='w-full absolute inset-0 bg-gradient-to-r from-gray-800/0 to-gray-100/0 group-hover:from-gray-900/10 group-hover:to-gray-400/10 transition-all duration-1000'>
                                    </div>

                                    <div className='relative flex items-center gap-1.5 md:gap-2'>

                                      {
                                        ['framework', 'library'].includes(technology.type) && <Package />
                                      }

                                      {
                                        ['language', 'methodology'].includes(technology.type) && <Code />
                                      }

                                      <span>{technology.name}</span>
                                    </div>

                                  </div>
                                </div>
                              )
                            )
                          })
                        }

                      </div>

                    </div>
                  </div>

                  <div className='overflow-hidden'>
                    <div
                      className='relative rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl group'
                      data-aos="fade-left"
                      data-aos-duration='1000'
                      data-aos-delay="200"
                      data-aos-offset={is_last_project && custom_offset}
                    >
                      <Image
                        src={elem.images_path.primary.src}
                        alt={elem.images_path.primary.alt}
                        width={400}
                        height={400}
                        className='w-full object-cover transform transition-transform duration-700 will-change-transform group-hover:scale-105 rounded-2xl'
                      />
                    </div>

                    <div
                      className='mt-6 bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 space-y-4 hover:border-white/20 transition-colors duration-300 group md:space-y-4'
                      data-aos="fade-left"
                      data-aos-duration='1000'
                      data-aos-delay="200"
                      data-aos-offset={is_last_project && custom_offset}
                    >
                      <BorderTrail
                        style={{
                          boxShadow:
                            '0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
                        }}
                        size={200}
                      />
                      <h3
                        className='text-xl flex items-center gap-2 font-bold'
                        data-aos='fade-left'
                        data-aos-duration='1000'
                        data-aos-delay='200'
                        data-aos-offset={is_last_project && custom_offset}
                      >
                        <Star className='w-5 h-5 text-yellow-400 group-hover:rotate-[20deg] transition-transform duration-300' />
                        {t("project_detail.key_features_title")}
                      </h3>

                      <ul>
                        {
                          elem.key_features.map((feature, index) => {

                            const delay = (index * 150) + 250

                            return (
                              <div key={index}
                                data-aos='fade-left'
                                data-aos-duration='1000'
                                data-aos-delay={delay}
                                data-aos-offset={is_last_project && custom_offset}
                              >
                                <li
                                  className='group flex items-start space-x-3 p-2.5 md:p-3.5 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10 animate-fadeIn'
                                >
                                  <div className='relative mt-2'>
                                    <div className='absolute -inset-1 bg-gradient-to-r from-gray-950/20 to-gray-600/20 rounded-full blur group-hover:opacity-100 opacity-0 transition-opacity duration-300'></div>
                                    <div className="relative w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-gray-800 to-gray-500 group-hover:scale-125 transition-transform duration-300"></div>
                                  </div>
                                  <span>
                                    {feature}
                                  </span>
                                </li>
                              </div>
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
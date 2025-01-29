"use client"
import React from 'react'
import { useTranslations } from 'next-intl';
import LocaleSwitcher from '@/components/layout/LocaleSwitcher';
import { cn, goTo } from '@/lib/utils';
import useWaitWelcome from '../hooks/useWaitWelcome';

interface Props {
  position: "absolute" | "sticky" | "relative"
}

const Navigation = ({ position }: Props) => {

  const t = useTranslations("header");
  const { visible } = useWaitWelcome()

  return (
    !visible && (
      <div
        className={cn(
          'w-full z-10 py-8',
          position === 'absolute' && 'absolute top-0 left-0',
          position === 'relative' && 'relative',
        )}
        data-aos="zoom-in"
        data-aos-duration='1000'
      >

        <div className='container flex justify-between'>

          <div></div>

          <div className='rounded-3xl border border-[#262626] flex gap-8 w-fit px-8 py-4'>

            {t.raw("navigation").map((elem: { title: string, path: string }, index: string) => {
              return (
                <a
                  key={index}
                  className='cursor-pointer text-paragraph duration-300 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-200 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 '
                  onClick={() => {
                    goTo(elem.path)
                  }}>
                  {elem.title}
                </a>

              )
            })}
          </div>

          <div className='flex items-center justify-end' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
            <div className='flex justify-end items-center'>
              <LocaleSwitcher className='' />
            </div>
          </div>

        </div>

      </div>
    )
  )
}

export default Navigation
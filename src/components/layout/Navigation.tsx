"use client"
import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl';
import LocaleSwitcher from '@/components/layout/LocaleSwitcher';
import { cn, scrollTo } from '@/lib/utils';
import useWaitWelcome from '../hooks/useWaitWelcome';
interface Props {
  className: string
}

const Navigation = ({ className }: Props) => {

  const t = useTranslations("header");

  const { visible } = useWaitWelcome()
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {

      const sections = document.querySelectorAll('section');
      const viewportHeight = window.innerHeight;

      let maxVisibleSection = null;
      let maxVisibleHeight = 0;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        const visibleTop = Math.max(sectionTop, window.scrollY);
        const visibleBottom = Math.min(sectionBottom, window.scrollY + viewportHeight);
        const visibleHeight = visibleBottom - visibleTop;

        if (visibleHeight > maxVisibleHeight) {
          maxVisibleHeight = visibleHeight;
          maxVisibleSection = section.id;
        }
      });

      if (maxVisibleSection) {
        setActiveSection(maxVisibleSection);
      }

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    !visible && (
      <div>
        <div
          // ref={navigationRef}
          className={cn(
            'w-full z-10 py-2 transition-all bg-[#000]/50 backdrop-blur-xl',
            className
          )}
        >

          <div
            className='container flex justify-between'
            data-aos="zoom-in"
            data-aos-duration='1000'
          >

            <div></div>

            <div className='bg-black rounded-3xl border border-[#262626] flex gap-8 w-fit px-8 py-4'>

              {t.raw("navigation").map((elem: { id: string, title: string, path: string }, index: string) => {
                return (
                  <a
                    key={index}
                    className={cn(
                      'cursor-pointer text-paragraph duration-300 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-200 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100',
                      activeSection === elem.id ? 'text-white after:origin-bottom-left after:scale-x-100' : 'hover:text-white hover:after:origin-bottom-left hover:after:scale-x-100'
                    )}
                    onClick={() => {
                      scrollTo(elem.id)
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
      </div>
    )
  )
}

export default Navigation
import React from 'react'
import { useTranslations } from 'next-intl';
import LocaleSwitcher from '@/components/layout/LocaleSwitcher';

const Navigation = () => {

  const t = useTranslations("header");

  return (
    <div className='absolute top-0 left-0 w-full z-10 py-8'>

      <div className='relative'>
        <div className='mx-auto rounded-3xl border border-[#262626] flex gap-8 w-fit px-8 py-4'>

          {t.raw("navigation").map((elem: { title: string, path: string }, index: string) => {
            return (
              <p key={index} className='text-paragraph duration-300 hover:text-white '>
                <a href={elem.path}>
                  {elem.title}
                </a>
              </p>
            )
          })}
        </div>

        <div className='mx-auto absolute top-0 h-full w-full flex items-center justify-end px-6 '>
          <div className='max-w-[1300px] w-full flex justify-end items-center'>
            <LocaleSwitcher className='' />

          </div>
        </div>
      </div>




    </div>
  )
}

export default Navigation
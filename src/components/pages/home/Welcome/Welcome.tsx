import { TextEffect } from '@/components/ui/text-effect';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react'


export const WELCOME_LIFE_TIME = 4000
export const EXIT_ANIMATION_DURATION = 700
export const WELCOME_TOTAL_LIFE_TIME = WELCOME_LIFE_TIME + EXIT_ANIMATION_DURATION

const Welcome = () => {

  const t = useTranslations('welcome')

  const [visible, setVisible] = useState(true);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setAnimating(true);
      setTimeout(() => {
        setVisible(false);
      }, EXIT_ANIMATION_DURATION);

    }, WELCOME_LIFE_TIME);

    return () => clearTimeout(timer);

  }, [])

  return (
    <div className={cn(
      "absolute top-0 left-0 w-full min-h-screen overflow-hidden bg-[#0a0a0f] z-50",
      !visible && 'hidden',
      animating ? 'animate-fadeOut' : 'opacity-100'
    )}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      {/* <div className="absolute w-32 h-32 top-1/4 left-1/4 animate-float"
                data-aos='zoom-in'
                data-aos-duration='3000'
            >
                <img
                    src="/assets/images/earth.png"
                    alt=""
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="absolute w-2/4 h-2/4 top-2/3 right-1/4 animate-float-delayed"
                data-aos='zoom-in'
                data-aos-duration='3000'
            >
                <img
                    src="/assets/images/saturno.png"
                    alt=""
                    className="w-full h-full object-contain"
                />
            </div> */}
      <div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4"
        data-aos='fade-up'
        data-aos-duration='500'
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          <TextEffect
            preset='fade-in-blur'
            delay={1.5}
            speedReveal={1.1}
            speedSegment={0.3}
          >
            {t('title')}
          </TextEffect>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
          <TextEffect
            preset='fade-in-blur'
            delay={1.5}
            speedReveal={1.1}
            speedSegment={0.3}
          >
            {t('description')}
          </TextEffect>
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent"></div>
      <style jsx>{`
        .stars,
        .stars2,
        .stars3 {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: transparent;
          background-image: radial-gradient(
              2px 2px at 20px 30px,
              #eee,
              transparent
            ),
            radial-gradient(2px 2px at 40px 70px, #fff, transparent),
            radial-gradient(2px 2px at 50px 160px, #ddd, transparent),
            radial-gradient(2px 2px at 90px 40px, #fff, transparent),
            radial-gradient(2px 2px at 130px 80px, #fff, transparent),
            radial-gradient(2px 2px at 160px 120px, #ddd, transparent);
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: zoom 5s infinite;
          opacity: 0;
        }
        .stars2 {
          background-position: 50px 50px;
          animation-delay: 0.3s;
        }
        .stars3 {
          background-position: -50px -50px;
          animation-delay: 0.6s;
        }
        @keyframes zoom {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: scale(1.2);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div >
  )
}

export default Welcome
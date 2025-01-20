import { cn } from '@/lib/utils';
import React from 'react'

type Props = {
    children?: React.ReactNode;
    className?: string
};

const TitleLines = ({ children, className }: Props) => {
    return (
        <div className={cn('flex gap-2 items-center justify-center mb-3 text-2xl', className)}>

            <div className='relative overflow-hidden w-[69px] h-[2px] opacity-50 flex-none bg-gradient-to-r from-transparent to-white'></div>
            <h2>
                {children}
            </h2>
            <div className='relative overflow-hidden w-[69px] h-[2px] opacity-50 flex-none bg-gradient-to-l from-transparent to-white'></div>
        </div>
    )
}

export default TitleLines
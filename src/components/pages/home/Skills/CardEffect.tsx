import React from 'react'
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { onceAnimation } from '@/lib/constants';

const containerVariants = {
    hidden: {
    },
    visible: {
        transition: {
            staggerChildren: 0.05,
        },
    },
};

interface Props {
    children: React.ReactNode
    className: string
}

const CardEffect = ({ children, className }: Props) => {
    return (
        <InView
            as="div"
            threshold={0}
            rootMargin="0px 0px -20px 0px"
            triggerOnce={onceAnimation}
        >
            {({ inView, ref }) => (
                <motion.div
                    ref={ref}
                    className={className}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {children}
                </motion.div>
            )}
        </InView>
    )
}

export default CardEffect
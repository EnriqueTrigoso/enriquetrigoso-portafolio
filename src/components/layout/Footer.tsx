import { useTranslations } from 'next-intl'
import React from 'react'

interface FooterProps {
    className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {

    const t = useTranslations("layout.footer")
    return (
        <footer className={className}>
            <hr className="mb-3 border-gray-400 opacity-15 sm:mx-auto lg:mb-6 text-center" />
            <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
                {t("title")} - © {new Date().getFullYear()}
            </span>
        </footer>
    )
}

export default Footer
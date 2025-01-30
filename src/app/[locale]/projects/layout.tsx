import Background from "@/components/layout/Background";
import Footer from "@/components/layout/Footer";
import LocaleSwitcher from "@/components/layout/LocaleSwitcher";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ProjectLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    const t = useTranslations('layout.project_header')

    return (
        <>
            <Background />
            <div className="py-6">
                <div className="container flex justify-between">
                    <Link href={t('button.path')}>
                        <Button>{t('button.text')}</Button>
                    </Link>
                    <LocaleSwitcher />
                </div>
            </div>
            {children}
            <Footer/>
        </>
    );
}

import Background from "@/components/layout/Background";
import LocaleSwitcher from "@/components/layout/LocaleSwitcher";

export default function ProjectLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Background />
            <div className="py-6">
                <div className="container">
                    <LocaleSwitcher />
                </div>
            </div>
            {children}
        </>
    );
}

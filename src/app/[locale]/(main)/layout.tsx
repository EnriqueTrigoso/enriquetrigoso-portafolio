import Navigation from "@/components/layout/Navigation";


export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navigation position='absolute' />
            {children}
        </>
    );
}

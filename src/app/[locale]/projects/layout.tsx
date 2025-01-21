import Navigation from "@/components/pages/home/Navigation";

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navigation />
            {children}
        </>
    );
}

import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";


export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navigation className='fixed' />
            {children}
            <Footer />
        </>
    );
}

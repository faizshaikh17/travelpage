import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ListSection from "@/components/ListSection";
import ItenarySection from "@/components/ItenarySection";
export default function Home() {
    return (
        <>
            <main className="px-2">
                <Navbar />
                <HeroSection />
                <ListSection />
                <ItenarySection />
            </main>
        </>
    );
}

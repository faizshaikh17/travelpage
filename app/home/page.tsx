import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ListSection from "@/components/ListSection";
import ItenarySection from "@/components/ItenarySection";
import BookNow from "@/components/BookNow";
import Destination from "@/components/Destination";
import Questions from "@/components/Questions";
import Blogs from "@/components/Blogs"

export default function Home() {
    return (
        <>
            <main className="px-2">
                <Navbar />
                <HeroSection />
                <ListSection />
                <ItenarySection />
                <BookNow />
                <Destination />
                <Questions />
                <Blogs />
            </main>
        </>
    );
}

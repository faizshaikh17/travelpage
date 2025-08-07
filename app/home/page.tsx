import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ListSection from "@/components/ListSection";
import ItenarySection from "@/components/ItenarySection";
import BookNow from "@/components/BookNow";
import Destination from "@/components/Destination";
import Questions from "@/components/Questions";
import Blogs from "@/components/Blogs"
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <main>
                <Navbar />
                <HeroSection />
                <ListSection />
                <ItenarySection />
                <BookNow />
                <Destination />
                <Questions />
                <Blogs />
                <Footer />
            </main>
        </>
    );
}

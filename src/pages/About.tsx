import SEO from "../components/SEO";
import { useRef } from "react";
import AboutPreview from "../components/views/About/AboutPreview";
import OurViews from "../components/views/About/OurViews";
import History from "../components/views/About/History";

const About = () => {
    const viewsRef = useRef<HTMLElement>(null);
    const scrollToViews = () => {
        if (!viewsRef.current) return;
        viewsRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main>
            <SEO
                title="О нас"
                description="Раздел с описанием истории ресторана Mika Tun и интересных мест, доступных к посещению гостям ресторана"
                keywords="Mika tun, Мика тун, ресторан, о ресторане"
            />
            <AboutPreview onPreviewButtonClick={scrollToViews} />
            <OurViews ref={viewsRef} />
            <History />
        </main>
    );
};

export default About;

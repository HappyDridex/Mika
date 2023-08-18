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
                title="О ресторане Mika Tun в Оганаване"
                description="Ресторан Мика Тун в Оганаване расположен в красивом месте с видом на Касахское ущелье, монастырь Оганаванк и гору Арарат. Приглашаем в гости всех любителей армянской и грузинской кухни."
                keywords="Mika tun ресторан, о ресторане мика тун, мика тун ресторан"
            />
            <AboutPreview onPreviewButtonClick={scrollToViews} />
            <OurViews ref={viewsRef} />
            <History />
        </main>
    );
};

export default About;

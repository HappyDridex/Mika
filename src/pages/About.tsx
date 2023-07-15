import { useRef } from "react";
import AboutPreview from "../components/views/About/AboutPreview";
import OurViews from "../components/views/About/OurViews";

const About = () => {
    const viewsRef = useRef<HTMLElement>(null);
    const scrollToViews = () => {
        if (!viewsRef.current) return;
        viewsRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main>
            <AboutPreview onPreviewButtonClick={scrollToViews} />
            <OurViews ref={viewsRef} />
        </main>
    );
};

export default About;

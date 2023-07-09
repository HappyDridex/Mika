import { useTranslation } from "react-i18next";

const TastefulFlavours = () => {
    const { t } = useTranslation();
    return (
        <section className="w-full shrink-0 pt-20 text-center md:pt-32">
            <h2 className="container z-30 mx-auto w-full px-7 text-3xl font-medium text-light sm:px-3 md:text-4xl xl:text-6xl">
                {t("tasteful_flavours")}
            </h2>
            <div className="relative flex justify-between">
                <div className="relative -z-10 h-full w-[54%] max-w-[800px] select-none">
                    <picture>
                        <source media="(min-width:768px)" srcSet="/images/hand-with-wine.png" />
                        <img className="w-full" src="/images/hand-with-wine-tablet.png" alt="Брызги" />
                    </picture>
                </div>

                <div className="relative -z-10 w-[46%] max-w-[700px] translate-y-[-25%] select-none">
                    <picture>
                        <source media="(min-width:768px)" srcSet="/images/splash-right.png" />
                        <img className="w-full" src="/images/splash-right-tablet.png" alt="Брызги" />
                    </picture>
                </div>
            </div>
        </section>
    );
};

export default TastefulFlavours;

import { useTranslation } from "react-i18next";

const TastefulFlavours = () => {
    const { t } = useTranslation();
    return (
        <section className="w-full shrink-0 pt-20 text-center">
            <h2 className="container z-30 mx-auto w-full text-xl text-light md:text-3xl xl:text-6xl">
                {t("tasteful_flavours")}
            </h2>
            <div className="relative flex justify-between">
                <div className="absolute left-1/2 top-[10%] w-[90%] max-w-[1030px] -translate-x-1/2  sm:w-[58%]">
                    <img
                        className="z-10 h-full w-full object-contain"
                        src="/images/tasteful-flavours-no-bg.png"
                        alt="Блюдо"
                    />
                </div>

                <div className="relative -z-10 w-1/2 max-w-[650px] translate-y-[-35%] sm:w-2/5">
                    <img className="w-full" src="/images/splash-left.png" alt="Брызги" />
                </div>

                <div className="relative -z-10 w-1/2 max-w-[650px] translate-y-[-25%] sm:w-2/5">
                    <img className="w-full" src="/images/splash-right.png" alt="Брызги" />
                </div>
            </div>
        </section>
    );
};

export default TastefulFlavours;

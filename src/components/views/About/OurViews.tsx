import { forwardRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface IProps {
    ref: any;
}

const OurViews = ({ props }: any, ref: any) => {
    const { t } = useTranslation();

    const articles = [
        {
            imageUrl: "/images/about/about-image-1.JPG",
            articleText: t("about_story_1_text"),
        },
        { imageUrl: "/images/about/about-image-2.png", articleText: t("about_story_2_text") },
    ];

    return (
        <section ref={ref}>
            <h2 className="mx-auto mt-5 w-max text-3xl text-white md:text-[40px]">{t("our_views")}</h2>

            <div className="mt-8 flex flex-col gap-14 px-[5%] md:mt-10 xl:mt-16">
                {articles.map((article) => (
                    <div key={article.imageUrl}>
                        <p className="whitespace-pre-wrap text-justify text-lg text-grayBB md:text-xl xl:text-2xl">
                            <img
                                className="float-none mb-4 mr-0 max-h-[400px] w-full rounded-2xl object-cover md:float-left md:mb-0 md:mr-5 md:w-1/2 xl:max-h-[500px]"
                                src={article.imageUrl}
                                alt="Фото к статье"
                            />

                            {article.articleText}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default forwardRef(OurViews);

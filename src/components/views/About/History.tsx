import { useTranslation } from "react-i18next";

const History = () => {
    const { t } = useTranslation();
    return (
        <section className="container mt-14 md:mt-28">
            <h2 className="mx-auto w-max text-3xl text-white md:text-[40px]">{t("history")}</h2>
            <p className="mt-6 px-[3%] text-justify text-lg text-grayBB sm:text-xl md:mt-12 md:text-2xl">
                {t("about_history_text")}
            </p>
        </section>
    );
};

export default History;

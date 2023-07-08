import ButtonRoundedBig from "../../ui/ButtonRoundedBig";
import whatsAppLogo from "./../../../assets/svg/whatsapp.svg";
import { useTranslation } from "react-i18next";

const OrderTable = () => {
    const { t } = useTranslation();
    const openYandexMapsToPath = () => {
        window.open(process.env.REACT_APP_YANDEX_MAPS_LINK);
    };
    return (
        <section className="relative mt-10 flex justify-between">
            <div className="container absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center text-light ">
                <h2 className="text-2xl font-bold md:text-4xl xl:text-6xl">
                    {t("table_reservations")}
                </h2>
                <p className="mt-3 text-lg font-normal md:mt-6 md:text-2xl xl:text-5xl">
                    {t("write_us")}
                </p>
                <a
                    href="https://wa.me/37493129492"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-auto mt-12 w-[50px] md:w-[86px]"
                >
                    <img className="h-auto w-[90px]" src={whatsAppLogo} alt="whatsapp" />
                </a>
                <ButtonRoundedBig
                    title={t("how_to_get_to_us")}
                    color={"black"}
                    onClick={openYandexMapsToPath}
                    className="mt-12"
                />
            </div>

            <div className="h-auto w-1/2 md:w-1/3">
                <img
                    className="h-full w-full object-cover"
                    src="/images/ice-cream-left.png"
                    alt="картинка"
                />
            </div>

            <div className=" h-auto w-1/2 md:w-1/3">
                <img
                    className="h-full w-full object-cover"
                    src="/images/ice-cream-right.png"
                    alt="картинка"
                />
            </div>
        </section>
    );
};

export default OrderTable;

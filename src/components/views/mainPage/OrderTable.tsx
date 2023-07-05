import ButtonRoundedBig from "../../ui/ButtonRoundedBig";
import whatsAppLogo from "./../../../assets/svg/whatsapp.svg";
import { useTranslation } from "react-i18next";

const OrderTable = () => {
    const { t } = useTranslation();
    const openYandexMapsToPath = () => {
        window.open(process.env.REACT_APP_YANDEX_MAPS_LINK);
    };
    return (
        <section className="relative">
            <div className="container pt-[200px] pb-[300px] flex flex-col items-center text-center text-light">
                <h2 className="font-bold text-2xl md:text-4xl xl:text-6xl">
                    {t("table_reservations")}
                </h2>
                <p className="font-normal text-lg md:text-2xl xl:text-5xl mt-6">
                    {t("write_us")}
                </p>
                <a
                    href="https://wa.me/37493129492"
                    target="_blank"
                    className="mt-12 mx-auto"
                    rel="noreferrer"
                >
                    <img className="w-[90px] h-auto" src={whatsAppLogo} alt="whatsapp" />
                </a>
                <ButtonRoundedBig
                    title={t("how_to_get_to_us")}
                    color={"black"}
                    onClick={openYandexMapsToPath}
                    className="mt-12"
                />
            </div>

            <div className="absolute left-0 top-1/2 -translate-y-1/2 -z-10 w-1/2 h-[50%] md:h-[80%] max-w-[600px]">
                <img
                    className="w-full h-full object-cover"
                    src="/images/ice-cream-left.png"
                    alt="картинка"
                />
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 -z-10 w-2/5 h-[50%] md:h-[70%] max-w-[500px]">
                <img
                    className="w-full h-full object-cover"
                    src="/images/ice-cream-right.png"
                    alt="картинка"
                />
            </div>
        </section>
    );
};

export default OrderTable;

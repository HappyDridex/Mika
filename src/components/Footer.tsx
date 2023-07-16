import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logoMikaTun from "../assets/svg/logo_mika_tun.svg";
import IconLogoMikaTun from "../components/icons/IconLogoMikaTun";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="mt-16 flex flex-col items-center p-5 text-white md:mt-32 md:p-10">
            <div className="flex flex-col items-center">
                <div className="w-1/2">
                    <IconLogoMikaTun className="w-full" />
                </div>
                <p className="mt-2 text-sm text-gray68 sm:text-base md:mt-5 md:text-xl">© 2023 Mika Tun. All rights reserved.</p>
            </div>

            <div className="mt-8 grid w-full grid-cols-3 justify-items-center sm:mt-10 md:mt-[60px]">
                <div>
                    <ul>
                        <h4 className="mb-3 text-xs sm:mb-5 sm:text-base md:mb-10 md:text-xl"> {t("site_navigation")}</h4>
                        <li className="mb-2 text-[10px] opacity-75 sm:text-xs md:mb-3 md:text-base">
                            <Link to="/menu">{t("restaurant_menu")}</Link>
                        </li>
                        <li className="mb-2 text-[10px] opacity-75 sm:text-xs md:mb-3 md:text-base">
                            <Link to="/booking">{t("reserve_table")}</Link>
                        </li>
                        <li className="mb-2 text-[10px] opacity-75 sm:text-xs md:mb-3 md:text-base">
                            <a target="_blank" rel="noreferrer noopener" href={`${process.env.REACT_APP_YANDEX_MAPS_LINK}`}>
                                {t("how_to_get_to_us")}
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <h4 className="mb-3 text-xs sm:mb-5 sm:text-base md:mb-10 md:text-xl">{t("social_networks")}</h4>
                        <li className="mb-2 text-[10px] opacity-75 sm:text-xs md:mb-3 md:text-base">
                            <a target="_blank" rel="noreferrer noopener" href={`${process.env.REACT_APP_INSTAGRAM_LINK}`}>
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <h4 className="mb-3 text-xs sm:mb-5 sm:text-base md:mb-10 md:text-xl">{t("documents")}</h4>
                        <li className="mb-2 text-[10px] opacity-75 sm:text-xs md:mb-3 md:text-base">
                            <a href="/policy_2023_mika.pdf" target="_blank" rel="noreferrer noopener">
                                {t("privacy_policy")}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

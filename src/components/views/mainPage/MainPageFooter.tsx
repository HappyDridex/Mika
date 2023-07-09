import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logoMikaTun from "../../../assets/svg/logo_mika_tun.svg";

const MainPageFooter = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <footer className="mt-8 flex flex-col items-center p-5 pt-0 text-white md:p-10 md:pt-0">
            <div className="flex flex-col items-center">
                <div className="w-1/2 md:w-1/3">
                    <img src={logoMikaTun} alt="Logo" />
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
                            <a target="_blank" href={`${process.env.REACT_APP_YANDEX_MAPS_LINK}`}>
                                {t("how_to_get_to_us")}
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <h4 className="mb-3 text-xs sm:mb-5 sm:text-base md:mb-10 md:text-xl">{t("social_networks")}</h4>
                        <li className="mb-2 text-[10px] opacity-75 sm:text-xs md:mb-3 md:text-base">
                            <a target="_blank" href={`${process.env.REACT_APP_INSTAGRAM_LINK}`}>
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <h4 className="mb-3 text-xs sm:mb-5 sm:text-base md:mb-10 md:text-xl">{t("documents")}</h4>
                        <li className="mb-2 text-[10px] opacity-75 sm:text-xs md:mb-3 md:text-base">
                            <a href="#">{t("privacy_policy")}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default MainPageFooter;

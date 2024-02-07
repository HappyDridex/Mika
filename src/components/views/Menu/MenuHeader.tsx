import ButtonRoundedBig from "../../ui/ButtonRoundedBig";
import { useTranslation } from "react-i18next";
import useNavigateWithSearchParams from "../../../hooks/useNavigateWithSearchParams";

const MenuHeader = () => {
    const navigateWithSearchParams = useNavigateWithSearchParams();
    const { t } = useTranslation();
    return (
        <div
            style={{ backgroundImage: `url(/images/top-menu-bg.png)` }}
            className="flex h-[70vh] w-full flex-col items-center bg-gradient-to-r from-cyan-500 to-blue-500 bg-cover bg-no-repeat md:h-screen"
        >
            <h1 className="mt-[153px] text-center  text-4xl text-white  xl:text-5xl">{t("restaurant_menu")}</h1>
            <ButtonRoundedBig
                title={t("reserve_table")}
                color={"transparent"}
                className="mt-12"
                onClick={() => navigateWithSearchParams("booking")}
            />
        </div>
    );
};

export default MenuHeader;

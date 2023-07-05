import { useNavigate } from "react-router-dom";
import ButtonRoundedBig from "../../ui/ButtonRoundedBig";
import { useTranslation } from "react-i18next";

const MenuHeader = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    return (
        <div
            style={{ backgroundImage: `url(/images/top-menu-bg.png)` }}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 h-[70vh] md:h-screen bg-cover bg-no-repeat w-full flex flex-col items-center"
        >
            <h1 className="text-white text-4xl  xl:text-5xl text-center  mt-[153px]">
                {t("restaurant_menu")}
            </h1>
            <ButtonRoundedBig
                title={t("book_table")}
                color={"transparent"}
                className="mt-12"
                onClick={() => navigate("/booking")}
            />
        </div>
    );
};

export default MenuHeader;

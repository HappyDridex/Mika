import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useDishes from "../../../hooks/useDishes";
import DishCard from "../../ui/DishCard";
import IconArrowDown from "../../icons/IconArrowDown";

const DishesSlider = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const dishes = useDishes();

    return (
        <section className="container px-[10%] pt-20 sm:px-[5%] xl:px-[10%]">
            <div className="flex items-center justify-between text-light">
                <h2 className="text-3xl font-bold md:text-4xl xl:text-6xl" onClick={() => navigate("/menu")}>
                    {t("fresh_menu")}
                </h2>
                <Link to="menu" className="hidden p-3 font-normal sm:block sm:text-xl lg:text-3xl">
                    {t("view_all")}
                </Link>
                <button className="block p-3 sm:hidden" onClick={() => navigate("/menu")}>
                    <IconArrowDown className="-rotate-90" />
                </button>
            </div>
            <div className="mt-7 grid select-none grid-cols-1 grid-rows-2 gap-9 sm:grid-cols-2 md:mt-12 xl:grid-cols-3 xl:grid-rows-1 xl:gap-7">
                {dishes
                    .filter((dish) => dish.new)
                    .map((dish) => {
                        return (
                            <DishCard
                                key={dish.id}
                                name={dish.name}
                                id={dish.id}
                                price={dish.price}
                                onClick={() => navigate(`${dish.id}`)}
                            />
                        );
                    })}
            </div>
        </section>
    );
};

export default DishesSlider;

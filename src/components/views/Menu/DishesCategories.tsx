import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import ButtonRoundedBig from "../../ui/ButtonRoundedBig";
import { IButtonProps } from "../../ui/ButtonRoundedBig";
import { TDishCategory } from "../../../types/DishCategory";
import { useQueryString } from "../../../hooks/useQueryString";

type TDishCategoryButton = {
    title: string;
    color: IButtonProps["color"];
    category: TDishCategory;
};

const DishesCategories = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const queryString = useQueryString();
    const { t } = useTranslation();

    const selectCategory = (category: string) => {
        setSelectedCategory(category);
        queryString.pushParams({ category });
    };

    const buttonsOptions: TDishCategoryButton[] = [
        {
            title: t("all_dishes"),
            color: "black",
            category: "all",
        },
        {
            title: t("mangal"),
            color: "black",
            category: "mangal",
        },
        {
            title: t("salads"),
            color: "black",
            category: "salads",
        },
        {
            title: t("soups"),
            color: "black",
            category: "soups",
        },
        {
            title: t("garnishes"),
            color: "black",
            category: "garnishes",
        },
        {
            title: t("egg_dishes"),
            color: "black",
            category: "egg_dishes",
        },
        {
            title: t("hot_dishes"),
            color: "black",
            category: "hot_dishes",
        },
        {
            title: t("cold_dishes"),
            color: "black",
            category: "cold_dishes",
        },
        {
            title: t("fruit"),
            color: "black",
            category: "fruit",
        },
    ];

    useEffect(() => {
        queryString.pushParams({ category: selectedCategory });
    }, []);

    return (
        <div className="container mb-8 md:mb-16">
            <Swiper spaceBetween={10} slidesPerView={"auto"}>
                {buttonsOptions.map((button) => {
                    return (
                        <SwiperSlide className="max-w-fit select-none" key={button.title}>
                            <ButtonRoundedBig
                                isActive={button.category === selectedCategory}
                                title={button.title}
                                color={button.color}
                                tag="li"
                                className="mx-1 my-[20px] md:mx-2"
                                onClick={() => {
                                    selectCategory(button.category);
                                }}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default DishesCategories;

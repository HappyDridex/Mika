import ButtonRoundedBig from "../../ui/ButtonRoundedBig";
import { IButtonProps } from "../../ui/ButtonRoundedBig";
import { DishCategory } from "../../../types/DishCategory";
import { useQueryString } from "../../../hooks/useQueryString";
import { useState, useEffect } from "react";

type TDishCategoryButton = {
    title: string;
    color: IButtonProps["color"];
    category: DishCategory;
};
const buttonsOptions: TDishCategoryButton[] = [
    {
        title: "Все блюда",
        color: "black",
        category: "all",
    },
    {
        title: "Супы",
        color: "black",
        category: "soups",
    },
    {
        title: "Мясные",
        color: "black",
        category: "meat",
    },
    {
        title: "Выпечка",
        color: "black",
        category: "bakery",
    },
    {
        title: "Салаты",
        color: "black",
        category: "salads",
    },
];

const DishesCategories = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const queryString = useQueryString();

    const selectCategory = (category: string) => {
        setSelectedCategory(category);
        queryString.pushParams({ category });
    };

    useEffect(() => {
        queryString.pushParams({ category: selectedCategory });
    }, []);

    return (
        <div className="flex gap-x-6 justify-center">
            {buttonsOptions.map((button) => {
                return (
                    <ButtonRoundedBig
                        key={button.title}
                        isActive={button.category === selectedCategory}
                        title={button.title}
                        color={button.color}
                        className="my-[108px]"
                        onClick={() => {
                            selectCategory(button.category);
                        }}
                    />
                );
            })}
        </div>
    );
};

export default DishesCategories;

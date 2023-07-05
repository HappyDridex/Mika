import { useTranslation } from "react-i18next";
import { IDishCard } from "../types/DishCategory";

const useDishes = () => {
    const { t } = useTranslation();

    const dishes: IDishCard[] = [
        {
            id: 1,
            name: t("dish_1"),
            price: "1800֏",
            category: "salads",
        },
        {
            id: 2,
            name: t("dish_2"),
            price: "1200֏",
            category: "salads",
        },
        {
            id: 3,
            name: t("dish_3"),
            price: "2200֏",
            category: "cold_dishes",
        },
        {
            id: 4,
            name: t("dish_4"),
            price: "1400֏",
            category: "cold_dishes",
        },
        {
            id: 5,
            name: t("dish_5"),
            price: "1200֏",
            category: "cold_dishes",
        },
        {
            id: 6,
            name: t("dish_6"),
            price: "800֏",
            category: "cold_dishes",
        },
        {
            id: 7,
            name: t("dish_7"),
            price: "3500֏",
            category: "mangal",
            new: true,
        },
        {
            id: 8,
            name: t("dish_8"),
            price: "1000֏",
            category: "cold_dishes",
        },
        {
            id: 9,
            name: t("dish_9"),
            price: "600֏",
            category: "bakery",
        },
        {
            id: 10,
            name: t("dish_10"),
            price: "7500֏",
            category: "hot_dishes",
        },
        {
            id: 11,
            name: t("dish_11"),
            price: "2600֏",
            category: "hot_dishes",
        },
        {
            id: 12,
            name: t("dish_12"),
            price: "1400֏",
            category: "drinks",
        },
        {
            id: 13,
            name: t("dish_13"),
            price: "1600֏",
            category: "cold_dishes",
        },
        {
            id: 14,
            name: t("dish_14"),
            price: "1500֏",
            category: "mangal",
        },
        {
            id: 15,
            name: t("dish_15"),
            price: "1500֏",
            category: "mangal",
        },
        {
            id: 16,
            name: t("dish_16"),
            price: "500֏",
            category: "drinks",
        },
        {
            id: 17,
            name: t("dish_17"),
            price: "3500֏",
            category: "hot_dishes",
            new: true,
        },
        {
            id: 18,
            name: t("dish_18"),
            price: "9000֏",
            category: "mangal",
            new: true,
        },
        {
            id: 19,
            name: t("dish_19"),
            price: "1000֏",
            category: "drinks",
        },
        {
            id: 20,
            name: t("dish_20"),
            price: "2500֏",
            category: "fruit",
        },
        {
            id: 21,
            name: t("dish_21"),
            price: "1000֏",
            category: "soups",
        },
        {
            id: 22,
            name: t("dish_22"),
            price: "1200֏",
            category: "salads",
        },
        {
            id: 23,
            name: t("dish_23"),
            price: "1200֏",
            category: "egg_dishes",
        },
        {
            id: 24,
            name: t("dish_24"),
            price: "2000֏",
            category: "salads",
        },
        {
            id: 25,
            name: t("dish_25"),
            price: "1200֏",
            category: "garnishes",
        },
        {
            id: 26,
            name: t("dish_26"),
            price: "18000֏",
            category: "mangal",
        },
        {
            id: 27,
            name: t("dish_27"),
            price: "3200֏",
            category: "salads",
        },
        {
            id: 28,
            name: t("dish_28"),
            price: "1200֏",
            category: "salads",
        },
        {
            id: 29,
            name: t("dish_29"),
            price: "2200֏",
            category: "hot_dishes",
        },
        {
            id: 30,
            name: t("dish_30"),
            price: "1200֏",
            category: "cold_dishes",
        },
        {
            id: 31,
            name: t("dish_31"),
            price: "2200֏",
            category: "salads",
        },
    ];

    return dishes;
};

export default useDishes;

export type TDishCategory =
    | "all"
    | "mangal"
    | "salads"
    | "soups"
    | "garnishes"
    | "egg_dishes"
    | "hot_dishes"
    | "cold_dishes"
    | "fruit"
    | "bakery"
    | "drinks";

export interface IDishCard {
    id: number;
    name: string;
    price: string;
    category: TDishCategory;
    new?: boolean;
}

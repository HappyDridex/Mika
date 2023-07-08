import { useMemo } from "react";
import { createPortal } from "react-dom";
import { Outlet } from "react-router-dom";
import { useArrayFilter } from "../../../hooks/useArrayFilter";
import useNavigateWithSearchParams from "../../../hooks/useNavigateWithSearchParams";
import useDishes from "../../../hooks/useDishes";
import DishCard from "../../ui/DishCard";

const DishesList = () => {
    const arrayFilter = useArrayFilter();
    const dishes = useDishes();
    const sortedDishes = useMemo(
        () => arrayFilter.filterByQueryKey(dishes, "category"),
        [arrayFilter, dishes]
    );
    const navigateWithSearchParams = useNavigateWithSearchParams();
    const onDishClick = (dishId: number) => navigateWithSearchParams(`${dishId}`);

    return (
        <div className="container grid min-h-[500px] auto-rows-min grid-cols-2 gap-x-3 gap-y-6 px-[10px] pb-28 md:gap-x-9 md:gap-y-12 md:px-[7%] lg:grid-cols-3">
            {sortedDishes.map((dish) => {
                return (
                    <DishCard
                        key={dish.id}
                        name={dish.name}
                        id={dish.id}
                        price={dish.price}
                        onClick={() => onDishClick(dish.id)}
                    />
                );
            })}
            {createPortal(<Outlet />, document.body)}
        </div>
    );
};

export default DishesList;

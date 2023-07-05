import { useMemo } from "react";
import { createPortal } from "react-dom";
import { useSearchParams, Outlet } from "react-router-dom";
import { useArrayFilter } from "../../../hooks/useArrayFilter";
import useNavigateWithSearchParams from "../../../hooks/useNavigateWithSearchParams";
import useDishes from "../../../hooks/useDishes";
import DishCard from "../../ui/DishCard";

const DishesList = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const arrayFilter = useArrayFilter();
    const dishes = useDishes();
    const sortedDishes = useMemo(
        () => arrayFilter.filterByQueryKey(dishes, "category"),
        [searchParams, arrayFilter]
    );
    const navigateWithSearchParams = useNavigateWithSearchParams();
    const onDishClick = (dishId: number) => navigateWithSearchParams(`${dishId}`);

    return (
        <div className="container grid grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-12 min-h-[500px] pb-28">
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

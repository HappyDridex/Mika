import { useMemo } from "react";
import { createPortal } from "react-dom";
import { useSearchParams } from "react-router-dom";
import { dishes } from "../../../data/dishes";
import { useArrayFilter } from "../../../hooks/useArrayFilter";
import DishCard from "../../ui/DishCard";
import ModalDishCard from "../../modals/ModalDishCard";

const DishesList = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const arrayFilter = useArrayFilter();
    const sortedDishes = useMemo(() => arrayFilter.filterByQueryKey(dishes, "category"), [searchParams]);

    return (
        <div className="container grid grid-cols-3 gap-x-9 gap-y-24 min-h-[500px]">
            {sortedDishes.map((dish) => {
                return <DishCard key={dish.id} idx={dish.idx} price={dish.price} />;
            })}
            {false && createPortal(<ModalDishCard />, document.body)}
        </div>
    );
};

export default DishesList;

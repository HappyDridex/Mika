import { Link } from "react-router-dom";
import DishCard from "../../ui/DishCard";
import { dishes } from "../../../data/dishes";

const DishesSlider = () => {
    return (
        <section className="container mt-20">
            <div className="flex justify-between items-center text-light">
                <h2 className="text-6xl font-bold">Свежее меню</h2>
                <Link to="menu" className="text-3xl font-normal">
                    посмотреть все
                </Link>
            </div>
            <div className="grid grid-cols-3 gap-9 select-none mt-12">
                {dishes
                    .filter((_, i) => i < 3)
                    .map((dish) => {
                        return <DishCard key={dish.id} idx={dish.idx} price={dish.price} />;
                    })}
            </div>
        </section>
    );
};

export default DishesSlider;

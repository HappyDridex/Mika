import DishCard from "../../ui/DishCard";

const DishesSlider = () => {
    const cards = [
        { id: 0, price: "1 500֏" },
        { id: 1, price: "1 500֏" },
        { id: 2, price: "1 500֏" },
    ];

    return (
        <section className="container mt-20">
            <div className="flex justify-between text-light">
                <h2 className="text-6xl font-bold">Свежее меню</h2>
                <button className="text-3xl font-normal">посмотреть все</button>
            </div>
            <div className="flex gap-9 justify-between select-none mt-12">
                {cards.map((card, idx) => {
                    return <DishCard key={card.id} idx={idx} price={card.price} />;
                })}
            </div>
        </section>
    );
};

export default DishesSlider;

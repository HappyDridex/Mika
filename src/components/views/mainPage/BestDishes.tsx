import bestDishes from "./../../../assets/images/BestDishes.png";

const BestDishes = () => {
    return (
        <section className="w-full relative text-center">
            <h2 className="text-light text-6xl absolute top-[200px] z-30 w-max left-1/2 transform -translate-x-1/2">
                Изысканные блюда в каждом вкусе
            </h2>
            <div className="absolute top-0 z-20 w-full h-full bg-gradient-to-b from-black via-transparent to-black"></div>
            <img className="object-cover z-10 w-full h-[1300px]" src={bestDishes} />
        </section>
    );
};

export default BestDishes;

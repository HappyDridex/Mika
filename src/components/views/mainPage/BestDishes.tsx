import bestDishes from "./../../../assets/images/BestDishes.png";
import salt from "./../../../assets/images/salt.png";

const BestDishes = () => {
    return (
        <section className="w-full relative text-center">
            <h2 className="text-light text-6xl absolute top-[200px] z-30 w-full left-1/2 transform -translate-x-1/2">
                Изысканные вкусы в каждом блюде
            </h2>
            <div className="absolute top-0 z-20 w-full h-full bg-gradient-to-b from-black via-transparent to-black"></div>
            <img className="anime absolute right-20 object-cover z-9 w-full h-[1300px]" src={salt} />
            <img className="object-contain z-10 w-full h-[800px]" src={bestDishes} />
        </section>
    );
};

export default BestDishes;

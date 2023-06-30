interface IDishCardProps {
    price: string;
    idx?: number;
}

const DishCard = (props: IDishCardProps) => {
    const { price, idx } = props;
    return (
        <div className="">
            <div className="h-[300px] w-full">
                <img className="object-cover w-full h-full rounded-3xl" src={require(`./../../assets/images/dish${idx}.jpg`)} alt="Блюдо" />
            </div>
            <div className="bg-darkMuted w-fit rounded-full py-3 px-9 mt-5">
                <span className="text-light text-2xl">{price}</span>
            </div>
        </div>
    );
};

export default DishCard;
